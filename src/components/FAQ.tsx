import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  category: string;
  icon: string;
  question: string;
  answer: string;
  description?: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const faqData: FAQItem[] = [
    {
      category: 'Career Growth & Learning',
      icon: '🎓',
      question: 'My Students Already Know More Than Me:',
      answer:
        'Students who are using AI and cryptocurrencies, and you want to keep up with their conversations.',
      description:
        'Stay ahead of the curve with our comprehensive learning resources designed for educators and professionals looking to understand emerging technologies.',
    },
    {
      category: 'Technology & Web3',
      icon: '💰',
      question: "My Friends Have Cryptocurrencies, But I Don't Get Why",
      answer:
        'Friends who talk about cryptocurrencies and Web3, and you want to understand the terminology.',
      description:
        'Get up to speed with cryptocurrency and blockchain technology through our beginner-friendly guides and expert insights.',
    },
    {
      category: 'AI Integration',
      icon: '🤖',
      question: "I Want to Use AI in My Work, But I Don't Know How",
      answer: 'You want to embrace the future of technology without fear.',
      description:
        'Learn practical AI applications for your industry with step-by-step tutorials and real-world case studies.',
    },
    {
      category: 'Platform Features',
      icon: '❓',
      question: 'How does Pathlink ensure job quality?',
      answer:
        'We have a rigorous vetting process for all companies and job listings. Our team manually reviews each posting to ensure it meets our quality standards and that companies are actively hiring.',
      description:
        'Our quality assurance process includes company verification, job posting validation, and ongoing monitoring to maintain high standards.',
    },
    {
      category: 'Getting Started',
      icon: '🚀',
      question: 'How quickly can I start applying for jobs?',
      answer:
        'You can start browsing and applying for jobs immediately after creating your profile. Most users find relevant opportunities within the first 24 hours.',
      description:
        'Our streamlined onboarding process gets you connected with opportunities faster than traditional job boards.',
    },
    {
      category: 'Support',
      icon: '💬',
      question: 'What kind of support do you offer job seekers?',
      answer:
        'We provide comprehensive support including resume reviews, interview preparation, career coaching, and direct communication with recruiters.',
      description:
        'Our dedicated support team and career experts are here to help you succeed at every step of your job search journey.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-white dark:bg-dark-bg">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Have more questions or Want to learn more about Pathlink?
            </motion.p>
            <motion.button
              className="btn-primary flex items-center space-x-2 mx-auto group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send A Message</span>
            </motion.button>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={containerVariants} className="max-w-4xl mx-auto">
            {faqData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-4">
                <motion.div
                  className="bg-gray-50 dark:bg-dark-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.button
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                    onClick={() => toggleItem(index)}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="text-sm font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      {openItems.has(index) ? (
                        <Minus className="w-6 h-6 text-primary-500" />
                      ) : (
                        <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                      )}
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openItems.has(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                              {item.answer}
                            </p>
                            {item.description && (
                              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 via-gold-50 to-cream-100 dark:from-primary-900/20 dark:to-cream-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our support team is here to help you succeed in your career journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.button>
                <motion.button
                  className="btn-primary flex items-center space-x-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
