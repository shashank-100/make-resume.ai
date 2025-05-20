import React, { useState } from 'react';

interface Skill {
  id: string;
  name: string;
  proficiency: number;
  category: string;
}

interface SkillsProps {
  onNext: () => void;
  onBack: () => void;
  data: Skill[];
  onUpdate: (data: Skill[]) => void;
}

const Skills: React.FC<SkillsProps> = ({ onNext, onBack, data, onUpdate }) => {
  const [skills, setSkills] = useState<Skill[]>(data);
  const [currentSkill, setCurrentSkill] = useState<Skill>({
    id: '',
    name: '',
    proficiency: 3,
    category: 'Technical'
  });

  const categories = [
    'Technical',
    'Soft Skills',
    'Languages',
    'Tools',
    'Frameworks',
    'Other'
  ];

  const proficiencyLevels = [
    { value: 1, label: 'Beginner' },
    { value: 2, label: 'Elementary' },
    { value: 3, label: 'Intermediate' },
    { value: 4, label: 'Advanced' },
    { value: 5, label: 'Expert' }
  ];

  const handleAddSkill = () => {
    if (currentSkill.name) {
      setSkills([...skills, { ...currentSkill, id: Date.now().toString() }]);
      setCurrentSkill({
        id: '',
        name: '',
        proficiency: 3,
        category: 'Technical'
      });
    }
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const getProficiencyColor = (level: number) => {
    const colors = [
      'bg-red-500',
      'bg-orange-500',
      'bg-yellow-500',
      'bg-green-500',
      'bg-blue-500'
    ];
    return colors[level - 1] || colors[2];
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
                      <li className="nav-item flex items-center cursor-pointer text-blue-600 dark:text-blue-300 font-bold text-lg">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-blue-600 dark:border-blue-300 font-bold">5</span>
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
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">Skills</h1>
                        <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">
                          Add your skills and rate your proficiency level. This helps employers understand your expertise in different areas.
                        </p>

                        {/* List of added skills */}
                        {skills.length > 0 && (
                          <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">Added Skills</h2>
                            <div className="space-y-3">
                              {categories.map(category => {
                                const categorySkills = skills.filter(skill => skill.category === category);
                                if (categorySkills.length === 0) return null;
                                
                                return (
                                  <div key={category} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold mb-2">{category}</h3>
                                    <div className="space-y-2">
                                      {categorySkills.map(skill => (
                                        <div key={skill.id} className="flex justify-between items-center">
                                          <div className="flex-1">
                                            <div className="flex items-center">
                                              <span className="mr-2">{skill.name}</span>
                                              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                                <div
                                                  className={`h-2 rounded-full ${getProficiencyColor(skill.proficiency)}`}
                                                  style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                                                ></div>
                                              </div>
                                              <span className="ml-2 text-sm text-gray-500">
                                                {proficiencyLevels.find(level => level.value === skill.proficiency)?.label}
                                              </span>
                                            </div>
                                          </div>
                                          <button
                                            onClick={() => handleRemoveSkill(skill.id)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                          >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Add new skill form */}
                        <form className="mt-8 space-y-4">
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                              Skill Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={currentSkill.name}
                              onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., JavaScript, Project Management"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="category">
                              Category
                            </label>
                            <select
                              id="category"
                              value={currentSkill.category}
                              onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            >
                              {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                              Proficiency Level
                            </label>
                            <div className="space-y-2">
                              {proficiencyLevels.map(level => (
                                <div key={level.value} className="flex items-center">
                                  <input
                                    type="radio"
                                    id={`proficiency-${level.value}`}
                                    name="proficiency"
                                    value={level.value}
                                    checked={currentSkill.proficiency === level.value}
                                    onChange={(e) => setCurrentSkill({ ...currentSkill, proficiency: parseInt(e.target.value) })}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label htmlFor={`proficiency-${level.value}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {level.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={handleAddSkill}
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Add Skill
                          </button>
                        </form>

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
                            onClick={onNext}
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Next: Interests
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

export default Skills; 