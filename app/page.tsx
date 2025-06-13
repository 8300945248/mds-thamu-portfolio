"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download, Rocket, Code, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = '/Thamu-CV.pdf'
    link.download = 'Thamu-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Optional: Track download event
    console.log('CV downloaded')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative w-56 h-56 mx-auto mb-8">
              {/* Animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500 rounded-full animate-pulse"></div>

              {/* Main image container */}
              <div className="absolute inset-4 bg-white rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
                <div className="relative w-full h-full">
                  <img
                    src="/images/mds-thamu-profile.jpg"
                    alt="MDS Thamu - Professional Full Stack Web Developer"
                    className="w-full h-full object-cover filter brightness-110 contrast-105 saturate-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center animate-bounce shadow-lg ring-2 ring-white">
                <span className="text-2xl">👋</span>
              </div>

              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse shadow-lg ring-2 ring-white">
                <span className="text-xl">💻</span>
              </div>

              <div className="absolute top-6 -left-4 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-bounce delay-700 shadow-lg ring-2 ring-white">
                <span className="text-lg">⚡</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              👋 Hi, I'm <span className="text-blue-600">MDS Thamu</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-4xl font-semibold text-blue-800 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              💼 Full Stack Web Developer | MERN Stack Specialist
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              📢 Professional web developer specializing in modern, responsive web applications using
              React.js, Node.js, and MongoDB. Building performance-driven websites that bring your ideas to life.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleDownloadCV}
              aria-label="Download MDS Thamu's CV"
            >
              <Download className="mr-2 h-5 w-5" />
              ⬇️ Download Developer CV
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/projects" aria-label="View MERN Stack Projects">
                <Rocket className="mr-2 h-5 w-5" />🚀 View Projects
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          onClick={() => scrollToSection("about-preview")}
          aria-label="Scroll to learn more"
        >
          <ChevronDown className="h-8 w-8 text-blue-600" />
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-200 z-50">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
          ></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">👨‍💻 About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate full-stack developer with expertise in modern web technologies and creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">🎯 Core Skills</h3>
                <div className="space-y-4">
                  {[
                    { skill: "React.js & Next.js", level: 90 },
                    { skill: "Node.js & Express", level: 85 },
                    { skill: "MongoDB & APIs", level: 80 },
                    { skill: "JavaScript/TypeScript", level: 95 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{item.skill}</span>
                        <span className="text-blue-600 font-semibold">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">🛠️ Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB", "Git", "Tailwind CSS"].map(
                    (tech, index) => (
                      <motion.div
                        key={index}
                        className="bg-blue-50 rounded-lg p-3 text-center font-medium text-blue-800"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.div>
                    ),
                  )}
                </div>
              </div>

              <div className="text-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                  <Link href="/about" aria-label="Learn more about my experience">
                    Learn More About Me
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">💼 Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Professional projects showcasing modern web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "E-commerce Platform",
                tech: "React + MongoDB",
                desc: "Full-featured online store with cart and payment integration",
              },
              {
                title: "Portfolio Website",
                tech: "Next.js + Tailwind",
                desc: "Modern responsive portfolio with animations",
              },
              {
                title: "Task Management App",
                tech: "MERN Stack",
                desc: "Collaborative task management application",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{project.tech}</p>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              <Link href="/projects" aria-label="View all projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">📬 Let's Connect</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to build your next web application? Let's discuss your project!
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <a
                href="mailto:mdsthamu@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition"
              >
                <Mail className="h-6 w-6 text-blue-600" />
                <span>mdsthamu@gmail.com</span>
              </a>

              <a
                href="tel:+918300945248"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition"
              >
                <Phone className="h-6 w-6 text-blue-600" />
                <span>+91 83009 45248</span>
              </a>

              <a
                href="https://www.google.com/maps?q=Avajipattai,+Thiruvallur,+Tamil+Nadu+601103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-700 transition"
              >
                <MapPin className="h-6 w-6 text-blue-600" />
                <span>Avajipattai, Tamil Nadu</span>
              </a>
            </div>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              <Link href="/contact" aria-label="Contact me">
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Floating CV Download Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button
          onClick={handleDownloadCV}
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 px-6 py-3 text-lg"
          aria-label="Download CV"
        >
          <Download className="h-5 w-5 mr-2" />
          Download CV
        </button>
      </motion.div>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <motion.button
          className="fixed bottom-8 left-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <ChevronDown className="h-5 w-5 rotate-180" />
        </motion.button>
      )}
    </div>
  )
}