
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-apple-gray dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10"></div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center space-y-8 text-center">
        <Avatar className="w-32 h-32 border-2 border-apple-blue shadow-lg">
          <AvatarImage 
            src="/lovable-uploads/d59d70ad-78c1-448e-b9e5-b3f08c3afd3b.png" 
            alt="Habeeb Ur Rahman" 
            className="object-cover"
          />
          <AvatarFallback className="bg-apple-blue text-white text-2xl">HR</AvatarFallback>
        </Avatar>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="apple-text-gradient animate-text-shimmer">Habeeb Ur Rahman</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in">
          Passionate and dynamic technology enthusiast with expertise in Python, AI, ML, and full-stack development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up">
          <a href="#projects" className="apple-button">
            View Projects
          </a>
          <a href="#contact" className="border border-apple-blue text-apple-blue hover:bg-apple-blue/10 rounded-full font-medium py-3 px-6 transition-colors duration-300">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
