
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="apple-card group hover:scale-105 animate-fade-in">
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
          
          <div className="apple-card group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Award size={36} className="text-apple-blue mb-4" />
            <h3 className="text-2xl font-bold mb-4">Initiatives</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">Technical Team Lead</h4>
                <p className="text-gray-600 dark:text-gray-300">Android Club, VIT-AP University</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Led a team of 10 members to organize technical events and drive innovation within the club.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Hobbies</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Driving, Travelling, Video Gaming
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="apple-card group hover:scale-105 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center p-4 bg-red-600 text-white rounded-t-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube mr-2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube mr-2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                Visit My Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
