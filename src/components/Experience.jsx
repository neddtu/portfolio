import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
            <Briefcase className="inline w-4 h-4 mr-1" />
            Career Path
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300 dark:from-blue-700 dark:to-cyan-700"></div>
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-0 w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.01, x: 5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 ml-6 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                      <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full font-medium`}>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors" size={24} />
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-blue-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-cyan-500" />
                    {exp.location}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <span className={`w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
