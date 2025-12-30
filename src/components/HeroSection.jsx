import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import resumePDF from '@/assets/Resume1.pdf';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const arrowRef = useRef(null);
  
  const titles = [
    'Aspiring Software Engineer',
    'Web Designer & Developer',
    'Full Stack Developer',
    'CS Engineering Student'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    // Initial hero animations
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(buttonsRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.2"
    )
    .fromTo(socialRef.current.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.3"
    )
    .fromTo(arrowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );

  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let i = 0;
    
    const typeText = () => {
      if (i < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, i + 1));
        i++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setIsTyping(true);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }, 2000);
        }, 2000);
      }
    };

    if (isTyping) {
      typeText();
    }
  }, [currentTitleIndex, isTyping]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Chandru_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={heroRef} id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-br from-pink-500/15 to-blue-500/15 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-blue-500/18 to-primary/18 rounded-full animate-float blur-sm" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-purple-500/16 to-pink-500/16 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-primary/8 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div>
          <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 opacity-0">
            <span className="block text-foreground mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Chandru K
            </span>
          </h1>
          
          <div ref={subtitleRef} className="h-16 flex items-center justify-center mb-8 opacity-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground text-center">
              <span className="inline-block">
                {displayText}
                <span className={`inline-block w-0.5 h-6 bg-primary ml-1 ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
              </span>
            </h2>
          </div>
          
          <p ref={descriptionRef} className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed opacity-0">
            I build responsive, scalable, and user-friendly applications. 
            Currently pursuing Computer Science Engineering at Kongu Engineering College.
          </p>
          
          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground rounded-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={handleResumeDownload}
              className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-medium hover:shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          {/* Social Links */}
          <div ref={socialRef} className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/chandru-k"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/chandru-k-67b2a8329/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:chandruk.23cse@kongu.edu"
              className="p-3 bg-secondary rounded-full hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <button
            ref={arrowRef}
            onClick={() => scrollToSection('about')}
            className="animate-bounce opacity-0 hover:scale-110 transition-transform duration-200"
          >
            <ArrowDown size={32} className="text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

