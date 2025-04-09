
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap } from 'lucide-react';
import { Youtube, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Card */}
          <div className="apple-card hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap size={28} className="text-apple-blue mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">B.Tech in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-300">Vellore Institute of Technology, Amaravati</p>
                <p className="text-sm text-gray-500">Expected 2025 • CGPA: 8.45</p>
                <p className="text-sm italic">Specialization: AI & Machine Learning</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <h5 className="font-medium">Higher Secondary</h5>
                  <p className="text-gray-500">Narayana Junior College</p>
                  <p>2021 • 83.3%</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <h5 className="font-medium">Secondary</h5>
                  <p className="text-gray-500">Nalanda Vidya Niketan</p>
                  <p>2019 • 88%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* YouTube Showcase */}
          <div className="apple-card hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-600 text-white p-4 rounded-t-2xl -mt-8 -mx-8 mb-6 flex items-center">
              <Youtube size={24} className="mr-2" />
              <h3 className="text-xl font-bold">Tech Content Creator</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">
                I manage a tech-focused YouTube channel with 1.6k+ subscribers where I share tutorials, reviews, and insights on the latest technology.
              </p>
              
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div>
                  <span className="block font-bold text-xl">1M+</span>
                  <span className="text-sm text-gray-500">Total Views</span>
                </div>
                <div>
                  <span className="block font-bold text-xl">1.6k+</span>
                  <span className="text-sm text-gray-500">Subscribers</span>
                </div>
                <div>
                  <a 
                    href="https://www.youtube.com/@techbrewtv" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    <Youtube size={16} className="mr-1" />
                    Visit Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connect Section - Full Width */}
          <div className="apple-card col-span-1 md:col-span-2 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a 
                href="https://www.linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#0077B5] hover:bg-[#006699] text-white font-medium py-2 px-3 rounded-lg transition-colors duration-300"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#333] hover:bg-[#222] text-white font-medium py-2 px-3 rounded-lg transition-colors duration-300"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-medium py-2 px-3 rounded-lg transition-colors duration-300"
              >
                <Twitter size={18} className="mr-2" />
                Twitter
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-300"
              >
                <Instagram size={18} className="mr-2" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
