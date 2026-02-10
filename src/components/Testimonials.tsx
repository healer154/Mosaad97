import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, MapPin, ExternalLink } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const testimonials = [
    {
      id: 1,
      project: t('testimonials.items.toy.project'),
      rating: 4.9,
      feedback: t('testimonials.items.toy.feedback'),
      clientLocation: t('testimonials.items.toy.location'),
      date: "Feb 2023"
    },
    {
      id: 2,
      project: t('testimonials.items.brush.project'),
      rating: 5.0,
      feedback: t('testimonials.items.brush.feedback'),
      clientLocation: t('testimonials.items.brush.location'),
      date: "Feb 2023"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating)
              ? "text-yellow-500 fill-yellow-500"
              : i < rating
                ? "text-yellow-500 fill-yellow-500 opacity-50"
                : "text-muted-foreground"
              }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium text-foreground">{rating}</span>
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Upwork Background Watermark */}
      <div className="absolute inset-0 flex items-start justify-center pt-20 pointer-events-none select-none z-0">
        <img
          src="/Upwork.png"
          alt=""
          className="w-[90%] md:w-full max-w-[700px] h-auto object-contain opacity-[0.2]"
        />
      </div>
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-mono text-primary">{t('testimonials.label')}</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('testimonials.heading')} <span className="text-gradient-primary">{t('testimonials.headingHighlight')}</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                {/* Project title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                  {testimonial.project}
                </h3>

                {/* Rating */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Feedback */}
                <p className={`text-muted-foreground mb-6 leading-relaxed italic ${isRTL ? 'text-right' : 'text-left'}`}>
                  "{testimonial.feedback}"
                </p>

                {/* Client info */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{testimonial.clientLocation}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{testimonial.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upwork link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.upwork.com/freelancers/~01ad47022013642b37"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-foreground"
          >
            <span>{t('testimonials.viewProfile')}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
