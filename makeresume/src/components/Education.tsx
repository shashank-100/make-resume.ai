import React, { useState } from 'react';

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa: string;
  achievements: string[];
}

interface EducationProps {
  onNext: () => void;
  onBack: () => void;
  data: Education[];
  onUpdate: (data: Education[]) => void;
}

const Education: React.FC<EducationProps> = ({ onNext, onBack, data, onUpdate }) => {
  const [educations, setEducations] = useState<Education[]>(data);
  const [currentEducation, setCurrentEducation] = useState<Education>({
    id: '',
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    current: false,
    gpa: '',
    achievements: []
  });

  const handleAddEducation = () => {
    if (!currentEducation.institution || !currentEducation.degree || !currentEducation.startDate) {
      return;
    }

    const newEducation = {
      ...currentEducation,
      id: Date.now().toString()
    };

    const updatedEducations = [...educations, newEducation];
    setEducations(updatedEducations);
    onUpdate(updatedEducations);

    setCurrentEducation({
      id: '',
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: '',
      achievements: []
    });
  };

  const handleRemoveEducation = (id: string) => {
    const updatedEducations = educations.filter(edu => edu.id !== id);
    setEducations(updatedEducations);
    onUpdate(updatedEducations);
  };

  const handleAchievementChange = (index: number, value: string) => {
    const updatedAchievements = [...currentEducation.achievements];
    updatedAchievements[index] = value;
    setCurrentEducation(prev => ({
      ...prev,
      achievements: updatedAchievements
    }));
  };

  const handleAddAchievement = () => {
    setCurrentEducation(prev => ({
      ...prev,
      achievements: [...prev.achievements, '']
    }));
  };

  const handleRemoveAchievement = (index: number) => {
    const updatedAchievements = currentEducation.achievements.filter((_, i) => i !== index);
    setCurrentEducation(prev => ({
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
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">2</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Work History</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-blue-600 dark:text-blue-300 font-bold text-lg">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-blue-600 dark:border-blue-300 font-bold">3</span>
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
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">Education</h1>
                        <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">
                          Add your educational background, starting with your most recent degree.
                        </p>

                        <div className="mt-8 space-y-4">
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="institution">
                              Institution Name
                            </label>
                            <input
                              type="text"
                              id="institution"
                              value={currentEducation.institution}
                              onChange={(e) => setCurrentEducation(prev => ({ ...prev, institution: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., University of California, Berkeley"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="degree">
                              Degree
                            </label>
                            <input
                              type="text"
                              id="degree"
                              value={currentEducation.degree}
                              onChange={(e) => setCurrentEducation(prev => ({ ...prev, degree: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., Bachelor of Science"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="field">
                              Field of Study
                            </label>
                            <input
                              type="text"
                              id="field"
                              value={currentEducation.field}
                              onChange={(e) => setCurrentEducation(prev => ({ ...prev, field: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., Computer Science"
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
                                value={currentEducation.startDate}
                                onChange={(e) => setCurrentEducation(prev => ({ ...prev, startDate: e.target.value }))}
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
                                value={currentEducation.endDate}
                                onChange={(e) => setCurrentEducation(prev => ({ ...prev, endDate: e.target.value }))}
                                className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                disabled={currentEducation.current}
                              />
                            </div>
                          </div>

                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="current"
                              checked={currentEducation.current}
                              onChange={(e) => setCurrentEducation(prev => ({ ...prev, current: e.target.checked }))}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              I am currently studying here
                            </label>
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="gpa">
                              GPA (Optional)
                            </label>
                            <input
                              type="text"
                              id="gpa"
                              value={currentEducation.gpa}
                              onChange={(e) => setCurrentEducation(prev => ({ ...prev, gpa: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., 3.8/4.0"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                              Achievements & Activities
                            </label>
                            {currentEducation.achievements.map((achievement, index) => (
                              <div key={index} className="flex gap-2 mb-2">
                                <input
                                  type="text"
                                  value={achievement}
                                  onChange={(e) => handleAchievementChange(index, e.target.value)}
                                  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="e.g., Dean's List, Academic Scholarship"
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
                            onClick={handleAddEducation}
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Add Education
                          </button>
                        </div>

                        {educations.length > 0 && (
                          <div className="mt-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Added Education</h2>
                            <div className="space-y-4">
                              {educations.map((edu) => (
                                <div key={edu.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree} in {edu.field}</h3>
                                      <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                                      </p>
                                      {edu.gpa && (
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                          GPA: {edu.gpa}
                                        </p>
                                      )}
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveEducation(edu.id)}
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
                            Next: Certifications
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

export default Education; 