import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  company: string;
  skills: string[];
  bgGradient: string;
  accentColor: string;
  borderColor: string;
}

const JobListings: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Product Engineer',
      location: 'Ontario',
      type: 'Full-time',
      salary: '$80k - $120k',
      company: 'TechCorp',
      skills: ['UX/UI', 'Prototyping', 'Wireframing'],
      bgGradient:
        'bg-gradient-to-br from-cream-50 via-gold-50 to-primary-50 dark:from-blue-900/40 dark:via-blue-800/30 dark:to-indigo-900/40',
      accentColor: 'text-blue-500 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      location: 'Remote, Europe',
      type: 'Full-time',
      salary: '$60k - $90k',
      company: 'WebFlow Inc',
      skills: ['Django', 'PostgreSQL', 'SQL'],
      bgGradient:
        'bg-gradient-to-br from-primary-50 via-gold-50 to-cream-50 dark:from-green-900/40 dark:via-green-800/30 dark:to-emerald-900/40',
      accentColor: 'text-green-500 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-800',
    },
    {
      id: 3,
      title: 'UX Designer',
      location: 'San Francisco',
      type: 'Contract',
      salary: '$70k - $100k',
      company: 'DesignStudio',
      skills: ['Figma', 'User Research', 'Design Systems'],
      bgGradient:
        'bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/40 dark:via-purple-800/30 dark:to-pink-900/40',
      accentColor: 'text-purple-500 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800',
    },
    {
      id: 4,
      title: 'Backend Engineer',
      location: 'New York',
      type: 'Full-time',
      salary: '$90k - $130k',
      company: 'DataFlow',
      skills: ['Node.js', 'MongoDB', 'AWS'],
      bgGradient:
        'bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/40 dark:via-orange-800/30 dark:to-red-900/40',
      accentColor: 'text-orange-500 dark:text-orange-400',
      borderColor: 'border-orange-200 dark:border-orange-800',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$85k - $115k',
      company: 'CloudTech',
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      bgGradient:
        'bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-900/40 dark:via-teal-800/30 dark:to-cyan-900/40',
      accentColor: 'text-teal-500 dark:text-teal-400',
      borderColor: 'border-teal-200 dark:border-teal-800',
    },
    {
      id: 6,
      title: 'Mobile Developer',
      location: 'Los Angeles',
      type: 'Part-time',
      salary: '$50k - $75k',
      company: 'AppMakers',
      skills: ['React Native', 'Flutter', 'iOS'],
      bgGradient:
        'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/40 dark:via-pink-800/30 dark:to-rose-900/40',
      accentColor: 'text-pink-500 dark:text-pink-400',
      borderColor: 'border-pink-200 dark:border-pink-800',
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Your Next Opportunity
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Browse through carefully curated job listings from top companies actively hiring
            talented professionals.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover="hover"
              className={`group cursor-pointer ${job.bgGradient} rounded-2xl p-6 border ${job.borderColor} hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-200"
                    layoutId={`job-title-${job.id}`}
                  >
                    {job.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{job.company}</p>
                </div>
                <motion.div
                  className={`w-3 h-3 rounded-full ${job.accentColor.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.5 }}
                />
              </div>

              {/* Location & Type */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400 relative z-10">
                <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </motion.div>
                <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                  <Clock className="w-4 h-4" />
                  <span>{job.type}</span>
                </motion.div>
              </div>

              {/* Salary */}
              <motion.div
                className="flex items-center space-x-1 mb-4 text-gray-700 dark:text-gray-300 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                <DollarSign className="w-4 h-4" />
                <span className="font-semibold">{job.salary}</span>
              </motion.div>

              {/* Skills */}
              <div className="mb-6 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors duration-200 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <motion.div
                className="flex items-center justify-between relative z-10"
                variants={hoverVariants}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  In-Demand Section Cards Pattern
                </span>
                <motion.div whileHover={{ scale: 1.1, rotate: 45 }} transition={{ duration: 0.2 }}>
                  <ArrowRight
                    className={`w-5 h-5 ${job.accentColor} transform group-hover:translate-x-1 transition-transform duration-200`}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="btn-primary flex items-center space-x-2 mx-auto relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10">View All Opportunities</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobListings;
