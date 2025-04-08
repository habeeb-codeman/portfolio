
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
            <Briefcase size={36} className="text-apple-blue mb-4" />
            <h3 className="text-2xl font-bold mb-4">Passion</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passionate and dynamic technology enthusiast with a strong foundation in Python, AI, and full-stack development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passionate about applying machine learning and data analysis to solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Committed to continuous learning, innovation, and contributing to forward-thinking teams.
            </p>
          </div>
          
          <div className="apple-card group hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
                <h4 className="font-semibold">Content Creator</h4>
                <p className="text-gray-600 dark:text-gray-300">Tech-focused YouTube Channel</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage a tech-focused YouTube channel with 1.6k+ subscribers and 1M+ views.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Hobbies</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Driving, Travelling, Video Gaming, Content Creation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
