import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [goals, setGoals] = useState("");
  const fileInput = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
            {/* Placeholder for dropdown */}
          </div>
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">Guest
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a7.5 7.5 0 0115 0z" /></svg>
            </button>
            {/* Placeholder for profile dropdown */}
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

      {/* Hero Section */}
      <main className="flex-1 w-full flex flex-col items-center mt-8 px-4">
        {/* Headline */}
        <div className="max-w-3xl w-full text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            You've found it: an AI Resume Builder that actually works (and that'll give you your money back if you don't like it, no fuss).
          </h1>
          <p className="text-lg mb-8 text-[#444f5a]">
            How can you trust that this is the right AI Resume Builder out of all the ones on the internet these days? Well, this is a passion project for us. We don't do this for our mortgage payments — <a href="https://www.linkedin.com/in/nateschier" className="underline text-[#2a5c97]">Nate</a> is a staff software engineer at Eventbrite who has exited one business, and <a href="https://linkedin.com/in/colindmcintosh" className="underline text-[#2a5c97]">Colin</a> is now a world-famous bedding mogul as CEO of <a href="https://sheetsgiggles.com" className="underline text-[#2a5c97]">Sheets & Giggles</a>.
          </p>
        </div>
        {/* CTA Buttons */}
        <div className="max-w-3xl w-full flex flex-col sm:flex-row gap-4 mb-10">
          <button
            className="flex-1 flex items-center gap-2 py-4 px-6 rounded-lg bg-gradient-to-r from-[#8e4bc7] to-[#2a5c97] text-white font-semibold shadow-md hover:opacity-90 transition"
            onClick={() => setOpenModal(true)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M17 4a1 1 0 011 1v1h1a1 1 0 011 1v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h11zm0 2H6v13h12V7zm-2.293 6.707a1 1 0 010-1.414l1-1a1 1 0 011.414 1.414l-.293.293V17a1 1 0 11-2 0v-2.586l-.293.293z"/></svg>
            Start with your Existing Resume
          </button>
          <button
            className="flex-1 flex items-center gap-2 py-4 px-6 rounded-lg bg-gradient-to-r from-[#34c774] to-[#2a5c97] text-white font-semibold shadow-md hover:opacity-90 transition"
            onClick={() => setOpenModal(true)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M7 3a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7zm0 2h10v16H7V5zm2 2a1 1 0 112 0v12a1 1 0 11-2 0V7zm4 0a1 1 0 112 0v12a1 1 0 11-2 0V7z"/></svg>
            Start with your LinkedIn Profile
          </button>
          <button
            className="flex-1 flex items-center gap-2 py-4 px-6 rounded-lg bg-gradient-to-r from-[#4b73c7] to-[#8e4bc7] text-white font-semibold shadow-md hover:opacity-90 transition"
            onClick={() => setOpenModal(true)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 3a9 9 0 100 18a9 9 0 000-18zm1 13h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
            Start from Scratch
          </button>
        </div>

        {/* Main media panel: video and resume preview */}
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-6 mb-10">
          {/* Video Thumbnail with Play Overlay */}
          <div className="bg-white rounded-lg shadow-md p-0 flex-1 min-h-[350px] flex justify-center items-center overflow-hidden">
            <div className="relative w-full h-full flex justify-center items-center">
              <img src="https://ext.same-assets.com/3454547172/4291007545.jpeg" alt="Build A Resume in Seconds with AI video" className="w-full object-contain h-[250px] sm:h-[320px]" />
              <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2a5c97] p-3 rounded-full shadow-lg border-4 border-white hover:bg-[#8e4bc7] transition">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </button>
              <span className="absolute right-4 bottom-4 bg-[#222c] text-white px-3 py-1 text-xs rounded-full">Click to play</span>
            </div>
          </div>
          {/* Resume image preview */}
          <div className="bg-white rounded-lg shadow-md py-4 px-2 flex-1 min-h-[350px] flex justify-center items-center overflow-auto">
            <img
              src="https://ext.same-assets.com/3454547172/478893813.webp"
              alt="Resume template preview"
              className="rounded-md shadow max-h-[300px] border border-[#c9cdd1] bg-white"
              style={{ maxWidth: '95%' }}
            />
          </div>
        </div>

        {/* Below the media panel: Body content paragraphs */}
        <section className="max-w-3xl w-full mb-8">
          <h2 className="text-xl font-semibold mb-3">Land More Interviews with the makeresume.ai AI Resume Builder</h2>
          <p className="mb-3 text-[#444f5a]">
            We do this for love of the game (and that "game" is landing you an amazing new job so your family can continue to access employer-provided healthcare; great system we've got). Since 2018, <a href="https://www.reddit.com/r/jobs/comments/7y8k6p/im_an_exrecruiter_for_some_of_the_top_companies" className="underline text-[#2a5c97]">we've helped literally millions of people on Reddit with their job hunt</a>, and we've heard directly from tens of thousands of people who have switched to our resume format, landed an amazing new job, and changed their lives. To help people even more... in 2023 we started finding time on nights and weekends to do long-form 1:1 Resume Refreshes for job seekers who needed a professional review (and one that didn't break the bank).
          </p>
          <p className="mb-3 text-[#444f5a]">
            Unfortunately, Nate and Colin are still human (not today, Musk), so time is a major limiting factor on how many people we can help 1:1. Beyond that, cost is another limiter: we try to offer our Resume Refresh for a relatively inexpensive $400 — some resume writers charge $1,000+! What?! — but realistically it's still a lot of money for people in between jobs. So, we created this AI Resume Builder to dramatically amplify our 1:1 resume review efforts with a far more affordable option that works 24/7, round the clock, anywhere in the world.
          </p>
          <p className="mb-3 text-[#444f5a]">
            Most job searches take around 3 months, and in that time we understand that most of you will need to make 5, 10, 20, or even 50 various resumes for different types of roles. We didn't want to make this a monthly subscription — we also hate being charged for stuff we forget about! — so for a small cost you'll receive lifetime access to our AI Resume Builder, <a href="https://makeresume.ai/cover-letter" className="underline text-[#2a5c97]">free cover letter maker</a>, and Mock Interviews.
          </p>
          <p className="mb-6 text-[#444f5a]">
            <strong>Note:</strong> If you are facing tough financial times, as many people are, email me at <a href="mailto:colin@makeresume.ai" className="underline text-[#2a5c97]">colin@makeresume.ai</a> and I'll give you a temporary membership to help you out.
          </p>
          <a className="block w-fit mx-auto px-8 py-3 rounded-lg bg-[#2a5c97] text-white font-semibold text-lg shadow hover:bg-[#8e4bc7] transition mb-6" href="#">Get Started</a>
        </section>
      </main>

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
