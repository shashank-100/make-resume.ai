import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import PersonalDetails from "./components/PersonalDetails";
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Finalize from './components/Finalize';

interface PersonalDetailsData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  portfolio: string;
}

interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface EducationData {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate: string;
  noExpiry: boolean;
  credentialId: string;
  credentialUrl: string;
}

interface Skill {
  id: string;
  name: string;
  proficiency: number;
  category: string;
}

interface Interest {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface ResumeData {
  personalDetails: PersonalDetailsData;
  workHistory: WorkExperience[];
  education: EducationData[];
  certifications: Certification[];
  skills: Skill[];
  interests: Interest[];
}

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [goals, setGoals] = useState("");
  const fileInput = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // New state for resume building process
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalDetails: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      portfolio: ''
    },
    workHistory: [],
    education: [],
    certifications: [],
    skills: [],
    interests: []
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setResult(null);
    setError(null);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("goals", goals);
    try {
      const response = await fetch("http://localhost:3001/api/process-resume", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Upload failed");
      }
      const data = await response.json();
      setResult(data.result || "No suggestions returned.");
    } catch (err: any) {
      setError(err.message || "Error generating resume");
    }
    setLoading(false);
  };

  const handleStartFromScratch = () => {
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBackStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleUpdatePersonalDetails = (details: PersonalDetailsData) => {
    setResumeData(prev => ({
      ...prev,
      personalDetails: details
    }));
  };

  const handleUpdateWorkHistory = (workHistory: WorkExperience[]) => {
    setResumeData(prev => ({
      ...prev,
      workHistory
    }));
  };

  const handleUpdateEducation = (education: EducationData[]) => {
    setResumeData(prev => ({
      ...prev,
      education
    }));
  };

  const handleUpdateCertifications = (certifications: Certification[]) => {
    setResumeData(prev => ({
      ...prev,
      certifications
    }));
  };

  const handleUpdateSkills = (skills: Skill[]) => {
    setResumeData(prev => ({
      ...prev,
      skills
    }));
  };

  const handleUpdateInterests = (interests: Interest[]) => {
    setResumeData(prev => ({
      ...prev,
      interests
    }));
  };

  const handleGenerateResume = () => {
    // TODO: Implement resume generation logic
    console.log('Generating resume with data:', resumeData);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDetails
            onNext={handleNextStep}
            data={resumeData.personalDetails}
            onUpdate={handleUpdatePersonalDetails}
          />
        );
      case 1:
        return (
          <WorkHistory
            onNext={handleNextStep}
            onBack={handleBackStep}
            data={resumeData.workHistory}
            onUpdate={handleUpdateWorkHistory}
          />
        );
      case 2:
        return (
          <Education
            onNext={handleNextStep}
            onBack={handleBackStep}
            data={resumeData.education}
            onUpdate={handleUpdateEducation}
          />
        );
      case 3:
        return (
          <Certifications
            onNext={handleNextStep}
            onBack={handleBackStep}
            data={resumeData.certifications}
            onUpdate={handleUpdateCertifications}
          />
        );
      case 4:
        return (
          <Skills
            onNext={handleNextStep}
            onBack={handleBackStep}
            data={resumeData.skills}
            onUpdate={handleUpdateSkills}
          />
        );
      case 5:
        return (
          <Interests
            onNext={handleNextStep}
            onBack={handleBackStep}
            data={resumeData.interests}
            onUpdate={handleUpdateInterests}
          />
        );
      case 6:
        return (
          <Finalize
            resumeData={resumeData}
            onBack={handleBackStep}
            onGenerate={handleGenerateResume}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f9] font-sans">
      {/* Navigation Bar */}
      <header className="w-full bg-white shadow-sm px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://ext.same-assets.com/3454547172/1082541063.webp" alt="makeresume.ai Logo" className="w-8 h-8" />
          <span className="font-bold text-lg text-[#2a5c97]">makeresume.ai</span>
        </div>
        <nav className="flex items-center gap-6 text-[#2a5c97] font-medium">
          <a href="#" className="hover:underline">My Resume</a>
          <a href="#" className="hover:underline">Reviews</a>
          <a href="#" className="hover:underline">FAQ</a>
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">More AI Job Tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">Guest
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a7.5 7.5 0 0115 0z" /></svg>
            </button>
          </div>
        </nav>
      </header>

      {/* MODAL DIALOG */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-xl p-0">
          <DialogHeader className="px-6 pt-6 pb-2 border-b">
            <DialogTitle className="text-2xl">Upload an Existing Resume</DialogTitle>
            <Button
              variant="ghost"
              onClick={() => setOpenModal(false)}
              className="absolute right-3 top-5 p-1 hover:bg-accent rounded-full"
              aria-label="Close modal"
              size="icon"
            >
              <X className="w-6 h-6 text-gray-500" />
            </Button>
          </DialogHeader>
          <form className="px-6 py-6 space-y-4" onSubmit={handleGenerate}>
            <div>
              <Label htmlFor="resume-upload" className="font-bold mb-2 block">Upload your existing resume here. We'll refresh it!</Label>
              <Input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx,.rtf,.txt,.odt"
                className=""
                onChange={e => {
                  setFile(e.target.files?.[0] || null);
                  setResult(null);
                  setError(null);
                }}
                ref={fileInput}
              />
              <div className="text-xs pt-1 text-gray-400">.pdf, .doc, .docx, .rtf, .txt and .odt only please.</div>
            </div>
            <div>
              <Label htmlFor="goals" className="mb-1 block font-semibold">(Optional)</Label>
              <div className="text-sm text-gray-600 mb-2">Tell us a little about what you're looking for in your career, either short or long-term, in your own words. This will help personalize our AI's content suggestions to better match the jobs you're going to apply to. If you don't know yet, you can just leave this blank.</div>
              <Textarea
                id="goals"
                placeholder="Describe your career goals or leave blank..."
                className="resize-none h-24"
                value={goals}
                onChange={e => setGoals(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full h-12 mt-4 text-base" disabled={!file || loading} variant="secondary">
              {loading ? 'Processing...' : 'Generate Resume'}
            </Button>
            {result && (
              <div className="mt-4">
                <div className="font-semibold mb-1">AI-Improved Resume:</div>
                <pre className="w-full max-h-64 p-3 bg-gray-50 border rounded text-sm overflow-auto whitespace-pre-wrap">{result}</pre>
              </div>
            )}
            {error && (
              <div className="mt-3 text-center text-red-600">{error}</div>
            )}
          </form>
        </DialogContent>
      </Dialog>

      {renderCurrentStep()}

      {/* Footer */}
      <footer className="w-full bg-[#f7f9f9] border-t border-[#c9cdd1] text-[#444f5a] mt-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-8 px-4">
          <div>
            <div className="flex flex-wrap gap-12">
              <div>
                <strong className="block mb-2">Pages</strong>
                <ul>
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">Pricing</a></li>
                  <li><a href="#" className="hover:underline">Reviews</a></li>
                  <li><a href="#" className="hover:underline">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <strong className="block mb-2">Resources</strong>
                <ul>
                  <li><a href="#" className="hover:underline">FAQ</a></li>
                  <li><a href="#" className="hover:underline">Free Resume Template</a></li>
                  <li><a href="#" className="hover:underline">Advice</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                </ul>
              </div>
              <div>
                <strong className="block mb-2">AI Job Tools</strong>
                <ul>
                  <li><a href="#" className="hover:underline">AI Resume Builder</a></li>
                  <li><a href="#" className="hover:underline">Free Cover Letter Maker</a></li>
                  <li><a href="#" className="hover:underline">AI Mock Interviews</a></li>
                  <li><a href="#" className="hover:underline">AI Job Board</a></li>
                </ul>
              </div>
              <div>
                <strong className="block mb-2">Policies</strong>
                <ul>
                  <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:underline">Referral Program</a></li>
                  <li><a href="#" className="hover:underline">For Organizations</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-3 mb-2">
              <a href="#" aria-label="YouTube" className=""><svg className="w-6 h-6 text-[#c28014]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
              <a href="#" aria-label="Reddit" className=""><svg className="w-6 h-6 text-[#c7a8cd]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
              <a href="#" aria-label="X / Twitter" className=""><svg className="w-6 h-6 text-[#2a5c97]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
              <a href="#" aria-label="Instagram" className=""><svg className="w-6 h-6 text-[#f6e0a2]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
            </div>
            <button className="mt-2 bg-[#c28014] text-white px-4 py-2 rounded shadow hover:opacity-90 transition">Problems, comments or suggestions?</button>
            <div className="text-xs text-[#888] mt-2">
              See an issue? Feel like sending some love? Please let us know! We read all of these.
            </div>
            <div className="mt-1 text-xs flex items-center gap-2">
              <span>Learn more about our Climate Pledge</span>
            </div>
            <div className="mt-2 text-xs text-[#999da5]">© 2025 makeresume.ai. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
