import React from 'react';
import { motion } from 'framer-motion';

const Companies: React.FC = () => {
  const companies = [
    {
      name: 'Google',
      shortName: 'G',
      color: 'bg-red-500',
      textColor: 'text-white',
    },
    {
      name: 'Apple',
      shortName: '',
      color: 'bg-gray-900',
      textColor: 'text-white',
    },
    {
      name: 'Meta',
      shortName: 'f',
      color: 'bg-blue-600',
      textColor: 'text-white',
    },
    {
      name: 'Amazon',
      shortName: 'a',
      color: 'bg-orange-500',
      textColor: 'text-white',
    },
    {
      name: 'Netflix',
      shortName: 'N',
      color: 'bg-red-600',
      textColor: 'text-white',
    },
    {
      name: 'Microsoft',
      shortName: '',
      color: 'bg-blue-500',
      textColor: 'text-white',
    },
    {
      name: 'Tesla',
      shortName: 'T',
      color: 'bg-red-500',
      textColor: 'text-white',
    },
    {
      name: 'Spotify',
      shortName: '♫',
      color: 'bg-green-500',
      textColor: 'text-white',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-lg mb-8"
          >
            Trusted by professionals from top companies worldwide
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center"
          >
            {companies.map((company, _index) => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                className="flex items-center justify-center w-16 h-16 rounded-xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                title={company.name}
              >
                {company.name === 'Apple' ? (
                  <div
                    className={`w-10 h-10 rounded-lg ${company.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                  </div>
                ) : company.name === 'Microsoft' ? (
                  <div
                    className={`w-10 h-10 rounded-lg ${company.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
                    </svg>
                  </div>
                ) : (
                  <div
                    className={`w-10 h-10 rounded-lg ${company.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className={`text-xl font-bold ${company.textColor}`}>
                      {company.shortName || company.name.charAt(0)}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 dark:text-gray-500 mt-8"
          >
            Join thousands of professionals who've found their perfect match
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
