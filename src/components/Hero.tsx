import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Briefcase, TrendingUp } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay: number;
}

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const trustLogos: string[] = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];

  const stats: StatItem[] = [
    {
      icon: Users,
      value: '10K+',
      label: 'Active Job Seekers',
      delay: 0,
    },
    {
      icon: Briefcase,
      value: '500+',
      label: 'Partner Companies',
      delay: 0.5,
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      delay: 1,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto pt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium mb-8"
          >
            <Star className="w-4 h-4 fill-current text-gray-600 dark:text-gray-400" />
            <span>Trusted by professionals from Google, Meta, Netflix & more</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl text-display mb-6"
          >
            <motion.span
              className="block text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Smarter Matches.
            </motion.span>
            <motion.span
              className="block gradient-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Faster Hires.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-body-large text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            PathLink connects the right people to the right roles — faster, smarter, and without the
            noise. Whether you're hiring or looking, PathLink gives you the guidance and match
            quality no job board can.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              className="btn-accent flex items-center space-x-2"
              onClick={() => {
                const element = document.getElementById('tabbed-features');
                if (element) {
                  // Get actual header height to offset scroll position
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.offsetHeight + 20 : 100; // Add 20px buffer
                  const elementTop = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth',
                  });
                  // Set applicants tab as active after scroll
                  setTimeout(() => {
                    const applicantsTab = document.querySelector(
                      '[data-tab="applicants"]'
                    ) as HTMLButtonElement;
                    applicantsTab?.click();
                  }, 500);
                }
              }}
            >
              <span>For Applicants</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              className="btn-secondary"
              onClick={() => {
                const element = document.getElementById('tabbed-features');
                if (element) {
                  // Get actual header height to offset scroll position
                  const header = document.querySelector('header');
                  const headerHeight = header ? header.offsetHeight + 20 : 100; // Add 20px buffer
                  const elementTop = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: elementTop,
                    behavior: 'smooth',
                  });
                  // Set companies tab as active after scroll
                  setTimeout(() => {
                    const companiesTab = document.querySelector(
                      '[data-tab="companies"]'
                    ) as HTMLButtonElement;
                    companiesTab?.click();
                  }, 500);
                }
              }}
            >
              <span>For Companies</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group cursor-pointer"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ delay: stat.delay }}
              >
                <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Logos */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-200 dark:border-gray-700 pt-12"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {trustLogos.map((company, index) => (
                <motion.div
                  key={company}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 font-medium cursor-pointer"
                  whileHover={{ scale: 1.1, opacity: 1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: index * 0.1 + 1.5 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
