import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiOracle,
  SiGit,
  SiGithub,
  SiMysql,
  SiNodedotjs,
} from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Custom Java icon component
const JavaIcon = (props) => (
  <svg 
    {...props}
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.851 18.56s-.708.506.855.962c1.564.456 2.825.456 4.988-.152 0 0 .709.506 1.917.86-.709 1.063-4.582 1.415-7.76.152M5.743 15.11s-1.415 1.063.566 1.567c1.98.505 3.538.606 6.108.152 0 0 .709.506 1.415.86-.85 1.214-4.988 1.416-8.489-.86M13.116 11.797s1.415-1.214-.566-1.819c-1.98-.606-3.537-.606-5.52 0-.456.152-1.133.455-.85.86.283.404.85.607 1.133.607.566.15 1.133.303 1.7.303-1.133-.15-2.55-.303-3.68-.758-1.133-.454-2.266-1.214-1.7-2.124.566-.91 2.55-1.567 4.53-1.819 1.98-.303 3.68-.152 5.377.303 0 0-1.133-.152-1.7.303-.283.303-.566.607-.283.91.283.303.85.455 1.133.455.85.152 1.7.303 2.55.455M19.33 20.664s.85.607-.85 1.214c-2.266.91-8.488.91-11.33.303 0 0 .85.607 2.266.758 2.55.303 7.48.152 10.04-.607 0 0 .566.152.874.303M15.548 0s3.962 3.962-1.133 8.488c-4.53 4.078-1.133 5.59-.283 7.103-.85-2.124-3.962-3.335-2.55-5.59 1.7-2.73 4.53-5.59 3.966-10.001M14.02 16.479c-1.7 1.214-4.53 1.214-4.53 1.214s1.133-.152 2.55-.303c1.416-.152 2.833-.152 1.98-.91M10.76 2.428S22.308 5.742 18.625 13.338c-1.133 2.276-3.537 2.73-3.537 2.73s1.133-1.214 1.7-2.428c.85-1.819.566-3.335.566-3.335s-1.133 1.819-2.833 2.73c-1.7.91-3.4 1.063-3.4 1.063s.85-.455 1.7-.91c1.133-.607 1.7-1.214 1.7-1.214s-2.55.91-4.53 1.214c-1.98.303-3.68.152-3.68.152s5.377-1.819 9.34-4.99c3.962-3.17 4.53-5.59 4.53-5.59"/>
  </svg>
);

// Custom C++ icon component
const CppIcon = (props) => (
  <svg 
    {...props}
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.849 0L2.261 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.849 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.002-.294-.1-.62-.268-.91zM13 19.11c-4.209 0-7.623-3.414-7.623-7.623S8.791 3.864 13 3.864s7.623 3.414 7.623 7.623S17.209 19.11 13 19.11zM16.533 9.89l-1.414-1.414-2.119 2.119-2.12-2.119-1.414 1.414 2.12 2.119-2.12 2.119 1.414 1.414 2.12-2.119 2.119 2.119 1.414-1.414-2.119-2.119 2.119-2.119z"/>
  </svg>
);

// Custom MATLAB icon component
const MatlabIcon = (props) => (
  <svg 
    {...props}
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.394 4c0-1.1-.9-2-2-2H3.606c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16.788c1.1 0 2-.9 2-2V4zM7.5 19.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm5 0c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm5 0c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM7.5 12c-1.381 0-2.5-1.119-2.5-2.5S6.119 7 7.5 7 10 8.119 10 9.5 8.881 12 7.5 12zm5 0c-1.381 0-2.5-1.119-2.5-2.5S11.119 7 12.5 7 15 8.119 15 9.5 13.881 12 12.5 12zm5 0c-1.381 0-2.5-1.119-2.5-2.5S16.119 7 17.5 7 20 8.119 20 9.5 18.881 12 17.5 12z"/>
  </svg>
);

const SkillsSection = () => {
  const skills = [
    { name: 'Java', icon: JavaIcon, color: 'text-[#ED8B00]' },
    { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS3', icon: SiCss3, color: 'text-[#1572B6]' },
    { name: 'React.js', icon: SiReact, color: 'text-[#61DAFB]' },
    { name: 'Express.js', icon: SiExpress, color: 'text-[#000000] dark:text-[#FFFFFF]' },
    { name: 'Flask', icon: SiFlask, color: 'text-[#000000] dark:text-[#FFFFFF]' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
    { name: 'Oracle APEX', icon: SiOracle, color: 'text-[#F80000]' },
    { name: 'MATLAB', icon: MatlabIcon, color: 'text-[#0076A8]' },
    { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
    { name: 'GitHub', icon: SiGithub, color: 'text-[#181717] dark:text-[#FFFFFF]' },
    { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
    { name: 'C++', icon: CppIcon, color: 'text-[#00599C]' },
  ];

  // MERN Stack as a special combined item
  const mernStack = {
    name: 'MERN Stack',
    icons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
    colors: ['text-[#47A248]', 'text-[#000000] dark:text-[#FFFFFF]', 'text-[#61DAFB]', 'text-[#339933]'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <TooltipProvider>
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isCustomIcon = skill.name === 'Java' || skill.name === 'C++' || skill.name === 'MATLAB';
              
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300" />
                      
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className={`text-5xl md:text-6xl ${skill.color} group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300 flex items-center justify-center`}>
                          {isCustomIcon ? (
                            <IconComponent className="w-full h-full" />
                          ) : (
                            <IconComponent />
                          )}
                        </div>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}

            {/* MERN Stack Special Card */}
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer col-span-3 sm:col-span-4 md:col-span-5 lg:col-span-6"
                >
                  <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300" />
                  
                  <div className="relative z-10 w-full">
                    <span className="block text-sm font-semibold text-center mb-4 text-foreground group-hover:text-primary transition-colors">
                      MERN Stack
                    </span>
                    <div className="flex items-center justify-center gap-6">
                      {mernStack.icons.map((IconComponent, idx) => (
                        <div
                          key={idx}
                          className={`text-4xl md:text-5xl ${mernStack.colors[idx]} group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300`}
                        >
                          <IconComponent />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-center mt-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      MongoDB • Express • React • Node.js
                    </p>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">MERN Stack</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </TooltipProvider>

        {/* Certifications Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'MongoDB Associate Developer', issuer: 'MongoDB University', icon: SiMongodb },
              { name: 'Oracle APEX Development', issuer: 'Oracle', icon: SiOracle },
              { name: 'Gen AI Consortium', issuer: 'AI Research', icon: SiReact },
            ].map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card/70 border border-border rounded-lg p-6 text-center hover:bg-card/90 transition-all duration-300"
                >
                  <IconComponent size={40} className="text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
