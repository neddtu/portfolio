import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Code, Sparkles } from "lucide-react";
import { skills, education, activities } from "../data";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Sparkles className="inline w-4 h-4 mr-1" />
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white">
                <Code size={20} />
              </span>
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I am an accomplished React developer with{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  5+ years of experience
                </span>{" "}
                in software application design, analysis, and development. I have a
                strong background in working with JavaScript and TypeScript across
                various platforms including React Native, ReactJS, and NextJS.
              </p>
              <p>
                I pride myself on my high responsibility and willingness to learn
                new platforms and technologies. I also have experience with
                animations, backend technologies like NodeJS and NestJS, and
                deploying applications to Play Store and App Store.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Education Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Education</h4>
                </div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                  {education.school}
                </h5>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {education.major}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {education.period}
                </p>
              </motion.div>

              {/* Activity Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white">
                    <Users size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Activities</h4>
                </div>
                <h5 className="font-semibold text-gray-800 dark:text-gray-200">
                  {activities.organization}
                </h5>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                  {activities.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {activities.period}
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                <Sparkles size={20} />
              </span>
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all cursor-default relative overflow-hidden group"
                >
                  <span className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`}></span>
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
