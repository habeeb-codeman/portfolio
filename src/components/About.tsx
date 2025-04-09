
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Youtube, Linkedin, Github, Twitter, Instagram, Flame } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        {/* Profile and Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 flex flex-col items-center justify-center">
            <Avatar className="w-48 h-48 mb-6 border-4 border-apple-blue shadow-lg">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="lg:col-span-2 flex items-center">
            <Card className="w-full border-none shadow-md bg-gray-50 dark:bg-gray-800">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Hello there!</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Always tinkering with tech and playing with ML to solve real-world stuff. Big on learning new things, 
                  building cool projects, and vibing with teams that love innovation. Fun fact: I break things just to 
                  figure out how they work (and then fix them… usually).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Education and Passions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          <Card className="border-none shadow-md h-full bg-white dark:bg-gray-900 overflow-hidden">
            <CardHeader className="bg-gray-50 dark:bg-gray-800 pb-2 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <GraduationCap size={24} className="text-apple-blue mr-3" strokeWidth={1.5} />
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
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <h5 className="font-medium">Higher Secondary</h5>
                    <p className="text-gray-500">Narayana Junior College</p>
                    <p>2021 • 83.3%</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <h5 className="font-medium">Secondary</h5>
                    <p className="text-gray-500">Nalanda Vidya Niketan</p>
                    <p>2019 • 88%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Passionate About Card */}
          <Card className="border-none shadow-md h-full bg-white dark:bg-gray-900 overflow-hidden">
            <CardHeader className="bg-gray-50 dark:bg-gray-800 pb-2 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <Flame size={24} className="text-apple-blue mr-3" strokeWidth={1.5} />
                <h3 className="text-xl font-bold">Passionate About</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                  <h5 className="font-medium text-lg">Artificial Intelligence</h5>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Machine learning algorithms, neural networks, and practical AI applications
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                  <h5 className="font-medium text-lg">Full-Stack Development</h5>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Building responsive web applications with modern frameworks and tools
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
                  <h5 className="font-medium text-lg">Innovation & Problem Solving</h5>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Finding creative solutions to complex technical challenges
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Social and YouTube Card */}
        <Card className="border-none shadow-md max-w-4xl mx-auto bg-white dark:bg-gray-900 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* YouTube Section */}
              <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Youtube size={24} className="text-red-600 mr-3" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold">Tech Content Creator</h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I manage a tech-focused YouTube channel with 1.6k+ subscribers where I share tutorials, 
                  reviews, and insights on the latest technology.
                </p>
                
                <div className="flex justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 shadow-sm">
                  <div>
                    <span className="block font-bold text-xl">1M+</span>
                    <span className="text-sm text-gray-500">Views</span>
                  </div>
                  <div>
                    <span className="block font-bold text-xl">1.6k+</span>
                    <span className="text-sm text-gray-500">Subscribers</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/@techbrewtv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Youtube size={18} className="mr-2" />
                    Visit My Channel
                  </a>
                </Button>
              </div>
              
              {/* Connect With Me Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a 
                      href="https://www.linkedin.com/in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Linkedin size={20} className="mr-3" strokeWidth={1.5} />
                      LinkedIn
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github size={20} className="mr-3" strokeWidth={1.5} />
                      GitHub
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Twitter size={20} className="mr-3" strokeWidth={1.5} />
                      X (Twitter)
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a 
                      href="https://www.instagram.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Instagram size={20} className="mr-3" strokeWidth={1.5} />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
