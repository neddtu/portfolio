import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-4">
                        <Sparkles className="inline w-4 h-4 mr-1" />
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <motion.a 
                                href={`mailto:${personalInfo.email}`}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4 group cursor-pointer"
                            >
                                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                                </div>
                            </motion.a>

                            <motion.a 
                                href={`tel:${personalInfo.phone}`}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4 group cursor-pointer"
                            >
                                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                                </div>
                            </motion.a>

                            <motion.div 
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4 group"
                            >
                                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.address}</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-12">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <motion.a 
                                    href={personalInfo.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    <Github size={24} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
