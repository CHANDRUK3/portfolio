import { motion } from 'framer-motion';
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react';
import profileImage from '@/assets/profile.jpg'; // Change to your actual filename

const AboutSection = () => {
  // Animation variants for the image
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  // Animation variants for floating elements
  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const floatingItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  // Animation variants for cards
  const cardsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // SVG Path Animation Variants for premium geometric transition
  const svgPathVariants = {
    initial: {
      d: "M 144 0 A 144 144 0 1 1 143.99 0.1 Z", // Perfect circle path
      opacity: 0.8,
      pathLength: 1,
      strokeDasharray: "0 1",
      filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))"
    },
    animate: {
      d: [
        "M 144 0 A 144 144 0 1 1 143.99 0.1 Z", // Circle
        "M 200 44 A 44 44 0 0 1 244 88 L 244 200 A 44 44 0 0 1 200 244 L 88 244 A 44 44 0 0 1 44 200 L 44 88 A 44 44 0 0 1 88 44 Z" // Rounded square
      ],
      opacity: [0.8, 0.6, 0.3, 0],
      pathLength: [1, 1.2, 1.5, 2],
      strokeDasharray: ["0 1", "0.2 0.8", "0.4 0.6", "1 0"],
      filter: [
        "drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))",
        "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))",
        "drop-shadow(0 0 10px rgba(168, 85, 247, 0.2))",
        "drop-shadow(0 0 0px rgba(168, 85, 247, 0))"
      ],
      transition: {
        duration: 2.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.4, 0.8, 1]
      }
    }
  };

  // Enhanced profile image variants
  const profileImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px) brightness(0.7)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px) brightness(1)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  // Container brightness animation
  const containerVariants = {
    initial: { 
      borderColor: "rgba(255, 255, 255, 0.08)"
    },
    animate: { 
      borderColor: "rgba(255, 255, 255, 0.15)",
      transition: {
        duration: 0.8,
        delay: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <motion.div 
              className="relative overflow-hidden rounded-3xl p-8 min-h-[450px] flex items-center justify-center border-2 border-purple-500/30 bg-gradient-to-br from-purple-600/20 via-pink-500/15 to-blue-600/20 backdrop-blur-sm shadow-xl"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.2), 0 0 40px rgba(236, 72, 153, 0.1)",
                background: "linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.25))",
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated colorful background elements */}
              <motion.div 
                className="absolute inset-0 overflow-hidden rounded-3xl"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1), rgba(59,130,246,0.15))",
                    "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(168,85,247,0.1), rgba(236,72,153,0.15))",
                    "linear-gradient(225deg, rgba(236,72,153,0.15), rgba(59,130,246,0.1), rgba(168,85,247,0.15))",
                    "linear-gradient(315deg, rgba(168,85,247,0.15), rgba(236,72,153,0.1), rgba(59,130,246,0.15))"
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-pink-500/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-0 left-0 w-14 h-14 bg-blue-500/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-0 right-0 w-18 h-18 bg-purple-400/10 rounded-full blur-xl"></div>
              </motion.div>
              {/* SVG Path Geometric Transition */}
              <motion.div className="absolute z-20 inset-0 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 288 288"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={svgPathVariants}
                    stroke="rgba(168, 85, 247, 0.8)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Additional accent path for premium effect */}
                  <motion.path
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                      initial: {
                        d: "M 144 0 A 144 144 0 1 1 143.99 0.1 Z",
                        opacity: 0.4,
                        strokeDasharray: "0 1"
                      },
                      animate: {
                        d: "M 200 44 A 44 44 0 0 1 244 88 L 244 200 A 44 44 0 0 1 200 244 L 88 244 A 44 44 0 0 1 44 200 L 44 88 A 44 44 0 0 1 88 44 Z",
                        opacity: [0.4, 0.2, 0],
                        strokeDasharray: ["5 15", "10 10", "20 5"],
                        transition: {
                          duration: 2.5,
                          delay: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }
                    }}
                    stroke="rgba(236, 72, 153, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              {/* Enhanced Profile Image with premium animations */}
              <motion.div 
                className="relative z-10 w-72 h-72 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-[4px] shadow-2xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={profileImageVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                  boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
                  filter: "brightness(1.1) saturate(1.2)",
                  background: "linear-gradient(135deg, rgb(147, 51, 234), rgb(236, 72, 153), rgb(59, 130, 246))"
                }}
                animate={{
                  boxShadow: [
                    "0 20px 40px -12px rgba(168, 85, 247, 0.3)",
                    "0 25px 45px -12px rgba(236, 72, 153, 0.3)",
                    "0 20px 40px -12px rgba(59, 130, 246, 0.3)",
                    "0 20px 40px -12px rgba(168, 85, 247, 0.3)"
                  ]
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20,
                  boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Inner image container with enhanced effects */}
                <motion.div 
                  className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-white via-purple-50/80 to-pink-50/80 p-1 relative"
                  whileHover={{ 
                    scale: 1.02,
                    background: "linear-gradient(135deg, rgb(255, 255, 255), rgba(243, 232, 255, 0.9), rgba(253, 242, 248, 0.9))"
                  }}
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgb(255, 255, 255), rgba(243, 232, 255, 0.8), rgba(253, 242, 248, 0.8))",
                      "linear-gradient(135deg, rgb(255, 255, 255), rgba(253, 242, 248, 0.8), rgba(239, 246, 255, 0.8))",
                      "linear-gradient(225deg, rgb(255, 255, 255), rgba(239, 246, 255, 0.8), rgba(243, 232, 255, 0.8))",
                      "linear-gradient(315deg, rgb(255, 255, 255), rgba(243, 232, 255, 0.8), rgba(253, 242, 248, 0.8))"
                    ]
                  }}
                  transition={{
                    background: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Premium colorful glow effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/25 to-blue-400/30 blur-lg"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  <motion.img 
                    src={profileImage} 
                    alt="Profile Photo" 
                    className="w-full h-full rounded-full object-cover relative z-10"
                    whileHover={{ 
                      scale: 1.1,
                      filter: "saturate(1.2) contrast(1.1)"
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Subtle rim light effect */}
                  <div className="absolute inset-0 rounded-full border border-white/10"></div>
                </motion.div>
              </motion.div>
              
              {/* Premium Floating Geometric Elements */}
              <motion.div 
                variants={floatingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute inset-0 pointer-events-none"
              >
                {/* Floating Diamond SVG */}
                <motion.div 
                  variants={floatingItemVariants}
                  className="absolute top-8 right-8"
                  animate={{ 
                    y: [-8, 8, -8],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M12 2 L17 7 L12 12 L7 7 Z M12 12 L17 7 L22 12 L17 17 Z M12 12 L7 17 L2 12 L7 7 Z M12 12 L17 17 L12 22 L7 17 Z" 
                      fill="url(#diamondGradient)" 
                      opacity="0.6"
                    />
                    <defs>
                      <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
                        <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                
                {/* Floating Hexagon SVG */}
                <motion.div 
                  variants={floatingItemVariants}
                  className="absolute bottom-8 left-8"
                  animate={{ 
                    y: [8, -8, 8],
                    x: [4, -4, 4],
                    rotate: [0, -360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M17.5 3.5 L20.5 8 L20.5 16 L17.5 20.5 L6.5 20.5 L3.5 16 L3.5 8 L6.5 3.5 Z" 
                      fill="url(#hexGradient)" 
                      opacity="0.5"
                    />
                    <defs>
                      <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.7)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
                
                {/* Floating Triangle SVG */}
                <motion.div 
                  variants={floatingItemVariants}
                  className="absolute top-1/2 left-4"
                  animate={{ 
                    x: [-4, 12, -4],
                    rotate: [0, 180, 360],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 4
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M12 2 L22 20 L2 20 Z" 
                      fill="url(#triangleGradient)" 
                      opacity="0.4"
                    />
                    <defs>
                      <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Sparkle effects */}
              <motion.div 
                className="absolute top-8 left-1/2 w-2 h-2 bg-white rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute bottom-8 right-8 w-1 h-1 bg-white rounded-full"
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentVariants}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Computer Science Engineering Student
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I am a Computer Science and Engineering student at Kongu Engineering College (2023–2027) 
                with hands-on experience in web development, AI integration, and database systems. 
                I enjoy designing intuitive user interfaces and building scalable applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in creating digital solutions that make a difference. From developing 
                smart dashboards to building AI-powered chatbots, I love bringing ideas to life through code.
              </p>
            </div>

            {/* Info Cards */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4 mt-8"
              variants={cardsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={cardVariants}
                className="bg-card border border-border rounded-lg p-4 hover:bg-card/80 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "hsl(var(--primary))",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  y: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap size={20} className="text-primary" />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  B.E. Computer Science<br />
                  Kongu Engineering College
                </p>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                className="bg-card border border-border rounded-lg p-4 hover:bg-card/80 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "hsl(var(--primary))",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  y: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Calendar size={20} className="text-primary" />
                  <h4 className="font-semibold">Duration</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  2023 - 2027<br />
                  Currently in 2nd Year
                </p>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                className="bg-card border border-border rounded-lg p-4 hover:bg-card/80 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "hsl(var(--primary))",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  y: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={20} className="text-primary" />
                  <h4 className="font-semibold">Location</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tamil Nadu, India
                </p>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                className="bg-card border border-border rounded-lg p-4 hover:bg-card/80 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "hsl(var(--primary))",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  y: -5
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <User size={20} className="text-primary" />
                  <h4 className="font-semibold">Focus</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Full Stack Development<br />
                  AI Integration
                </p>
              </motion.div>
            </motion.div>

            {/* Achievements */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">MongoDB Associate Developer Certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Oracle APEX Development Certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Hackathon participation in BYTS & SIH</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground">Gen AI Consortium Internship Experience</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

