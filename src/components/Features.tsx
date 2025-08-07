import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Why PathLink Exists section data
  const whyPathLink = {
    title: 'Why PathLink Exists',
    content: [
      'The workforce is changing faster than ever.',
      'Layoffs are common. Skills become outdated overnight. Talented people are underused — and great companies are understaffed.',
      'PathLink was built to fix this.',
      "We believe in a world where talent flows, not stalls. Where layoffs don't mean starting over — they mean pivoting forward.",
      "We're not just another job board. We're a platform for career mobility, talent redistribution, and smarter hiring.",
    ],
  };

  const applicantFeatures = [
    {
      title: 'Blind-matched to roles that actually fit you',
      description:
        'Get matched to companies based on blind filters — no more keyword-stuffed resumes or endless guessing.',
    },
    {
      title: 'Career guidance that helps you grow, not guess',
      description:
        'Improve your chances with PathCoach, your AI career guide that helps you strengthen your profile, improve your resume, and prepare for interviews.',
    },
    {
      title: 'Skill-based feedback to improve your chances',
      description:
        "Discover where you belong, not just what's available. You'll get career suggestions based on real market data, not generic lists.",
    },
    {
      title: 'AI insights on where the job market is headed',
      description:
        'Stay ahead of change. Our platform gives you up-to-date insights into how AI and industry trends are shifting the job market — and what to do about it.',
    },
  ];

  const companyFeatures = [
    {
      title: 'Only see people who match your needs',
      description:
        'Post once. Get matches. No spam applicants, no endless inbox sorting — just a curated stream of qualified people.',
    },
    {
      title: 'Filter quietly — no spam or irrelevant applicants',
      description:
        'Define your filters privately. We use blind-matching to protect your intent while delivering high-fit candidates.',
    },
    {
      title: 'Unlock untapped talent from unexpected industries',
      description:
        "Find candidates from other industries or roles who meet your criteria — even if they wouldn't have applied themselves.",
    },
    {
      title: 'Fill roles faster with data-backed confidence',
      description:
        'Our system uses skill signals, retention data, and behavioral feedback to match you with the right fit the first time.',
    },
  ];

  const whoItsFor = [
    'Laid-off workers who want to bounce back stronger',
    'Career changers looking for a signal, not guesswork',
    'Companies trying to hire efficiently without compromise',
    'Governments and nonprofits looking to upskill and transition talent at scale',
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Why PathLink Exists Section */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12"
          >
            {whyPathLink.title}
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {whyPathLink.content.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className={`text-lg md:text-xl leading-relaxed ${
                  index === 0 || index === 2
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* For Applicants Section */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          id="applicants"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white dark:text-gray-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                For Applicants
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                You shouldn't have to apply to 100 jobs to find one that fits.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                PathLink helps you find roles that match your skills, personality, and potential —
                with none of the spam.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {applicantFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-surface rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                No more job boards. No more guessing. No more applying into black holes.
              </p>
              <button className="btn-primary flex items-center space-x-2 mx-auto">
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* For Companies Section */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          id="companies"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white dark:text-gray-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                For Companies
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                Only see the candidates who match — and none of the ones who don't.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                PathLink is built for recruiters who are tired of sifting through noise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {companyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-surface rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                Less recruiting friction. More signal. Built for how hiring should work.
              </p>
              <button className="btn-primary flex items-center space-x-2 mx-auto">
                <span>Request Early Access</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Who It's For Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Who It's For
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whoItsFor.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl hover:shadow-lg transition-all duration-200"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium text-center">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
