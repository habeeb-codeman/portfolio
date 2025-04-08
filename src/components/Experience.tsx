
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 'ltc',
      title: 'Software Intern',
      company: 'Larsen & Toubro Construction',
      location: 'Chennai, Tamil Nadu',
      period: 'June 2024 - July 2024',
      description: [
        'Developed Pronto Mitra - a machine learning dashboard that predicts incoming document volumes, optimizing resource allocation and boosting operational efficiency.',
        'Implemented a dynamic workload management system to reduce processing delays and streamline document workflows.',
        'Evaluated various ML techniques (Random Forest, Support Vector Machines) to select a model achieving 95% prediction accuracy.'
      ]
    },
    {
      id: 'intrain',
      title: 'Remote Intern',
      company: 'Intrain Tech',
      location: 'Remote',
      period: 'October 2023 - November 2023',
      description: [
        'Engineered a machine learning-based product recommendation system for mobile e-commerce, enhancing personalization and user engagement.',
        'Conducted extensive data preprocessing and feature engineering to improve recommendation accuracy.'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 bg-apple-gray dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-2 md:w-1/3 pb-4 md:pb-0">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  className={cn(
                    "px-6 py-4 text-left rounded-xl transition-all duration-300 whitespace-nowrap md:whitespace-normal",
                    activeTab === exp.id
                      ? "bg-white dark:bg-gray-800 shadow-md"
                      : "hover:bg-white/50 dark:hover:bg-gray-800/50"
                  )}
                  onClick={() => setActiveTab(exp.id)}
                >
                  <h3 className="font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.title}</p>
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div className="md:w-2/3 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg animate-fade-in">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className={cn(
                    "transition-opacity duration-300",
                    activeTab === exp.id ? "block opacity-100" : "hidden opacity-0"
                  )}
                >
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-apple-blue mb-4">{exp.company}</h4>
                  
                  <div className="flex items-center space-x-6 mb-6 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-apple-blue mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
