"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Construction Website Developer",
    stack: "HTML5 / CSS3 / JavaScript",
    description:
      "Modern responsive construction company website with interactive galleries, contact forms, and service showcases.",
    image: "https://i.imghippo.com/files/FYWg1235tXQ.png",
    liveUrl: "https://mds-cement-work.vercel.app/",
    codeUrl: "https://github.com/mdsthamu/construction-site",
    color: "from-orange-400 to-red-500",
    alt: "Construction company website built with HTML5, CSS3, and JavaScript by MDS Thamu",
  },
  {
    id: 2,
    title: "E-commerce Website in React",
    stack: "React + MongoDB + Node.js",
    description:
      "Full-featured online store with shopping cart, payment integration, user authentication, and admin dashboard.",
    image: "https://i.imghippo.com/files/eSr7048Yck.png",
    liveUrl: "https://mds-ecommerce.vercel.app/",
    codeUrl: "https://github.com/mdsthamu/ecommerce-store",
    color: "from-green-400 to-blue-500",
    alt: "E-commerce website built with React and MongoDB by MDS Thamu",
  },
  {
    id: 3,
    title: "Portfolio Website React Developer",
    stack: "React + Next.js + Tailwind CSS",
    description:
      "Modern responsive portfolio website with smooth animations, interactive components, and optimized performance.",
    image: "https://i.imghippo.com/files/m7950rQ.png",
    liveUrl: "https://mds-portfoliocom.vercel.app/",
    codeUrl: "https://github.com/mdsthamu/portfolio-site",
    color: "from-purple-400 to-pink-500",
    alt: "Portfolio website built with React and Next.js by MDS Thamu",
  },
  {
    id: 4,
    title: "Contact Form with MongoDB",
    stack: "MERN Stack",
    description:
      "Advanced contact management system with real-time notifications, analytics, and database integration.",
    image: "https://i.imghippo.com/files/mpJu4241Ob.png",
    liveUrl: "https://contact-manager-rho-henna.vercel.app/",
    codeUrl: "https://github.com/mdsthamu/contact-form-app",
    color: "from-blue-400 to-indigo-500",
    alt: "Contact form application with MongoDB integration by MDS Thamu",
  },
  {
    id: 5,
    title: "Ever After Events",
    stack: "Next.js + Tailwind CSS",
    description:
      "Elegant event planning website featuring service highlights, contact sections, and smooth animations tailored for modern celebrations.",
    image: "https://i.imghippo.com/files/rB2504WFE.png",
    liveUrl: "https://ever-after-events.vercel.app/",
    codeUrl: "https://github.com/mdsthamu/todo-app",
    color: "from-teal-400 to-green-500",
    alt: "Dynamic task management application built with Node.js and MongoDB by MDS Thamu",
  },
  {
    id: 6,
    title: "Bright Future Tuition",
    stack: "Next.js + Tailwind CSS",  
    description:
      "Educational website designed for a tuition institute featuring responsive layout, course highlights, and modern UI.",
    image:
      "https://i.imghippo.com/files/mOi2999myY.jpeg",
    liveUrl: "https://bright-future-tuition.vercel.app/",
    codeUrl: "https://github.com/mdsthamu/weather-app",
    color: "from-cyan-400 to-blue-500",
    alt: "Weather application with API integration built by MDS Thamu",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">💼 MERN Stack Projects Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive showcase of my web development expertise across various technologies and industries. From
              e-commerce websites to dynamic web applications, explore my professional portfolio of modern web
              solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {project.stack}
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.description}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" /> 🌐 Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> 💻 Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* Technologies Used */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🛠️ Web Development Technologies Used</h2>
            <p className="text-xl text-gray-600">
              The modern tools and frameworks powering these professional web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Express.js",
              "JavaScript",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Git",
              "GitHub",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center font-medium text-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-xl"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">🚀 Ready to Start Your Web Development Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's bring your ideas to life with modern, scalable, and user-friendly web solutions. As a professional
              freelance web developer in India, I'm here to help your business succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                <a href="/contact" aria-label="Contact MDS Thamu for web development services">
                  Hire Web Developer Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full"
              >
                <a href="/resume" aria-label="Download MDS Thamu's web developer resume">
                  Download Developer CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
