
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Youtube, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-gray-50 dark:bg-gray-800 pb-2">
              <div className="flex items-center">
                <GraduationCap size={24} className="text-apple-blue mr-3" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
          
          {/* YouTube Showcase */}
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-gray-50 dark:bg-gray-800 pb-2">
              <div className="flex items-center">
                <Youtube size={24} className="text-red-600 mr-3" />
                <h3 className="text-xl font-bold">Tech Content Creator</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
          
          {/* Connect Section - Full Width */}
          <Card className="border-none shadow-md col-span-1 md:col-span-2">
            <CardHeader className="bg-gray-50 dark:bg-gray-800 pb-2">
              <h3 className="text-xl font-bold">Connect With Me</h3>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <a 
                  href="https://www.linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Linkedin size={24} className="mb-1 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Github size={24} className="mb-1 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Twitter size={24} className="mb-1 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                  <span className="text-sm">Twitter</span>
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Instagram size={24} className="mb-1 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                  <span className="text-sm">Instagram</span>
                </a>
                <a 
                  href="https://www.youtube.com/@techbrewtv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  <Youtube size={24} className="mb-1 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                  <span className="text-sm">YouTube</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
