import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Linkedin, Github, Facebook, Instagram, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 lg:py-0">
      {/* premium 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Deep atmospheric glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[100px] mix-blend-screen" />



        {/* Element 1: Top Left - Floating Prism */}
        <motion.div
          className="absolute top-[15%] left-[5%] w-24 h-24 lg:w-32 lg:h-32 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl z-0"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1],
            borderRadius: ["20% 50% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%", "20% 50% 30% 70% / 60% 30% 70% 40%"]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-2 border border-primary/20 rounded-xl" />
        </motion.div>

        {/* Element 2: Top Right - Rotating Tech Ring */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-40 h-40 lg:w-64 lg:h-64 rounded-full border border-primary/10 border-dashed z-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-primary/5 scale-75" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary/20 rounded-full blur-md" />
        </motion.div>

        {/* Element 3: Bottom Left - Cyber Card */}
        <motion.div
          className="absolute bottom-[20%] left-[8%] w-20 h-28 lg:w-24 lg:h-36 border-l border-b border-primary/20 bg-gradient-to-tr from-primary/5 to-transparent backdrop-blur-[2px] z-0"
          initial={{ opacity: 0.5 }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            borderRadius: ["20% 50% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%", "20% 50% 30% 70% / 60% 30% 70% 40%"]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Element 4: Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>



      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text content */}
          <motion.div
            className="text-center lg:text-start order-2 lg:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Current Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-md mb-8 hover:bg-secondary/80 transition-colors cursor-default group"
            >
              <div className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <img src="/EE.png" alt="Elsewedy Electric" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider leading-none mb-1">Currently at</span>
                <span className="text-sm font-bold text-foreground leading-none">Elsewedy Electric</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-6"
            >
              <span className="text-foreground uppercase tracking-[-0.05em]">{t('hero.firstName')}</span>
              <br />
              <span className="text-gradient-primary uppercase tracking-[0.1em]">{t('hero.lastName')}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground mb-4 uppercase tracking-[0.25em]"
            >
              {t('hero.title')}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground/80 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 mb-8"
            >
              <div className="text-center lg:text-start">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient-primary tracking-tight">{t('hero.yearsExp')}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-[0.2em] mt-1">{t('hero.yearsLabel')}</div>
              </div>
              <div className="text-center lg:text-start">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient-accent tracking-tight">{t('hero.projectsCount')}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-[0.2em] mt-1">{t('hero.projectsLabel')}</div>
              </div>
              <div className="text-center lg:text-start">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">{t('hero.companiesCount')}</div>
                <div className="text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-[0.2em] mt-1">{t('hero.companiesLabel')}</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                {t('contact.getInTouch')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>



            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start gap-4 mt-8 flex-wrap"
            >
              <a
                href="https://www.linkedin.com/in/mteng97"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/healer154"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/mo7amed.abdel3leem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/mteng97/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:eng.m.saad1997@gmail.com"
                className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:+201023903894"
                className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            {/* Elegant Decorative Rings */}
            <motion.div
              className="absolute inset-[-20px] rounded-full border border-primary/20"
              animate={{
                rotate: 360,
                borderRadius: ["50% 50% 50% 50%", "40% 60% 60% 40%", "50% 50% 50% 50%", "60% 40% 40% 60%"]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-2 h-2 bg-primary/40 rounded-full" />
            </motion.div>

            <motion.div
              className="absolute inset-[-40px] rounded-full border border-primary/10"
              animate={{
                rotate: -360,
                borderRadius: ["50% 50% 50% 50%", "60% 40% 40% 60%", "50% 50% 50% 50%", "40% 60% 60% 40%"]
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[1px] w-1.5 h-1.5 bg-primary/20 rounded-full" />
            </motion.div>

            {/* Outer glow ring */}
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl" />

            {/* Photo container */}
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/50 shadow-glow">
              <img
                src={profilePhoto}
                alt="Mohamed Saad - Mechatronics Engineer"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
