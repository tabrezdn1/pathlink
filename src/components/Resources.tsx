import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, ArrowRight, Clock } from 'lucide-react';

interface VideoResource {
  id: number;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  readTime: string;
  image: string;
}

const Resources: React.FC = () => {
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const videoResources: VideoResource[] = [
    {
      id: 1,
      title: 'The Top Skills Employers Are Looking For in 2025',
      duration: '1:45',
      description:
        "The job market evolves constantly, and knowing which skills are in demand can give you a competitive edge. Discover the top skills employers are seeking in 2025 and learn how to feature them on your CV to showcase your readiness for today's workplace.",
      thumbnail:
        'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30',
    },
    {
      id: 2,
      title: 'Overcoming Employment Gaps on Your CV',
      duration: '0:47',
      description:
        'Gaps in employment can raise questions, but with the right approach, they can tell a story of growth and resilience. Learn how to address employment gaps with confidence, turning potential red flags into strengths that resonate with hiring managers.',
      thumbnail:
        'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30',
    },
    {
      id: 3,
      title: 'Mastering Remote Work Interviews',
      duration: '2:15',
      description:
        'Remote work has transformed the interview process. Learn essential tips for video interviews, technical setup, and how to build rapport with interviewers through a screen.',
      thumbnail:
        'bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30',
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Mastering Job Interviews: Strategies for Success',
      description:
        "Job interviews are a critical part of the hiring process. Whether you're applying for your first job or your next career move, performing well in an interview can make all the difference. Preparation is key, and in this article, we'll walk you through proven strategies to ensure that you stand out from the competition and leave a lasting impression on your potential employer.",
      readTime: '5 min read',
      image:
        'bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30',
    },
    {
      id: 2,
      title: 'The Power of Networking: How Building Connections Can Land You Your Dream Job',
      description:
        "In today's competitive job market, networking has become more essential than ever. Whether you're looking to switch industries, land your dream role, or simply gain industry insights, the power of a strong professional network cannot be overstated. This article explores the importance of networking and how you can leverage it to boost your career.",
      readTime: '7 min read',
      image:
        'bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/30 dark:to-teal-800/30',
    },
    {
      id: 3,
      title: 'How to Tailor Your Resume for the Job You Want',
      description:
        "Your resume is your first impression to a potential employer, so it's important to make it stand out. In a competitive job market, a one-size-fits-all resume won't cut it. To increase your chances of landing your dream job, you need to tailor your resume specifically for the role you're applying for. Here's a step-by-step guide on how to do just that.",
      readTime: '6 min read',
      image:
        'bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30',
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-surface">
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
              Curated Resources For Career Growth
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enhance your career journey with our collection of expert insights, tutorials, and
              guides.
            </motion.p>
            <motion.button
              className="btn-outline flex items-center space-x-2 mx-auto group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See All Resources</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>

          {/* Video Resources */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Play className="w-6 h-6 text-primary-500" />
                <span>Video Resources</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoResources.map((video, _index) => (
                <motion.div
                  key={video.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white dark:bg-dark-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Video Thumbnail */}
                    <div
                      className={`relative h-48 ${video.thumbnail} flex items-center justify-center`}
                    >
                      <motion.div
                        className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-8 h-8 text-primary-500 ml-1" />
                      </motion.div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                        {video.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-primary-500" />
                <span>Career Notes</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, _index) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white dark:bg-dark-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Blog Image */}
                    <div className={`relative h-48 ${post.image} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
                      <div className="relative text-center">
                        <BookOpen className="w-12 h-12 text-white/80 mx-auto mb-2" />
                        <span className="text-white/90 font-medium">Blog Image</span>
                      </div>

                      {/* Read Time Badge */}
                      <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm font-medium flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-200">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4 flex-1">
                        {post.description}
                      </p>

                      {/* Read More */}
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-primary-500 font-medium group-hover:text-primary-600 transition-colors duration-200">
                            Read More
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
