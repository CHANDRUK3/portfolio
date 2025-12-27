import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const projectCards = projectsRef.current;

    // Animate project cards
    gsap.fromTo(projectCards,
      {
        y: 50,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, [filter]); // Re-animate when filter changes

  const projects = [
    {
      id: 1,
      title: 'Smart Dashboard for Students & Faculty',
      description: 'A comprehensive dashboard for educational institutions with clean UI and responsive design.',
      image: '/placeholder.svg',
      tech: ['React.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      category: 'web',
      github: 'https://github.com/CHANDRUK3/Campus-Job-Board-Management',
      demo: '#'
    },
    {
      id: 2,
      title: 'Book Store & Library Management',
      description: 'Online system for managing books and user transactions with real-time inventory tracking.',
      image: '/placeholder.svg',
      tech: ['React.js', 'MongoDB', 'Node.js', 'Express.js'],
      category: 'web',
      achievements: 'Streamlined library operations by 60%',
      github: 'https://github.com/CHANDRUK3/BookBazar',
      demo: 'https://book-store-app-two-pearl.vercel.app'
    },
    {
      id: 3,
      title: 'Smart Institute Management System',
      description: 'Comprehensive system that simplifies institute administration and student tracking.',
      image: '/placeholder.svg',
      tech: ['React.js', 'MongoDB', 'Express.js', 'Chart.js'],
      category: 'web',
      achievements: 'Reduced administrative workload by 40%',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Medical Chatbot',
      description: 'AI-powered chatbot for basic medical assistance using machine learning models.',
      image: '/placeholder.svg',
      tech: ['React.js', 'Flask', 'Python', 'TensorFlow'],
      category: 'ai',
      achievements: '95% accuracy in symptom detection',
      github: 'https://github.com/CHANDRUK3/Medico',
      demo: '#'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Modern task management application with real-time collaboration features.',
      image: '/placeholder.svg',
      tech: ['React.js', 'Express.js', 'Socket.io', 'MongoDB'],
      category: 'web',
      achievements: 'Enhanced team productivity by 50%',
      github: 'https://github.com/CHANDRUK3/Task-Manager-Management',
      demo: '#'
    },
    {
      id: 6,
      title: 'Expense Tracker Platform',
      description: 'Full-featured expense Tracker platform with payment integration and admin dashboard.',
      image: '/placeholder.svg',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      github: 'https://github.com/CHANDRUK3/Expense_tracker',
      demo: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-secondary/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work and the technologies I've mastered
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg'
                  : 'bg-background border border-border hover:bg-secondary text-foreground hover:border-primary/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectsRef.current[index] = el}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:border-primary/30"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/30 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="p-3 bg-primary/90 text-primary-foreground rounded-full hover:bg-primary hover:scale-110 transition-all duration-200 shadow-lg"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-green-500/90 text-white rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-200 shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {project.achievements}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/CHANDRUK3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

