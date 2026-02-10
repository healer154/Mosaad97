import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const skillCategories = [
    {
      key: 'cad',
      skills: [
        { name: "SolidWorks", level: 95 },
        { name: "AutoCAD", level: 90 },
        { name: "Inventor", level: 85 },
        { name: "Fusion 360", level: 85 },
        { name: "Solid Edge", level: 80 },
      ]
    },
    {
      key: 'analysis',
      skills: [
        { name: "ANSYS", level: 85 },
        { name: "FEA", level: 90 },
        { name: "Automation Studio", level: 75 },
      ]
    },
    {
      key: 'programming',
      skills: [
        { name: "Python", level: 80 },
        { name: "MATLAB", level: 85 },
        { name: "PLC", level: 75 },
        { name: "C/C++", level: 70 },
        { name: "C#", level: 65 },
      ]
    }
  ];

  const coreTechnologies = [
    "SolidWorks", "AutoCAD", "Inventor", "ANSYS", "Python", "MATLAB", "PLC", "API Standards"
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-gradient-to-l from-accent/5 to-transparent blur-3xl" />
      
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-primary to-transparent" />
            <span className="text-sm font-mono text-primary">{t('skills.label')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
            {t('skills.heading')} <span className="text-gradient-primary">{t('skills.headingHighlight')}</span>
          </h2>

          {/* Core technologies marquee */}
          <div className="mb-16 overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{ x: [0, -50 * coreTechnologies.length] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...coreTechnologies, ...coreTechnologies, ...coreTechnologies].map((tech, i) => (
                <div 
                  key={i}
                  className="px-6 py-3 rounded-full border border-border bg-secondary/30 whitespace-nowrap font-mono text-sm"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skill categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.15 }}
                className="p-6 rounded-xl bg-gradient-card border border-border"
              >
                <h3 className="text-lg font-bold mb-6 text-gradient-primary">{t(`skills.categories.${category.key}.title`)}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-primary"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
