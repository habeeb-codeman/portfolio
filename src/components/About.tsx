
import { GraduationCap } from 'lucide-react';
import { Youtube, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="apple-card group hover:scale-105 animate-fade-in mb-16">
            <GraduationCap size={36} className="text-apple-blue mb-4" />
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Bachelor of Technology</h4>
                <p className="text-gray-600 dark:text-gray-300">Computer Science and Engineering</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Vellore Institute of Technology, Amaravati</p>
                <p className="text-sm">Expected 2025 • CGPA: 8.45</p>
                <p className="text-sm italic">Specialization: AI & Machine Learning</p>
              </div>
              <div>
                <h4 className="font-semibold">Higher Secondary (12th), BIEAP</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Narayana Junior College</p>
                <p className="text-sm">2021 • Score: 83.3%</p>
              </div>
              <div>
                <h4 className="font-semibold">Secondary (10th), CBSE</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Nalanda Vidya Niketan</p>
                <p className="text-sm">2019 • Score: 88%</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="apple-card group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center p-4 bg-red-600 text-white rounded-t-2xl">
                <Youtube size={28} className="mr-2" />
                <h3 className="text-2xl font-bold">YouTube Channel</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I manage a tech-focused YouTube channel with 1.6k+ subscribers and 1M+ views, where I share technology tutorials, reviews, and insights.
                </p>
                <a 
                  href="https://www.youtube.com/@techbrewtv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                >
                  <Youtube size={20} className="mr-2" />
                  Visit My Channel
                </a>
              </div>
            </div>
            
            <div className="apple-card group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0077B5] hover:bg-[#006699] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#333] hover:bg-[#222] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <Twitter size={20} className="mr-2" />
                  Twitter
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <Instagram size={20} className="mr-2" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
