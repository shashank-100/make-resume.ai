import React from 'react';
import { Button } from "@/components/ui/button";

interface HomePageProps {
  onStartFromScratch: () => void;
  onUploadResume: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartFromScratch, onUploadResume }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Create Your Professional</span>
          <span className="block text-blue-600">Resume in Minutes</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Build a standout resume with our AI-powered resume builder. Get expert suggestions and create a professional resume that gets you noticed.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button
            onClick={onStartFromScratch}
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Start from Scratch
          </Button>
          <Button
            onClick={onUploadResume}
            variant="outline"
            className="px-8 py-3 text-lg font-medium text-blue-600 border-2 border-blue-600 hover:bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Upload Existing Resume
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Suggestions</h3>
            <p className="text-gray-600">Get intelligent suggestions to improve your resume content and make it more impactful.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Templates</h3>
            <p className="text-gray-600">Choose from a variety of professionally designed templates that suit your industry.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">ATS-Friendly</h3>
            <p className="text-gray-600">Our resumes are optimized for Applicant Tracking Systems to help you get past the initial screening.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JD</span>
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
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">AS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Alice Smith</h4>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600">"The templates are beautiful and professional. Made my resume stand out from the competition."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">RJ</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Robert Johnson</h4>
                  <p className="text-gray-600">Product Designer</p>
                </div>
              </div>
              <p className="text-gray-600">"The step-by-step process made it easy to create a comprehensive resume. Highly recommended!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 