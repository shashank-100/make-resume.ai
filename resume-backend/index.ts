import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";
import cors from "cors";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Helper: simple text extraction
async function extractText(file: Express.Multer.File): Promise<string> {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".pdf") {
    const dataBuffer = fs.readFileSync(file.path);
    const pdf = await pdfParse(dataBuffer);
    return pdf.text;
  } else if (ext === ".txt") {
    return fs.readFileSync(file.path, "utf8");
  } else if (ext === ".doc" || ext === ".docx" || ext === ".rtf" || ext === ".odt") {
    // For brevity, skip Office format parsing (could add mammoth for docx later)
    return "[Resume parsing for this file format is not yet supported. Please upload PDF or TXT resumes for demo.]";
  }
  return "";
}

// POST /api/process-resume
app.post("/api/process-resume", upload.single("resume"), async (req, res) => {
  try {
    const file = req.file;
    const goals: string = (req.body.goals || "").substring(0, 1000); // prevent super long input
    if (!file) return res.status(400).json({ error: "No resume uploaded." });
    const resumeText = await extractText(file);

    // Remove the uploaded file
    fs.unlinkSync(file.path);

    // Compose AI prompt
    const prompt = `You are an expert resume writer. Given the following resume text and user career info, suggest clear, concise improvements (rewrite as needed) to make the resume more impactful for modern job applications.\n\nRESUME:\n${resumeText.substring(0, 6000)}\n\nUSER GOALS (optional):\n${goals}\n\nReturn the improved resume as full text, no commentary. Do not refer to any blurred face or photo in the resume at all.`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert resume writer." },
        { role: "user", content: prompt }
      ],
      max_tokens: 1200,
      temperature: 0.6,
    });
    const aiResult = completion.choices[0]?.message?.content || "[AI did not return a result.]";
    res.json({ result: aiResult });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Processing error" });
  }
});

app.listen(3001, () => {
  console.log("Resume backend API running on http://localhost:3001");
});
