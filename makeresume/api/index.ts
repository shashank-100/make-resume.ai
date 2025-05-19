import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";
import cors from "cors";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";
import fs from "fs";
import path from "path";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json()); // For JSON body parsing

// Setup file upload middleware
const upload = multer({ dest: path.join(__dirname, "uploads/") });

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Make sure uploads directory exists
if (!fs.existsSync(path.join(__dirname, "uploads/"))) {
  fs.mkdirSync(path.join(__dirname, "uploads/"), { recursive: true });
}

// Helper: extract text from uploaded resume
async function extractText(file: Express.Multer.File): Promise<string> {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".pdf") {
    const dataBuffer = fs.readFileSync(file.path);
    const pdf = await pdfParse(dataBuffer);
    return pdf.text;
  } else if (ext === ".txt") {
    return fs.readFileSync(file.path, "utf8");
  } else if (ext === ".doc" || ext === ".docx" || ext === ".rtf" || ext === ".odt") {
    return "[Resume parsing for this file format is not yet supported. Please upload PDF or TXT resumes for demo.]";
  }
  return "";
}

// Primary API Routes
// ==================

// 1. Process Resume - Upload, parse and improve a resume
app.post("/api/process-resume", upload.single("resume"), async (req, res) => {
  try {
    const file = req.file;
    const goals: string = (req.body.goals || "").substring(0, 1000); // Truncate

    if (!file) return res.status(400).json({ error: "No resume uploaded." });

    const resumeText = await extractText(file);
    fs.unlinkSync(file.path); // Cleanup after extraction

    // Call OpenAI for resume improvement
    const prompt = `You are an expert resume writer. Given the following resume text and user career info, suggest clear, concise improvements to make the resume more impactful for modern job applications.

RESUME:
${resumeText.substring(0, 6000)}

USER GOALS (optional):
${goals}

Return the improved resume as full text in a clean, professional format. Focus on highlighting achievements, using action verbs, and quantifying results. Do not mention or refer to any photos or visuals. No commentary needed - only return the improved resume text.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert resume writer." },
        { role: "user", content: prompt },
      ],
      max_tokens: 1500,
      temperature: 0.6,
    });

    const aiResult = completion.choices[0]?.message?.content || "[AI did not return a result.]";
    res.json({ result: aiResult });
  } catch (err: any) {
    console.error('Resume processing error:', err);
    res.status(500).json({ error: err.message || "Processing error" });
  }
});

// 2. Generate Cover Letter - Create a tailored cover letter based on resume and job description
app.post("/api/generate-cover-letter", async (req, res) => {
  try {
    const { resumeText, jobDescription, companyName } = req.body;

    if (!resumeText || !jobDescription) {
      return res.status(400).json({
        error: "Missing required fields. Please provide resume text and job description."
      });
    }

    // Call OpenAI for cover letter generation
    const prompt = `Create a professional, tailored cover letter for a job application with the following details:

RESUME:
${resumeText.substring(0, 2000)}

JOB DESCRIPTION:
${jobDescription.substring(0, 1500)}

COMPANY:
${companyName || 'the company'}

Write a concise, professional cover letter that connects my experience to the job requirements. Make it sound natural, confident, and not generic. The letter should be around 300-400 words, include a proper salutation, 3 paragraphs (intro connecting to role, middle showing qualifications, conclusion with call to action), and a professional sign-off. No images or charts should be mentioned.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert at writing compelling cover letters." },
        { role: "user", content: prompt },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const aiResult = completion.choices[0]?.message?.content || "[AI did not generate a cover letter.]";
    res.json({ result: aiResult });
  } catch (err: any) {
    console.error('Cover letter generation error:', err);
    res.status(500).json({ error: err.message || "Processing error" });
  }
});

