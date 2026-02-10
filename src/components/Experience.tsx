import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const experiences = [
    {
      key: 'elsewedy',
      type: "current",
      image: "/EE.png"
    },
    {
      key: 'energyShields',
      type: "recent",
      image: "/ES.jpg"
    },
    {
      key: 'muwazi',
      type: "past",
      image: "/MOAZE.png"
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-primary to-transparent" />
            <span className="text-sm font-mono text-primary">{t('experience.label')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
            {t('experience.heading')} <span className="text-gradient-primary">{t('experience.headingHighlight')}</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute start-0 md:start-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative ps-8 md:ps-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute start-0 md:start-8 -translate-x-1/2 rtl:translate-x-1/2 w-4 h-4 rounded-full border-2 
                    ${exp.type === 'current' ? 'bg-primary border-primary shadow-glow' : 'bg-background border-primary/50'}`}
                  />

                  {/* Card */}
                  <div className="group p-6 md:p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 w-full">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                          {/* Company Logo & Name Header */}
                          <div className="flex items-center gap-4 mb-3">
                            <div className="md:hidden w-12 h-12 rounded-lg bg-white p-1 border border-border flex items-center justify-center overflow-hidden shrink-0">
                              <img
                                src={exp.image}
                                alt={t(`experience.jobs.${exp.key}.company`)}
                                className={`w-full h-full object-contain ${exp.key === 'muwazi' ? 'scale-[1.7]' :
                                  exp.key === 'energyShields' ? 'scale-[1.4]' : ''
                                  }`}
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">{t(`experience.jobs.${exp.key}.company`)}</h3>
                                {exp.type === 'current' && (
                                  <span className="px-2 py-0.5 text-[10px] font-mono bg-primary/20 text-primary border border-primary/20 rounded-full uppercase tracking-wider">
                                    Current
                                  </span>
                                )}
                              </div>
                              <p className="text-sm font-medium text-muted-foreground">{t(`experience.jobs.${exp.key}.role`)}</p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-mono">{t(`experience.jobs.${exp.key}.period`)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{t(`experience.jobs.${exp.key}.location`)}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {(t(`experience.jobs.${exp.key}.responsibilities`, { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Desktop Featured Logo Panel */}
                      <div className="hidden md:flex shrink-0 items-center justify-center self-center">
                        <div className="w-40 h-40 rounded-2xl bg-white p-4 flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                          {/* Subtle background pattern/glow */}


                          <img
                            src={exp.image}
                            alt={t(`experience.jobs.${exp.key}.company`)}
                            className={`w-full h-full object-contain ${exp.key === 'muwazi' ? 'scale-[1.7]' :
                              exp.key === 'energyShields' ? 'scale-[1.4]' : ''
                              }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
