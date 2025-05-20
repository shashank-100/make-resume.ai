import React from 'react';
import { Education } from './Education';

interface PersonalDetails {
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
  personalDetails: PersonalDetails;
  workHistory: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  skills: Skill[];
  interests: Interest[];
}

interface FinalizeProps {
  resumeData: ResumeData;
  onBack: () => void;
  onGenerate: () => void;
}

const Finalize: React.FC<FinalizeProps> = ({ resumeData, onBack, onGenerate }) => {
  const {
    personalDetails,
    workHistory,
    education,
    certifications,
    skills,
    interests
  } = resumeData;

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
                      <li className="nav-item flex items-center cursor-pointer text-green-600 dark:text-green-500">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-green-600 dark:border-green-500">1</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Personal Details</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-green-600 dark:text-green-500">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-green-600 dark:border-green-500">2</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Work History</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-green-600 dark:text-green-500">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-green-600 dark:border-green-500">3</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Education</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-green-600 dark:text-green-500">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-green-600 dark:border-green-500">4</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Certifications</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-green-600 dark:text-green-500">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-green-600 dark:border-green-500">5</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Skills</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-green-600 dark:text-green-500">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-green-600 dark:border-green-500">6</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Interests</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-blue-600 dark:text-blue-300 font-bold text-lg">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-blue-600 dark:border-blue-300 font-bold">7</span>
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
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">Review Your Resume</h1>
                        <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">
                          Review all the information you've entered. Make sure everything is accurate before generating your resume.
                        </p>

                        {/* Personal Details Summary */}
                        <div className="mb-6">
                          <h2 className="text-lg font-semibold mb-3">Personal Details</h2>
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <h3 className="font-bold text-xl mb-2">{personalDetails.fullName}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{personalDetails.email}</p>
                            <p className="text-gray-600 dark:text-gray-300">{personalDetails.phone}</p>
                            <p className="text-gray-600 dark:text-gray-300">{personalDetails.address}</p>
                            {personalDetails.portfolio && (
                              <p className="text-gray-600 dark:text-gray-300">
                                Portfolio: <a href={personalDetails.portfolio} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{personalDetails.portfolio}</a>
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Work History Summary */}
                        {workHistory.length > 0 && (
                          <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">Work History</h2>
                            <div className="space-y-3">
                              {workHistory.map(work => (
                                <div key={work.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                  <h3 className="font-bold">{work.position}</h3>
                                  <p className="text-gray-600 dark:text-gray-300">{work.company}</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {work.startDate} - {work.current ? 'Present' : work.endDate}
                                  </p>
                                  <p className="mt-2 text-gray-600 dark:text-gray-300">{work.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Education Summary */}
                        {education.length > 0 && (
                          <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">Education</h2>
                            <div className="space-y-3">
                              {education.map(edu => (
                                <div key={edu.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                  <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                                  </p>
                                  {edu.gpa && (
                                    <p className="text-gray-600 dark:text-gray-300">GPA: {edu.gpa}</p>
                                  )}
                                  {edu.achievements.length > 0 && (
                                    <div className="mt-2">
                                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">Achievements:</h4>
                                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                                        {edu.achievements.map((achievement, index) => (
                                          <li key={index}>{achievement}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Certifications Summary */}
                        {certifications.length > 0 && (
                          <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">Certifications</h2>
                            <div className="space-y-3">
                              {certifications.map(cert => (
                                <div key={cert.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                  <h3 className="font-bold">{cert.name}</h3>
                                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Issued: {cert.date}
                                    {!cert.noExpiry && cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                                    {cert.noExpiry && ' • No Expiry'}
                                  </p>
                                  {cert.credentialId && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                      Credential ID: {cert.credentialId}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Skills Summary */}
                        {skills.length > 0 && (
                          <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">Skills</h2>
                            <div className="space-y-3">
                              {['Technical', 'Soft Skills', 'Languages', 'Tools', 'Frameworks', 'Other'].map(category => {
                                const categorySkills = skills.filter(skill => skill.category === category);
                                if (categorySkills.length === 0) return null;
                                
                                return (
                                  <div key={category} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold mb-2">{category}</h3>
                                    <div className="space-y-2">
                                      {categorySkills.map(skill => (
                                        <div key={skill.id} className="flex items-center">
                                          <span className="mr-2">{skill.name}</span>
                                          <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                            <div
                                              className={`h-2 rounded-full ${
                                                skill.proficiency === 1 ? 'bg-red-500' :
                                                skill.proficiency === 2 ? 'bg-orange-500' :
                                                skill.proficiency === 3 ? 'bg-yellow-500' :
                                                skill.proficiency === 4 ? 'bg-green-500' :
                                                'bg-blue-500'
                                              }`}
                                              style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Interests Summary */}
                        {interests.length > 0 && (
                          <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">Interests</h2>
                            <div className="space-y-3">
                              {['Hobbies', 'Sports', 'Arts & Culture', 'Technology', 'Travel', 'Volunteering', 'Other'].map(category => {
                                const categoryInterests = interests.filter(interest => interest.category === category);
                                if (categoryInterests.length === 0) return null;
                                
                                return (
                                  <div key={category} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold mb-2">{category}</h3>
                                    <div className="space-y-2">
                                      {categoryInterests.map(interest => (
                                        <div key={interest.id}>
                                          <h4 className="font-medium">{interest.name}</h4>
                                          {interest.description && (
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                              {interest.description}
                                            </p>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <div className="flex space-x-3 mt-auto justify-between">
                          <button
                            type="button"
                            onClick={onBack}
                            className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={onGenerate}
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Generate Resume
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

export default Finalize; 