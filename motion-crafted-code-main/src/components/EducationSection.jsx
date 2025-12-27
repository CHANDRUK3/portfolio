import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Trophy, Users } from 'lucide-react';

const EducationSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const achievementVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  const education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Kongu Engineering College',
      period: '2023 - 2027',
      status: 'Currently Pursuing',
      location: 'Tamil Nadu, India',
      highlights: [
        'Specialized in Full Stack Development',
        'Active participant in coding competitions',
        'Member of technical societies'
      ]
    },
    {
      degree: 'HSC in Computer Science & Mathematics',
      institution: 'Kongu Vellalar Matric Hr. Sec. School',
      period: '2020 - 2023',
      status: 'Completed',
      location: 'Tamil Nadu, India',
      highlights: [
        'Mathematics and Computer Science Focus',
        'Strong foundation in programming concepts',
        'Academic excellence in STEM subjects'
      ]
    }
  ];

  const experiences = [
    {
      title: 'Gen AI Consortium Internship',
      company: 'AI Research Institute',
      period: 'Summer 2024',
      type: 'Internship',
      description: 'Worked on Image Processing & Mathematical Computation projects using AI/ML technologies.',
      achievements: [
        'Developed image processing algorithms',
        'Implemented mathematical computation models',
        'Collaborated with research team on AI projects'
      ]
    },
    {
      title: 'Hackathon Participant',
      company: 'BYTS & SIH',
      period: '2023 - 2024',
      type: 'Competition',
      description: 'Built smart student dashboard and innovative solutions for real-world problems.',
      achievements: [
        'Smart Student Dashboard Development',
        'Team collaboration and leadership',
        'Problem-solving under time constraints'
      ]
    }
  ];

  const TimelineItem = ({ item, index, isEducation = true }) => (
    <motion.div 
      variants={itemVariants}
      className="relative flex gap-6 pb-8"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <motion.div 
          className={`w-4 h-4 rounded-full ${isEducation ? 'bg-primary' : 'bg-secondary'} border-4 border-background shadow-lg`}
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        ></motion.div>
        <div className="w-0.5 h-full bg-border mt-2"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="flex-1 bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
        whileHover={{ 
          y: -5,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {isEducation ? item.degree : item.title}
            </h3>
            <p className="text-primary font-medium">
              {isEducation ? item.institution : item.company}
            </p>
          </div>
          <div className="text-right mt-2 sm:mt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <Calendar size={16} />
              {item.period}
            </div>
            {isEducation && item.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                {item.location}
              </div>
            )}
          </div>
        </div>

        {item.description && (
          <p className="text-muted-foreground mb-4">
            {item.description}
          </p>
        )}

        <div className="space-y-2">
          {(isEducation ? item.highlights : item.achievements).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Status Badge */}
        <div className="mt-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            isEducation 
              ? item.status === 'Currently Pursuing' 
                ? 'bg-primary/10 text-primary' 
                : 'bg-secondary text-secondary-foreground'
              : 'bg-accent/10 text-accent-foreground'
          }`}>
            {isEducation ? item.status : item.type}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="education" className="py-20 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            variants={titleVariants}
          >
            Education & <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            variants={titleVariants}
            transition={{ delay: 0.2 }}
          >
            My academic journey and professional experiences that shaped my skills
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Education Timeline */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <GraduationCap size={32} className="text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </motion.div>
            
            <motion.div 
              className="space-y-0"
              variants={containerVariants}
            >
              {education.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} isEducation={true} />
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Trophy size={32} className="text-primary" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </motion.div>
            
            <motion.div 
              className="space-y-0"
              variants={containerVariants}
            >
              {experiences.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} isEducation={false} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievements Cards */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center gap-3 mb-8 justify-center"
            variants={titleVariants}
          >
            <Award size={32} className="text-primary" />
            <h3 className="text-2xl font-bold">Key Achievements</h3>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              {
                title: 'MongoDB Certified',
                subtitle: 'Associate Developer',
                icon: Award,
                color: 'text-green-500'
              },
              {
                title: 'Oracle APEX',
                subtitle: 'Development Certified',
                icon: Award,
                color: 'text-blue-500'
              },
              {
                title: 'Hackathon',
                subtitle: 'Participant',
                icon: Users,
                color: 'text-purple-500'
              },
              {
                title: 'AI Research',
                subtitle: 'Internship',
                icon: Trophy,
                color: 'text-orange-500'
              }
            ].map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:bg-card/80 transition-all duration-300"
                  variants={achievementVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    rotate: 1
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  >
                    <IconComponent size={40} className={`mx-auto mb-3 ${achievement.color}`} />
                  </motion.div>
                  <h4 className="font-bold mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

