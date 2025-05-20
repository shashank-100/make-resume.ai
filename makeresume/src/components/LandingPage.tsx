import React from 'react'
import { CheckCircle, Star, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onStartResume: () => void;
}

export default function LandingPage({ onStartResume }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          makeresume.ai<sup className="text-xs">®</sup>
        </div>
        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-white hover:text-white/80">
            Pricing
          </a>
          <a href="#testimonials" className="text-white hover:text-white/80">
            Testimonials
          </a>
          <Button onClick={onStartResume} className="bg-white text-black hover:bg-white/90 rounded-full px-6">Try for Free</Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative">
          {/* Curved white section */}
          <div className="absolute inset-x-0 top-32 h-[500px] bg-white" style={{ borderRadius: "100% 100% 0 0" }}></div>

          {/* Hero content */}
          <div className="container mx-auto px-4 relative z-10 pt-20 pb-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Create Resumes that
                <br />
                Get Replies.
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Save time by writing and editing resumes with the most powerful{" "}
                <span className="font-bold">AI Resume Builder.</span>
              </p>

              <div className="flex flex-col items-center gap-8">
                <Button onClick={onStartResume} className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2">
                  <div className="bg-white rounded-full p-1">
                    <span className="text-[#4285F4] font-bold">G</span>
                  </div>
                  Create Your Resume
                </Button>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                        <div className="w-full h-full bg-gray-300"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex text-yellow-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="fill-current" size={20} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Loved by +580,000 users</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-purple-600" />
                    <span>Generate From LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-purple-600" />
                    <span>Unlimited Resumes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-purple-600" />
                    <span>Simple AI Editor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App screenshot section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-xl">
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-center mb-4">Create a new application kit</h3>

              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-black fill-current" size={20} />
                  <span className="text-gray-700">Using Your Saved Resume</span>
                  <div className="ml-auto flex gap-2">
                    <button className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9z"></path>
                        <path d="M9 12h6"></path>
                        <path d="M12 9v6"></path>
                      </svg>
                    </button>
                    <button className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Job Description you'd like to tailor the application kit to
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-3 h-32"
                  placeholder="Paste job description here..."
                ></textarea>
              </div>

              <div className="flex justify-center">
                <Button onClick={onStartResume} className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">How makeresume.ai Works</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Import Your Resume</h3>
                  <p className="text-gray-600">
                    Upload your existing resume or import directly from LinkedIn to get started.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI Enhancement</h3>
                  <p className="text-gray-600">
                    Our AI analyzes your resume and suggests improvements to make it stand out.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Job-Specific Tailoring</h3>
                  <p className="text-gray-600">
                    Customize your resume for each job application to increase your chances of getting hired.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button onClick={onStartResume} className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg">
                  Start Building Your Resume <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">JD</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">John Doe</h4>
                      <p className="text-gray-600">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600">"The AI suggestions helped me highlight my achievements better. Got more interview calls after updating my resume!"</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">AS</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">Alice Smith</h4>
                      <p className="text-gray-600">"The templates are beautiful and professional. Made my resume stand out from the competition."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Free</h3>
                  <p className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-600">/month</span></p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600" />
                      <span>1 Resume</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600" />
                      <span>Basic Templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-600" />
                      <span>AI Suggestions</span>
                    </li>
                  </ul>
                  <Button onClick={onStartResume} className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                    Get Started
                  </Button>
                </div>
                <div className="bg-purple-600 p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-4">Pro</h3>
                  <p className="text-4xl font-bold mb-6">$9.99<span className="text-lg text-white/80">/month</span></p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="text-white" />
                      <span>Unlimited Resumes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-white" />
                      <span>All Templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-white" />
                      <span>Advanced AI Features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-white" />
                      <span>Priority Support</span>
                    </li>
                  </ul>
                  <Button onClick={onStartResume} className="w-full bg-white text-purple-600 hover:bg-white/90 rounded-full">
                    Upgrade to Pro
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 makeresume.ai. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 