import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Brain, 
  Database, 
  Server,
  Sparkles,
  ChevronDown,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import profileImage from '@/assets/f882b7fb2e5d074985475ab76df265f3265fc9e6.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const aiProjects = [
    {
      title: 'Language Translation App',
      description: 'AI-powered real-time language translation application supporting multiple languages with neural machine translation.',
      tech: ['Python', 'TensorFlow', 'NLP', 'React'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Chatbot',
      description: 'Intelligent conversational AI chatbot with natural language understanding and context-aware responses.',
      tech: ['Python', 'Machine Learning', 'NLP', 'FastAPI'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Music Generator',
      description: 'Deep learning model that generates original music compositions based on user preferences and genre selection.',
      tech: ['Python', 'TensorFlow', 'MIDI', 'Neural Networks'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const fullStackProjects = [
    {
      title: 'Social Media Platform',
      description: 'Full-featured social networking platform with real-time messaging, posts, likes, and user profiles.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Clothe Branding',
      description: 'E-commerce platform for clothing brand with product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Express', 'PostgreSQL', 'Stripe'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Ecommerce',
      description: 'Comprehensive online shopping platform with product management, order tracking, and analytics dashboard.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Redux'],
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Toyland',
      description: 'Interactive toy store platform with product reviews, wishlist functionality, and secure checkout process.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Stripe'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const skills = [
    { name: 'Python', icon: Code2, level: 90 },
    { name: 'Machine Learning', icon: Brain, level: 85 },
    { name: 'Data Analysis', icon: Database, level: 80 },
    { name: 'C++', icon: Code2, level: 75 },
    { name: 'OOP', icon: Server, level: 85 },
    { name: 'Web Development', icon: Code2, level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Abdul Wahab
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-700/50"
          >
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 ${
                    activeSection === section 
                      ? 'text-cyan-400' 
                      : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Aspiring AI Engineer</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Abdul Wahab
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Machine Learning & Data Science Enthusiast
              </motion.p>

              <motion.p 
                className="text-lg text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Python, ML Basics, C++ | Software Engineering Student
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                >
                  Contact Me
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://github.com/Wahab440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://www.linkedin.com/in/abdul-wahab-846a4233a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="mailto:aw9165184@gmail.com"
                  className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-50" />
                <img 
                  src={profileImage} 
                  alt="Abdul Wahab" 
                  className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a Software Engineering student at <span className="text-cyan-400 font-semibold">Bahria University Islamabad</span> with a growing focus on Artificial Intelligence and Machine Learning.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I have a strong foundation in programming (Python, C++, OOP) and hands-on experience with web technologies, and I am now transitioning toward AI-driven problem solving.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I enjoy building projects that combine software engineering principles with intelligent systems, and I am currently seeking AI / Machine Learning internships or entry-level roles where I can apply my skills, learn from industry professionals, and grow as an AI engineer.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Currently Learning & Working On:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                      <span className="text-gray-300">Machine Learning fundamentals (supervised & unsupervised learning)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                      <span className="text-gray-300">Data analysis & preprocessing using Python</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                      <span className="text-gray-300">Problem solving using algorithms and OOP concepts</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
                  <p className="text-gray-300">Islamabad, Pakistan</p>
                  <h3 className="text-xl font-semibold mt-4 mb-2">🎓 Education</h3>
                  <p className="text-gray-300">Bahria University</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Top <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div 
                      className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2 text-right">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 text-lg">Showcasing my work in AI and Full Stack Development</p>

            {/* AI Projects */}
            <div className="mb-16">
              <motion.h3 
                className="text-3xl font-bold mb-8 flex items-center gap-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Brain className="w-8 h-8 text-cyan-400" />
                <span>AI Projects</span>
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-transparent transition-all"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="p-6 relative z-10">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                        <Brain className="w-6 h-6" />
                      </div>
                      
                      <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                      <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Full Stack Projects */}
            <div>
              <motion.h3 
                className="text-3xl font-bold mb-8 flex items-center gap-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Code2 className="w-8 h-8 text-cyan-400" />
                <span>Full Stack Projects</span>
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-8">
                {fullStackProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-transparent transition-all"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="p-6 relative z-10">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                        <Code2 className="w-6 h-6" />
                      </div>
                      
                      <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                      <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Open to AI Internships | ML Intern | Junior AI Engineer roles
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="mailto:aw9165184@gmail.com"
                  className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors"
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
                    <Mail className="w-8 h-8" />
                  </div>
                  <span className="font-semibold">Email</span>
                  <span className="text-sm text-gray-400">aw9165184@gmail.com</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://www.linkedin.com/in/abdul-wahab-846a4233a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors"
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
                    <Linkedin className="w-8 h-8" />
                  </div>
                  <span className="font-semibold">LinkedIn</span>
                  <span className="text-sm text-gray-400">Connect with me</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://github.com/Wahab440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors"
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
                    <Github className="w-8 h-8" />
                  </div>
                  <span className="font-semibold">GitHub</span>
                  <span className="text-sm text-gray-400">View my work</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900/50 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© 2026 Abdul Wahab. All rights reserved.</p>
            <p className="mt-2">Aspiring AI Engineer | Machine Learning & Data Science Enthusiast</p>
          </div>
        </div>
      </footer>
    </div>
  );
}