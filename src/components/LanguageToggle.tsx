import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:bg-secondary/70 transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
      <div className="flex items-center gap-1.5">
        <motion.span
          className={`text-xs font-semibold transition-colors ${!isArabic ? 'text-primary' : 'text-muted-foreground/60'}`}
          animate={{ scale: !isArabic ? 1.1 : 1 }}
        >
          EN
        </motion.span>
        <span className="text-muted-foreground/40 text-xs">•</span>
        <motion.span
          className={`text-xs font-semibold transition-colors ${isArabic ? 'text-primary' : 'text-muted-foreground/60'}`}
          animate={{ scale: isArabic ? 1.1 : 1 }}
        >
          عربي
        </motion.span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;