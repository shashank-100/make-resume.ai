import React, { useState } from 'react';

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

interface CertificationsProps {
  onNext: () => void;
  onBack: () => void;
  data: Certification[];
  onUpdate: (data: Certification[]) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ onNext, onBack, data, onUpdate }) => {
  const [certifications, setCertifications] = useState<Certification[]>(data);
  const [currentCertification, setCurrentCertification] = useState<Certification>({
    id: '',
    name: '',
    issuer: '',
    date: '',
    expiryDate: '',
    noExpiry: false,
    credentialId: '',
    credentialUrl: ''
  });

  const handleAddCertification = () => {
    if (!currentCertification.name || !currentCertification.issuer || !currentCertification.date) {
      return;
    }

    const newCertification = {
      ...currentCertification,
      id: Date.now().toString()
    };

    const updatedCertifications = [...certifications, newCertification];
    setCertifications(updatedCertifications);
    onUpdate(updatedCertifications);

    setCurrentCertification({
      id: '',
      name: '',
      issuer: '',
      date: '',
      expiryDate: '',
      noExpiry: false,
      credentialId: '',
      credentialUrl: ''
    });
  };

  const handleRemoveCertification = (id: string) => {
    const updatedCertifications = certifications.filter(cert => cert.id !== id);
    setCertifications(updatedCertifications);
    onUpdate(updatedCertifications);
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
                      <li className="nav-item flex items-center cursor-pointer text-gray-500 dark:text-gray-400">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-gray-500 dark:border-gray-400">3</span>
                        <span className="ml-2">
                          <h3 className="leading-tight">Education</h3>
                        </span>
                      </li>
                      <li className="nav-item flex items-center cursor-pointer text-blue-600 dark:text-blue-300 font-bold text-lg">
                        <span className="flex items-center justify-center w-8 h-8 border rounded-full shrink-0 border-blue-600 dark:border-blue-300 font-bold">4</span>
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
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">Certifications</h1>
                        <p className="mb-4 font-light text-gray-500 md:text-lg dark:text-gray-400">
                          Add your professional certifications and licenses. These can help demonstrate your expertise and commitment to professional development.
                        </p>

                        <div className="mt-8 space-y-4">
                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                              Certification Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={currentCertification.name}
                              onChange={(e) => setCurrentCertification(prev => ({ ...prev, name: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., AWS Certified Solutions Architect"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="issuer">
                              Issuing Organization
                            </label>
                            <input
                              type="text"
                              id="issuer"
                              value={currentCertification.issuer}
                              onChange={(e) => setCurrentCertification(prev => ({ ...prev, issuer: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., Amazon Web Services"
                              required
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="date">
                                Issue Date
                              </label>
                              <input
                                type="month"
                                id="date"
                                value={currentCertification.date}
                                onChange={(e) => setCurrentCertification(prev => ({ ...prev, date: e.target.value }))}
                                className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="expiryDate">
                                Expiry Date
                              </label>
                              <input
                                type="month"
                                id="expiryDate"
                                value={currentCertification.expiryDate}
                                onChange={(e) => setCurrentCertification(prev => ({ ...prev, expiryDate: e.target.value }))}
                                className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                disabled={currentCertification.noExpiry}
                              />
                            </div>
                          </div>

                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="noExpiry"
                              checked={currentCertification.noExpiry}
                              onChange={(e) => setCurrentCertification(prev => ({ ...prev, noExpiry: e.target.checked }))}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              This certification does not expire
                            </label>
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="credentialId">
                              Credential ID (Optional)
                            </label>
                            <input
                              type="text"
                              id="credentialId"
                              value={currentCertification.credentialId}
                              onChange={(e) => setCurrentCertification(prev => ({ ...prev, credentialId: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., ABC123XYZ"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="credentialUrl">
                              Credential URL (Optional)
                            </label>
                            <input
                              type="url"
                              id="credentialUrl"
                              value={currentCertification.credentialUrl}
                              onChange={(e) => setCurrentCertification(prev => ({ ...prev, credentialUrl: e.target.value }))}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="e.g., https://verify.aws.com/..."
                            />
                          </div>

                          <button
                            type="button"
                            onClick={handleAddCertification}
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Add Certification
                          </button>
                        </div>

                        {certifications.length > 0 && (
                          <div className="mt-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Added Certifications</h2>
                            <div className="space-y-4">
                              {certifications.map((cert) => (
                                <div key={cert.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
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
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveCertification(cert.id)}
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
                            Next: Skills
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

export default Certifications; 