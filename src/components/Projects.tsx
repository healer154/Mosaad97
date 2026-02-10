import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Box, Truck, Shield, ExternalLink, Users, Eye, Heart, Download, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectsProps {
  preview?: boolean;
}

const Projects = ({ preview = false }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const projects = [
    {
      key: 'adesToolbox',
      icon: Box,
      tags: ["SolidWorks", "API Standards", "Steel Structure"],
      color: "primary",
      image: "/ADES.png"
    },
    {
      key: 'napscoMud',
      icon: Wrench,
      tags: ["Reverse Engineering", "CAD", "Maintenance"],
      color: "accent",
      image: "/NPSCO.png"
    },
    {
      key: 'sinoTharwa',
      icon: Shield,
      tags: ["Structural Design", "As-Built Models", "Fabrication"],
      color: "primary",
      image: "/MDC.jpg"
    },
    {
      key: 'productionLines',
      icon: Truck,
      tags: ["CNC Design", "3D Printing", "Automation"],
      color: "accent",
      image: "/PL.jpg"
    },
    {
      key: 'consumerProducts',
      icon: Box,
      tags: ["Product Design", "Mechanism Design", "Innovation"],
      color: "primary",
      image: "/Chopper.jpg"
    },
    {
      key: 'safetyConcepts',
      icon: Shield,
      tags: ["Concept Design", "Safety Engineering", "R&D"],
      color: "accent",
      image: "/GS.jpg"
    }
  ];

  const grabcadModels = [
    {
      key: 'mb3dp',
      url: "https://grabcad.com/library/moving-bed-3d-printer-mb3dp-1",
      downloads: 72,
      likes: 72,
      views: 529,
      image: "/mb3dp.gif"
    },
    {
      key: 'sandSweepBot',
      url: "https://grabcad.com/library/sand-sweep-bot-ssb-1",
      downloads: 24,
      likes: 24,
      views: 180,
      image: "/sand_sweep_bot.webm"
    },
    {
      key: 'smartHelmet',
      url: "https://grabcad.com/library/helmet-conceptual-design-1",
      downloads: 276,
      likes: 24,
      views: 462,
      image: "/Smart_helmet.webm"
    },
    {
      key: 'watch',
      url: "https://grabcad.com/library/hand-watch-7",
      downloads: 8,
      likes: 8,
      views: 98,
      image: "/Hand_watch.webm"
    }
  ];

  return (
    <section id="projects" className="pb-24 pt-0 md:pb-32 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t('projects.heading')} <span className="text-gradient-primary">{t('projects.headingHighlight')}</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(preview ? projects.slice(0, 3) : projects).map((project, index) => (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group relative rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl 
                    ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}
                  />
                </div>

                {project.image && (
                  <div className="w-full h-56 overflow-hidden relative border-b border-border/50 bg-white">
                    <img
                      src={project.image}
                      alt={t(`projects.items.${project.key}.title`)}
                      className={`w-full h-full transition-transform duration-500 ${['productionLines', 'consumerProducts', 'safetyConcepts'].includes(project.key)
                        ? 'object-cover group-hover:scale-110'
                        : `object-contain p-2 ${project.key === 'sinoTharwa' ? 'scale-[1.4] group-hover:scale-[1.45]' : 'group-hover:scale-105'}`
                        }`}
                    />
                  </div>
                )}

                <div className="relative p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors
                    ${project.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'}`}>
                    <project.icon className={`w-6 h-6 ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>

                  {/* Category */}
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {t(`projects.items.${project.key}.category`)}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {t(`projects.items.${project.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t(`projects.items.${project.key}.description`)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!preview && (
            <>
              {/* GrabCAD Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-24"
              >
                {/* GrabCAD Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-transparent" />
                      <span className="text-sm font-mono text-accent">{t('projects.grabcad.label')}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      {t('projects.grabcad.heading')} <span className="text-gradient-primary">{t('projects.grabcad.headingHighlight')}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <span className="text-2xl md:text-3xl font-bold text-primary">33</span>
                      <p className="text-xs text-muted-foreground">{t('projects.grabcad.models')}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl md:text-3xl font-bold text-accent">56</span>
                      <p className="text-xs text-muted-foreground">{t('projects.grabcad.followers')}</p>
                    </div>
                  </div>
                </div>

                {/* GrabCAD Models Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {grabcadModels.map((model, index) => (
                    <motion.a
                      key={model.key}
                      href={model.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="group relative rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500"
                    >
                      {/* Model Image or Gradient Placeholder */}
                      {model.image ? (
                        <div className="aspect-square bg-secondary/30 overflow-hidden">
                          {(model.image.endsWith('.mp4') || model.image.endsWith('.webm')) ? (
                            <video
                              src={model.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                console.error('Video failed to load:', model.image);
                                console.error('Error details:', e);
                              }}
                            />
                          ) : (
                            <img
                              src={model.image}
                              alt={t(`projects.grabcad.items.${model.key}.title`)}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = `
                              <div class="aspect-square bg-gradient-to-br ${'from-primary/20 to-accent/20'} overflow-hidden flex items-center justify-center relative">
                                <div class="absolute inset-0 opacity-10">
                                  <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                      <pattern id="grid-${model.key}" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5" />
                                      </pattern>
                                    </defs>
                                    <rect width="100" height="100" fill="url(#grid-${model.key})" />
                                  </svg>
                                </div>
                                <svg class="w-16 h-16 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                </svg>
                              </div>
                            `;
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <div className={`aspect-square bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center relative`}>
                          <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <defs>
                                <pattern id={`grid-${model.key}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                </pattern>
                              </defs>
                              <rect width="100" height="100" fill={`url(#grid-${model.key})`} />
                            </svg>
                          </div>
                          <Box className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors relative z-10" />
                        </div>
                      )}

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                        <h4 className="text-sm font-bold text-foreground mb-2 line-clamp-2">
                          {t(`projects.grabcad.items.${model.key}.title`)}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-foreground/80">
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3 text-primary" />
                            {model.downloads}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3 fill-current text-red-400" />
                            {model.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3 text-accent" />
                            {model.views}
                          </span>
                        </div>
                      </div>

                      {/* External link icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4 text-accent" />
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* View Profile Button */}
                <div className="flex justify-center">
                  <a
                    href="https://grabcad.com/mohamed.abdelaleem.saad-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors font-medium"
                  >
                    <span>{t('projects.grabcad.viewProfile')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Instagram Portfolio Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-24"
              >
                {/* Instagram Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-pink-500 to-transparent" />
                      <span className="text-sm font-mono text-pink-500">{t('projects.instagram.label')}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      {t('projects.instagram.heading')} <span className="text-gradient-primary">{t('projects.instagram.headingHighlight')}</span>
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-md">
                      {t('projects.instagram.subtitle')}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <span className="text-2xl md:text-3xl font-bold text-pink-500">27</span>
                      <p className="text-xs text-muted-foreground">{t('projects.instagram.posts')}</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl md:text-3xl font-bold text-accent">102</span>
                      <p className="text-xs text-muted-foreground">{t('projects.instagram.followers')}</p>
                    </div>
                  </div>
                </div>

                {/* Instagram Posts Grid - Landscape (User Selection) */}
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-4 text-center text-muted-foreground">Featured Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      'C9418EmtoOJ',
                      'C-CS6FjNRsN',
                      'CxsORd2Nkpj'
                    ].map((postId, index) => (
                      <motion.div
                        key={postId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 bg-white"
                      >
                        <iframe
                          src={`https://www.instagram.com/p/${postId}/embed/captioned/`}
                          width="100%"
                          height="550"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency
                          className="w-full bg-white"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Instagram Posts Grid - Portrait (Others) */}
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4 text-center text-muted-foreground mt-8">Latest Renders</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      'C86Gsqytm7F',
                      'C846XIbNkWC',
                      'C9_lr5Ztp7W'
                    ].map((postId, index) => (
                      <motion.div
                        key={postId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className="rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 bg-white"
                      >
                        <iframe
                          src={`https://www.instagram.com/p/${postId}/embed/captioned/`}
                          width="100%"
                          height="480"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency
                          className="w-full bg-white"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* View Profile Button */}
                <div className="flex justify-center">
                  <a
                    href="https://www.instagram.com/mteng97/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{t('projects.instagram.viewProfile')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </>
          )}

          {preview && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-12"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/50 border border-border hover:bg-secondary hover:border-primary/50 transition-all font-medium"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
