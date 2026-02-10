import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send, Linkedin, Download, Phone, Facebook, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary">{t('contact.label')}</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.heading')} <span className="text-gradient-primary">{t('contact.headingHighlight')}</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{t('contact.location')}</span>
            </div>
            <a
              href="tel:+201023903894"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">+201023903894</span>
            </a>
            <a
              href="mailto:eng.m.saad1997@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">eng.m.saad1997@gmail.com</span>
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:eng.m.saad1997@gmail.com">
              <Button
                size="lg"
                className="group bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('contact.getInTouch')}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/Mohamed_Saad_Resume.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary/50 hover:bg-primary/10 px-8"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('contact.downloadResume')}
              </Button>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-12"
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
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>{t('contact.footer.copyright')}</p>
            <p className="font-mono">{t('contact.footer.tagline')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
