import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Cog, Lightbulb, Target } from "lucide-react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Cpu,
      title: t('about.highlights.mechatronics.title'),
      description: t('about.highlights.mechatronics.description')
    },
    {
      icon: Cog,
      title: t('about.highlights.cad.title'),
      description: t('about.highlights.cad.description')
    },
    {
      icon: Lightbulb,
      title: t('about.highlights.rd.title'),
      description: t('about.highlights.rd.description')
    },
    {
      icon: Target,
      title: t('about.highlights.precision.title'),
      description: t('about.highlights.precision.description')
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* KFS Background Watermark */}
      {/* KFS Background Watermark */}
      <div className="absolute left-0 w-[50%] md:w-[25%] top-[20%] bottom-0 md:inset-y-0 flex items-start md:items-center justify-start pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/KFS.png"
          alt=""
          className="w-full h-auto object-contain opacity-[0.1] [mask-image:linear-gradient(to_right,black,transparent)] [-webkit-mask-image:linear-gradient(to_right,black,transparent)]"
        />
      </div>
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-primary to-transparent" />
            <span className="text-sm font-mono text-primary">{t('about.label')}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t('about.heading')}{" "}
                <span className="text-gradient-primary">{t('about.headingHighlight')}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t('about.p2')}
              </p>

              {/* Education */}
              <div className="p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img src="/KFS.png" alt="KFS University" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-medium">{t('about.degree')}</div>
                    <div className="text-sm text-muted-foreground">{t('about.university')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
