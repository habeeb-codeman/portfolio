
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, MessageSquare, AwardIcon, Briefcase, GraduationCap } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      id: 'technical',
      name: 'Technical Skills',
      icon: <Code size={24} />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TensorFlow', level: 85 },
        { name: 'MERN Stack', level: 75 },
        { name: 'AI & ML', level: 85 }
      ]
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: <MessageSquare size={24} />,
      skills: [
        { name: 'Leadership', level: 85 },
        { name: 'Communication', level: 90 },
        { name: 'Presentation', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Adaptability', level: 85 },
        { name: 'Content Creation', level: 80 }
      ]
    },
    {
      id: 'languages',
      name: 'Languages',
      icon: <MessageSquare size={24} />,
      skills: [
        { name: 'English', level: 95 },
        { name: 'Telugu', level: 100 },
        { name: 'Hindi', level: 80 }
      ]
    },
    {
      id: 'certifications',
      name: 'Certifications',
      icon: <AwardIcon size={24} />,
      certificates: [
        { 
          name: 'AWS Certified Cloud Practitioner', 
          organization: 'Amazon Web Services (AWS)',
          date: 'Aug 2024 - Aug 2027',
          credentialId: 'af21f0f84fe84ee8add0f7750545010f',
          logo: '/assets/aws-logo.png'
        },
        { 
          name: 'MERN Full Stack Internship', 
          organization: 'ETHNUS',
          date: 'Dec 2023',
          credentialId: 'BHTL3WKJ',
          logo: '/assets/ethnus-logo.png'
        },
        { 
          name: 'AI & ML Internship Certificate', 
          organization: 'InTrain Tech',
          date: 'Nov 2023',
          skills: ['Python', 'Artificial Intelligence (AI)', 'Machine Learning'],
          logo: '/assets/intrain-logo.png'
        },
        { 
          name: 'CCA HTML Level-1', 
          organization: 'Cambridge Certification Authority',
          date: 'Jun 2022',
          skills: ['Cascading Style Sheets (CSS)', 'HTML5'],
          logo: '/assets/cca-logo.png'
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section id="skills" className="py-24 bg-apple-gray dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Category Selector */}
          <div className="md:w-1/4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={cn(
                    "px-4 py-4 rounded-xl flex items-center justify-center md:justify-start min-w-max transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-white dark:bg-gray-800 shadow-md text-apple-blue"
                      : "hover:bg-white/50 dark:hover:bg-gray-800/50"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="mr-2">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Skills Display */}
          <div className="md:w-3/4 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg animate-fade-in">
            {categories.map((category) => (
              <div
                key={category.id}
                className={cn(
                  "transition-opacity duration-300",
                  activeCategory === category.id ? "block opacity-100" : "hidden opacity-0"
                )}
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="text-apple-blue mr-3">{category.icon}</span>
                  {category.name}
                </h3>
                
                {category.id === 'certifications' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.certificates?.map((cert, idx) => (
                      <div 
                        key={idx} 
                        className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                            {cert.logo ? (
                              <img src={cert.logo} alt={cert.organization} className="w-10 h-10 object-contain" />
                            ) : (
                              <AwardIcon size={24} className="text-apple-blue" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{cert.name}</h4>
                            <p className="text-gray-500 dark:text-gray-400">{cert.organization}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{cert.date}</p>
                            
                            {cert.credentialId && (
                              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                                Credential ID: {cert.credentialId}
                              </p>
                            )}
                            
                            {cert.skills && cert.skills.length > 0 && (
                              <div className="mt-3">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Skills:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {cert.skills.map((skill, i) => (
                                    <span 
                                      key={i} 
                                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            <div className="mt-4">
                              <a 
                                href="#" 
                                className="text-apple-blue hover:underline text-sm inline-flex items-center"
                              >
                                <span>View Certificate</span>
                                <svg className="w-3.5 h-3.5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {category.skills?.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-apple-blue rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
