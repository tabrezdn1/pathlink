import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, Shield, TrendingUp, Clock, CheckCircle, Sparkles } from 'lucide-react';

const AICopilot: React.FC = () => {
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

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description:
        'Our AI analyzes thousands of data points to match you with opportunities that align with your skills, experience, and career goals.',
      benefit: '10x better matches',
    },
    {
      icon: Target,
      title: 'Skill Gap Analysis',
      description:
        'Identify missing skills for your target roles and get personalized recommendations to bridge the gap.',
      benefit: 'Faster promotions',
    },
    {
      icon: Zap,
      title: 'Instant Application Insights',
      description:
        'Get real-time feedback on your applications and learn what makes you stand out to recruiters.',
      benefit: '3x higher response rate',
    },
    {
      icon: Shield,
      title: 'ATS Optimization',
      description:
        'Ensure your profile passes through Applicant Tracking Systems used by top companies.',
      benefit: '95% ATS compatibility',
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description:
        'Stay ahead with insights on hiring trends, salary benchmarks, and in-demand skills in your field.',
      benefit: 'Always competitive',
    },
    {
      icon: Clock,
      title: 'Application Tracking',
      description:
        'Never lose track of your applications with our intelligent dashboard and automated follow-up reminders.',
      benefit: 'Zero missed opportunities',
    },
  ];

  const successMetrics = [
    { number: '2 weeks', label: 'Average time to hire' },
    { number: '5x', label: 'More interviews' },
    { number: '40%', label: 'Higher salary offers' },
    { number: '100K+', label: 'Successful placements' },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Your Personal AI Career Agent</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl text-display text-gray-900 dark:text-white mb-6"
          >
            Built by Job Seekers, <span className="gradient-text">for Job Seekers</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-body-large text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
          >
            PathLink's AI Copilot acts as your personal talent agent, analyzing millions of data
            points to accelerate your career journey and connect you with opportunities you never
            knew existed.
          </motion.p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {successMetrics.map((metric, _index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all duration-300">
                {metric.number}
              </div>
              <div className="text-caption text-gray-600 dark:text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {features.map((feature, _index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white dark:text-gray-900" />
              </div>

              <h3 className="text-heading text-gray-900 dark:text-white mb-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-body text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="w-3 h-3" />
                <span>{feature.benefit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl text-heading text-gray-900 dark:text-white mb-6"
          >
            Ready to experience the future of job searching?
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-accent flex items-center space-x-2">
              <span>Start Your AI Journey</span>
              <Sparkles className="w-5 h-5" />
            </button>

            <button className="btn-secondary">
              <span>See How It Works</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICopilot;
