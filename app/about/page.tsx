"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Users, MessageCircle, Lightbulb, Target } from "lucide-react"

const skills = [
  { name: "React.js Frontend Development", level: 95, icon: Globe },
  { name: "Node.js Backend Development", level: 90, icon: Database },
  { name: "Mobile App Development", level: 80, icon: Smartphone },
  { name: "Full Stack Integration", level: 92, icon: Code },
]

const softSkills = [
  {
    name: "Team Collaboration",
    icon: Users,
    description: "Collaborative problem-solving and effective communication with development teams",
  },
  {
    name: "Client Communication",
    icon: MessageCircle,
    description: "Clear technical communication with stakeholders and project managers",
  },
  { name: "Problem-solving", icon: Lightbulb, description: "Creative solutions to complex web development challenges" },
  {
    name: "Project Leadership",
    icon: Target,
    description: "Leading development teams and mentoring junior web developers",
  },
]

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Framer Motion",
  "REST APIs",
  "GraphQL",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              👨‍💻 About MDS Thamu - Professional Full Stack Web Developer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate full-stack web developer with expertise in creating innovative digital solutions using modern
              web technologies. Specializing in MERN stack development for businesses across India and globally.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image and Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Enhanced background with multiple layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full animate-spin-slow opacity-30"></div>
                    <div className="absolute inset-2 bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-500 rounded-full animate-pulse opacity-40"></div>
                    <div className="absolute inset-4 bg-gradient-to-bl from-blue-200 via-blue-300 to-blue-400 rounded-full opacity-20"></div>

                    {/* Main profile image with enhanced styling */}
                    <div className="absolute inset-6 bg-white rounded-full overflow-hidden shadow-2xl ring-8 ring-white/70">
                      <div className="relative w-full h-full">
                        <img
                          src="/images/mds-thamu-profile.jpg"
                          alt="MDS Thamu - Professional Full Stack Web Developer specializing in MERN Stack development, React.js frontend, Node.js backend, and MongoDB database integration"
                          className="w-full h-full object-cover filter brightness-110 contrast-110 saturate-105"
                        />
                        {/* Professional overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/15 via-transparent to-blue-500/5"></div>
                        {/* Subtle vignette effect */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/10"></div>
                      </div>
                    </div>

                    {/* Enhanced decorative elements with better positioning */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-xl ring-4 ring-white">
                      <span className="text-2xl">💡</span>
                    </div>

                    <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center animate-pulse shadow-xl ring-4 ring-white">
                      <span className="text-xl">🚀</span>
                    </div>

                    <div className="absolute top-4 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce delay-500 shadow-xl ring-4 ring-white">
                      <span className="text-lg">⭐</span>
                    </div>

                    <div className="absolute bottom-8 -right-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse delay-1000 shadow-xl ring-2 ring-white">
                      <span className="text-sm">🎯</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">My Web Development Journey</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hello! I'm MDS Thamu, a passionate full-stack web developer with over 3 years of experience in
                  creating modern, responsive, and user-friendly web applications. My journey in programming started
                  with curiosity and has evolved into a deep passion for solving complex problems through innovative web
                  solutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and love working on projects
                  that challenge me to learn new technologies and push the boundaries of what's possible on the web. As
                  a freelance web developer in India, I've helped businesses create powerful digital presences through
                  custom web applications, e-commerce solutions, and responsive website designs.
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">🎯 Technical Web Development Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-gray-700">{skill.name}</span>
                          </div>
                          <span className="text-blue-600 font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🤝 Professional Skills for Web Development</h2>
            <p className="text-xl text-gray-600">
              Essential soft skills that make me an effective freelance web developer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{skill.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{skill.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🛠️ Web Development Tools & Technologies</h2>
            <p className="text-xl text-gray-600">
              My comprehensive technical arsenal for modern web application development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 text-center font-medium text-blue-800 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Hire a Professional Web Developer?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's create something amazing together. I'm always excited to take on new web development challenges and
              help businesses grow online!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contact MDS Thamu for web development services"
              >
                Hire Web Developer Now
              </motion.a>
              <motion.a
                href="/projects"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View MDS Thamu's web development portfolio"
              >
                View My Web Development Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
