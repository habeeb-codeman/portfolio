
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Server, Code, Database, Monitor, MessageSquare, AwardIcon } from 'lucide-react';

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
        { name: 'MERN Full Stack', organization: 'Ethnus' },
        { name: 'CCA HTML Certification', organization: 'CCA' }
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
                        <h4 className="font-semibold text-lg mb-2">{cert.name}</h4>
                        <p className="text-gray-500 dark:text-gray-400">{cert.organization}</p>
                        <div className="mt-4">
                          <a 
                            href="#" 
                            className="text-apple-blue hover:underline text-sm"
                          >
                            View Certificate
                          </a>
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