// 3. Mock Interview - Generate interview questions and sample answers based on job role
app.post("/api/mock-interview", async (req, res) => {
  try {
    const { jobTitle, industry, resumeText, experienceLevel } = req.body;

    if (!jobTitle) {
      return res.status(400).json({ error: "Job title is required." });
    }

    // Call OpenAI for interview questions
    const prompt = `Generate a realistic mock interview for a ${jobTitle} position${industry ? ` in the ${industry} industry` : ''}${experienceLevel ? ` for someone with ${experienceLevel} experience` : ''}.

${resumeText ? `CANDIDATE RESUME:\n${resumeText.substring(0, 1500)}\n\n` : ''}

Create a set of 5 interview questions with the following structure:
1. Technical/skill-based questions specific to the role
2. Behavioral questions to assess fit and soft skills
3. Problem-solving or scenario-based questions
4. Questions about past experience and achievements
5. Questions the candidate might ask the interviewer

For each question, provide:
- The interview question
- What the interviewer is looking for
- Sample strong answer (1-3 paragraphs)

Format each as JSON object with fields: "question", "interviewer_looking_for", and "sample_answer". Return the full array.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert at creating realistic interview preparation questions and answers. Format your response as valid JSON." },
        { role: "user", content: prompt },
      ],
      max_tokens: 2500,
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    let aiResult = completion.choices[0]?.message?.content || "[]";

    // Parse the JSON from OpenAI response
    try {
      const parsed = JSON.parse(aiResult);
      res.json(parsed);
    } catch (jsonError) {
      // If JSON parsing fails, return the raw text
      console.error('Failed to parse interview response as JSON:', jsonError);
      res.json({ error: "Failed to generate properly formatted interview questions.", rawResult: aiResult });
    }
  } catch (err: any) {
    console.error('Mock interview generation error:', err);
    res.status(500).json({ error: err.message || "Processing error" });
  }
});

// 4. Job search - Simplified demo endpoint for job suggestions based on resume
app.post("/api/job-suggestions", async (req, res) => {
  try {
    const { resumeText, location, remote } = req.body;

    if (!resumeText) {
      return res.status(400).json({ error: "Resume text is required." });
    }

    // Call OpenAI for job suggestions
    const prompt = `Based on the following resume, suggest 5 job titles and 5 job descriptions this person would be qualified for. Consider skills, experience, and career trajectory.

RESUME:
${resumeText.substring(0, 3000)}

LOCATION: ${location || 'Not specified'}
REMOTE PREFERENCE: ${remote ? 'Prefers remote work' : 'No preference'}

Format the response as a JSON object with two arrays:
1. "job_titles" - an array of 5 job titles with company types
2. "job_descriptions" - an array of 5 objects, each with "title", "company", "location", "description", and "qualifications" fields.

Make all suggestions realistic, specific, and tailored to the resume's experience level and skills.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a career counselor and job search expert. Format your response as valid JSON." },
        { role: "user", content: prompt },
      ],
      max_tokens: 1500,
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    let aiResult = completion.choices[0]?.message?.content || "{}";

    // Parse the JSON from OpenAI response
    try {
      const parsed = JSON.parse(aiResult);
      res.json(parsed);
    } catch (jsonError) {
      // If JSON parsing fails, return the raw text
      console.error('Failed to parse job suggestions as JSON:', jsonError);
      res.json({ error: "Failed to generate properly formatted job suggestions.", rawResult: aiResult });
    }
  } catch (err: any) {
    console.error('Job suggestions error:', err);
    res.status(500).json({ error: err.message || "Processing error" });
  }
});

// 5. Get FAQ - No OpenAI needed, just return some static FAQ data
app.get("/api/faq", (req, res) => {
  const faqItems = [
    {
      question: "How does the AI Resume Builder work?",
      answer: "Our AI Resume Builder uses advanced AI to analyze your existing resume or LinkedIn profile, then generates an optimized version highlighting your strengths and achievements in a format preferred by recruiters and ATS systems."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. Your resume information is only used to generate improvements and is not shared with third parties. We encrypt sensitive data and don't store your resume permanently unless you create an account."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a one-time payment option that gives you lifetime access to our AI Resume Builder, Cover Letter Generator, and Mock Interview tools - no recurring subscriptions. Check our pricing page for current rates."
    },
    {
      question: "What file formats do you support?",
      answer: "We support .pdf, .doc, .docx, .txt, and .rtf formats for resume uploads. For best results, we recommend using PDF or DOCX formats."
    },
    {
      question: "How do I get a refund?",
      answer: "If you're not satisfied with our tools, simply email us within 30 days of your purchase. We offer a no-questions-asked refund policy to ensure you're completely satisfied."
    }
  ];

  res.json({ faq: faqItems });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Resume API server running on http://localhost:${PORT}`);
  console.log(`Make sure to create a .env file with your OPENAI_API_KEY=sk-xxx`);
});
