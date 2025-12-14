import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { Github, Heart } from 'lucide-react';
import { personalInfo } from './data';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Enhanced Footer */}
        <footer className="relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-800 dark:text-white py-12 transition-colors duration-300 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo & Copyright */}
              <div className="text-center md:text-left">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Portfolio</a>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                  © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
              </div>
              
              {/* Built with */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <span>Built with</span>
                <Heart size={16} className="text-red-500 fill-red-500" />
                <span>using</span>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-cyan-600 dark:text-cyan-400 font-mono text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-blue-600 dark:text-blue-400 font-mono text-xs">TailwindCSS</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <Github size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
