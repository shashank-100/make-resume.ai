import React, { useState } from 'react';

interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

interface WorkHistoryProps {
  onNext: () => void;
  onBack: () => void;
  data: WorkExperience[];
  onUpdate: (data: WorkExperience[]) => void;
}

const WorkHistory: React.FC<WorkHistoryProps> = ({ onNext, onBack, data, onUpdate }) => {
  const [experiences, setExperiences] = useState<WorkExperience[]>([
    {
      id: '1',
      company: 'Capital One',
      position: 'Software Engineer',
      startDate: '2023-08',
      endDate: '',
      current: true,
      description: 'Capital One is a Fortune 500 company and a leading information-based technology company that specializes in the fields of finance and banking.',
      achievements: [
        'Led the development of student credit card application UI, achieving over 100 million impressions.',
        'Implemented Jenkins CI/CD pipelines, reducing DN application deployment time significantly.',
        'Designed and developed microservices for OAuth2.0 APIs, enabling secure external authentication.',
        'Architected features for applynow.capitalone.com, enhancing customer experience.',
        'Maintained AWS infrastructure, performing region failovers and vulnerability fixes.',
        'Automated client onboarding to MFA security pipeline, improving process duration by 1,500%.'
      ]
    }
  ]);
  const [currentExperience, setCurrentExperience] = useState<WorkExperience>({
    id: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    achievements: []
  });

  const handleAddExperience = () => {
    if (!currentExperience.company || !currentExperience.position || !currentExperience.startDate) {
      return;
    }

    const newExperience = {
      ...currentExperience,
      id: Date.now().toString()
    };

    const updatedExperiences = [...experiences, newExperience];
    setExperiences(updatedExperiences);
    onUpdate(updatedExperiences);

    setCurrentExperience({
      id: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: []
    });
  };

  const handleRemoveExperience = (id: string) => {
    const updatedExperiences = experiences.filter(exp => exp.id !== id);
    setExperiences(updatedExperiences);
    onUpdate(updatedExperiences);
  };

  const handleAchievementChange = (index: number, value: string) => {
    const updatedAchievements = [...currentExperience.achievements];
    updatedAchievements[index] = value;
    setCurrentExperience(prev => ({
      ...prev,
      achievements: updatedAchievements
    }));
  };

  const handleAddAchievement = () => {
    setCurrentExperience(prev => ({
      ...prev,
      achievements: [...prev.achievements, '']
    }));
  };

  const handleRemoveAchievement = (index: number) => {
    const updatedAchievements = currentExperience.achievements.filter((_, i) => i !== index);
    setCurrentExperience(prev => ({
      ...prev,
      achievements: updatedAchievements
    }));
  };

  return (
    <div className="py-2">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
          <div className="relative">
            <div className="">
              <div className="text-center px-5 pt-5">
                <div className="mb-4 md:mb-6 w-full relative">
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border-gray-200 border-2 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Scroll right"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      className="w-6 h-6 text-gray-600 dark:text-gray-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                    </svg>
                  </button>
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-0 pointer-events-none"></div>
                  <div className="overflow-x-auto whitespace-nowrap no-scrollbar relative">
                    <ol className="nav-group inline-flex justify-center items-end space-x-9">
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">1</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Personal Details</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-blue-600 dark:text-blue-300 font-bold text-lg">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-blue-600 dark:border-blue-300 font-bold">2</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Work History</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">3</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Education</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">4</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Certifications</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">5</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Skills</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">6</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Interests</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">7</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Finalize</h3>
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex-1 p-5">
                  <div className="max-w-xl container mx-auto flex flex-col h-full">
                    <div className="container mx-auto flex flex-col h-full">
                      <div>
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">Work History</h1>
                        <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">
                          Add your work experience, starting with your most recent position.
                        </p>

                        <div className="mt-8 space-y-4">
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="company">
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              value={currentExperience.company}
                              onChange={(e) => setCurrentExperience(prev => ({ ...prev, company: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., Acme Corporation"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="position">
                              Job Title
                            </label>
                            <input
                              type="text"
                              id="position"
                              value={currentExperience.position}
                              onChange={(e) => setCurrentExperience(prev => ({ ...prev, position: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., Senior Software Engineer"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="startDate">
                                Start Date
                              </label>
                              <input
                                type="month"
                                id="startDate"
                                value={currentExperience.startDate}
                                onChange={(e) => setCurrentExperience(prev => ({ ...prev, startDate: e.target.value }))}
                                className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="endDate">
                                End Date
                              </label>
                              <input
                                type="month"
                                id="endDate"
                                value={currentExperience.endDate}
                                onChange={(e) => setCurrentExperience(prev => ({ ...prev, endDate: e.target.value }))}
                                className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                disabled={currentExperience.current}
                              />
                            </div>
                          </div>

                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="current"
                              checked={currentExperience.current}
                              onChange={(e) => setCurrentExperience(prev => ({ ...prev, current: e.target.checked }))}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              I currently work here
                            </label>
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                              Job Description
                            </label>
                            <textarea
                              id="description"
                              value={currentExperience.description}
                              onChange={(e) => setCurrentExperience(prev => ({ ...prev, description: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              rows={3}
                              placeholder="Brief description of your role and responsibilities"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                              Key Achievements
                            </label>
                            {currentExperience.achievements.map((achievement, index) => (
                              <div key={index} className="flex gap-2 mb-2">
                                <input
                                  type="text"
                                  value={achievement}
                                  onChange={(e) => handleAchievementChange(index, e.target.value)}
                                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="e.g., Increased team productivity by 50%"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleRemoveAchievement(index)}
                                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={handleAddAchievement}
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                            >
                              + Add Achievement
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={handleAddExperience}
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Add Experience
                          </button>
                        </div>

                        {experiences.length > 0 && (
                          <div className="mt-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Added Experiences</h2>
                            <div className="space-y-4">
                              {experiences.map((exp) => (
                                <div key={exp.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                                      <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                      </p>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveExperience(exp.id)}
                                      className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                    >
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex space-x-4 mt-8">
                          <button
                            type="button"
                            onClick={onBack}
                            className="flex-1 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={onNext}
                            className="flex-1 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Next: Education
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory; 