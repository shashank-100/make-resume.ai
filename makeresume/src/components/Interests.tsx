import React, { useState } from 'react';

interface Interest {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface InterestsProps {
  onNext: () => void;
  onBack: () => void;
  data: Interest[];
  onUpdate: (data: Interest[]) => void;
}

const Interests: React.FC<InterestsProps> = ({ onNext, onBack, data, onUpdate }) => {
  const [interests, setInterests] = useState<Interest[]>(data);
  const [currentInterest, setCurrentInterest] = useState<Interest>({
    id: '',
    name: '',
    description: '',
    category: 'Hobbies'
  });

  const categories = [
    'Hobbies',
    'Sports',
    'Arts & Culture',
    'Technology',
    'Travel',
    'Volunteering',
    'Other'
  ];

  const handleAddInterest = () => {
    if (currentInterest.name) {
      setInterests([...interests, { ...currentInterest, id: Date.now().toString() }]);
      setCurrentInterest({
        id: '',
        name: '',
        description: '',
        category: 'Hobbies'
      });
    }
  };

  const handleRemoveInterest = (id: string) => {
    setInterests(interests.filter(interest => interest.id !== id));
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
                      <li className="nav-item flex items-center cursor-pointer text-green-600 dark:text-green-500">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-green-600 dark:border-green-500">5</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Skills</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-blue-600 dark:text-blue-300 font-bold text-lg">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-blue-600 dark:border-blue-300 font-bold">6</span>
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
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">Interests</h1>
                        <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">
                          Add your personal interests and hobbies. This helps employers get to know you better and can showcase your personality.
                        </p>

                        {/* List of added interests */}
                        {interests.length > 0 && (
                          <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3">Added Interests</h2>
                            <div className="space-y-3">
                              {categories.map(category => {
                                const categoryInterests = interests.filter(interest => interest.category === category);
                                if (categoryInterests.length === 0) return null;
                                
                                return (
                                  <div key={category} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="font-semibold mb-2">{category}</h3>
                                    <div className="space-y-3">
                                      {categoryInterests.map(interest => (
                                        <div key={interest.id} className="flex justify-between items-start">
                                          <div>
                                            <h4 className="font-medium">{interest.name}</h4>
                                            {interest.description && (
                                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                                {interest.description}
                                              </p>
                                            )}
                                          </div>
                                          <button
                                            onClick={() => handleRemoveInterest(interest.id)}
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

                        {/* Add new interest form */}
                        <form className="mt-8 space-y-4">
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                              Interest Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={currentInterest.name}
                              onChange={(e) => setCurrentInterest({ ...currentInterest, name: e.target.value })}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., Photography, Hiking"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="category">
                              Category
                            </label>
                            <select
                              id="category"
                              value={currentInterest.category}
                              onChange={(e) => setCurrentInterest({ ...currentInterest, category: e.target.value })}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            >
                              {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                              Description (Optional)
                            </label>
                            <textarea
                              id="description"
                              value={currentInterest.description}
                              onChange={(e) => setCurrentInterest({ ...currentInterest, description: e.target.value })}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Briefly describe your interest or any notable achievements..."
                              rows={3}
                            />
                          </div>

                          <button
                            type="button"
                            onClick={handleAddInterest}
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Add Interest
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
                            Next: Finalize
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

export default Interests; 