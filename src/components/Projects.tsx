
import { useState } from 'react';
import { Github, ExternalLink, Code, Cloud, ShoppingBag, CloudSun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  links?: {
    github?: string;
    live?: string;
  };
  icon: React.ReactNode;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'authen-lens',
      title: 'Authen Lens',
      description: 'Image authentication system using a custom CNN integrated with Error Level Analysis',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
      details: [
        'Developed an image authentication system using a custom CNN integrated with Error Level Analysis (ELA) to detect tampered and AI-generated images.',
        'Trained on the CASIA dataset and achieved 93% accuracy.',
      ],
      links: {
        github: 'https://github.com',
      },
      icon: <Code size={24} />
    },
    {
      id: 'versatile-cnn',
      title: 'Versatile CNN Model',
      description: 'Multi-domain image analysis using ResNet50 with GlobalMaxPooling2D',
      technologies: ['CNN', 'ResNet50', 'Image Processing', 'TensorFlow'],
      details: [
        'Engineered a ResNet50-based CNN with GlobalMaxPooling2D for robust image feature extraction.',
        'Applied in a fashion recommendation system (Style Matcher) achieving 85% similarity matching accuracy.',
        'Implemented in a medical image analyzer (MedBuddy) with 88% diagnostic accuracy.'
      ],
      icon: <Code size={24} />
    },
    {
      id: 'mern-ecommerce',
      title: 'MERN Stack E-commerce Site',
      description: 'Full-stack e-commerce platform with seamless user experience',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      details: [
        'Developed a full-stack e-commerce platform using MongoDB, Express.js, React.js, and Node.js.',
        'Enabled seamless user browsing and admin-side inventory management.'
      ],
      icon: <ShoppingBag size={24} />
    },
    {
      id: 'weathernow',
      title: 'WeatherNow',
      description: 'Real-time weather application with fast response time',
      technologies: ['API Integration', 'JavaScript', 'Weather Data'],
      details: [
        'Built a real-time weather application that fetches data from the WeatherAPI.',
        'Delivers weather reports with an average response time under 2 seconds.'
      ],
      links: {
        github: 'https://github.com',
      },
      icon: <CloudSun size={24} />
    }
  ];

  const [activeProject, setActiveProject] = useState(projects[0].id);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Selector */}
          <div className="space-y-4">
            {projects.map((project) => (
              <button
                key={project.id}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-start",
                  activeProject === project.id
                    ? "bg-apple-blue text-white shadow-lg"
                    : "bg-apple-gray dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
                onClick={() => setActiveProject(project.id)}
              >
                <div className={cn(
                  "rounded-full p-3 mr-4",
                  activeProject === project.id 
                    ? "bg-white/20" 
                    : "bg-white dark:bg-gray-700"
                )}>
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className={cn(
                    "text-sm mt-1",
                    activeProject === project.id 
                      ? "text-white/80" 
                      : "text-gray-500 dark:text-gray-400"
                  )}>
                    {project.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Project Details */}
          <div className="bg-apple-gray dark:bg-gray-800 rounded-3xl p-8 shadow-lg animate-slide-in-right">
            {projects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "transition-opacity duration-300 h-full",
                  activeProject === project.id ? "block opacity-100" : "hidden opacity-0"
                )}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-white dark:bg-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-2">Key Features</h4>
                  <ul className="space-y-3">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-apple-blue mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.links && (
                  <div className="flex gap-4 mt-auto pt-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors"
                      >
                        <Github size={18} className="mr-1" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-apple-blue dark:hover:text-apple-blue transition-colors"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
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

export default Projects;
