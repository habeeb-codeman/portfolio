
import { Phone, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-apple-blue mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a 
                href="tel:+917702567753" 
                className="flex items-center p-4 bg-apple-gray dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-apple-blue rounded-full text-white mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="font-medium">+91 770-256-7753</p>
                </div>
              </a>
              
              <a 
                href="mailto:rahman.habeeb@outlook.com" 
                className="flex items-center p-4 bg-apple-gray dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-apple-blue rounded-full text-white mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium">rahman.habeeb@outlook.com</p>
                </div>
              </a>
              
              <div className="flex items-center p-4 bg-apple-gray dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-apple-blue rounded-full text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">Vijayawada, Andhra Pradesh</p>
                </div>
              </div>
              
              <div className="flex justify-start space-x-6 pt-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-apple-gray dark:bg-gray-800 rounded-full hover:bg-apple-blue hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-apple-gray dark:bg-gray-800 rounded-full hover:bg-apple-blue hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-apple-gray dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-apple-blue"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-apple-blue"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-apple-blue"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="apple-button w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
