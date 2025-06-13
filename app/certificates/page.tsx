"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Award, Calendar, Building, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    id: 1,
    title: "Smart India Hackathon Participation",
    issuer: "Government of India",
    year: "2024",
    image: "https://i.imghippo.com/files/yYs1371WY.jpg",
    description: "Participated in national-level hackathon focusing on innovative solutions for social problems.",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    issuer: "Tech Academy",
    year: "2023",
    image: "https://i.imghippo.com/files/uLP1605FD.jpg",
    description: "Comprehensive full-stack web development program covering modern frameworks and best practices.",
  },
  {
    id: 3,
    title: "React Crash Course",
    issuer: "React Institute",
    year: "2023",
    image: "https://i.imghippo.com/files/egu4594ngo.jpg",
    description: "Advanced React concepts including hooks, context, and performance optimization techniques.",
  },
  {
    id: 4,
    title: "Node.js Mastery",
    issuer: "Backend Academy",
    year: "2023",
    image: "https://i.imghippo.com/files/OIbJ9093sc.jpg",
    description: "Complete Node.js development including Express.js, APIs, and database integration.",
  },
  {
    id: 5,
    title: "MongoDB Basics",
    issuer: "Database Institute",
    year: "2022",
    image: "https://i.imghippo.com/files/BGs8990jxw.jpg",
    description: "NoSQL database fundamentals, schema design, and advanced querying techniques.",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    issuer: "Design Academy",
    year: "2022",
    image: "https://i.imghippo.com/files/yYs1371WY.jpg",
    description: "Modern CSS techniques, Flexbox, Grid, and mobile-first responsive design principles.",
  },
  {
    id: 7,
    title: "Git & GitHub Essentials",
    issuer: "Version Control Institute",
    year: "2022",
    image: "https://i.imghippo.com/files/uLP1605FD.jpg",
    description: "Version control best practices, collaborative development, and advanced Git workflows.",
  },
  {
    id: 8,
    title: "JavaScript Algorithms",
    issuer: "Algorithm Academy",
    year: "2022",
    image: "https://i.imghippo.com/files/egu4594ngo.jpg",
    description: "Data structures, algorithms, and problem-solving techniques using JavaScript.",
  },
  {
    id: 9,
    title: "CSS Flexbox & Grid",
    issuer: "Layout Masters",
    year: "2021",
    image: "https://i.imghippo.com/files/OIbJ9093sc.jpg",
    description: "Advanced CSS layout techniques for creating complex, responsive web layouts.",
  },
  {
    id: 10,
    title: "Google Cloud Fundamentals",
    issuer: "Google Cloud",
    year: "2021",
    image: "https://i.imghippo.com/files/BGs8990jxw.jpg",
    description: "Cloud computing basics, deployment strategies, and Google Cloud Platform services.",
  },
]

export default function CertificatesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")

  useEffect(() => {
    if (!isAutoPlaying || isModalOpen) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isModalOpen])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl)
    setIsModalOpen(true)
    setIsAutoPlaying(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Modal for zoomed certificate */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-blue-300 transition-colors"
                aria-label="Close certificate view"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="overflow-auto max-h-[80vh]">
                <img
                  src={modalImage}
                  alt="Zoomed certificate"
                  className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <Button
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">🎓 Certifications</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey of continuous learning and professional development
            </p>
          </motion.div>

          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full grid md:grid-cols-2 gap-8 p-8">
                    {/* Background Image with overlay */}
                    <div 
                      className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl cursor-pointer"
                      onClick={() => openModal(certificates[currentIndex].image)}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${certificates[currentIndex].image})` }}
                      />
                      <div className="absolute inset-0 bg-black/50 z-0" />
                      <div className="relative z-10 text-center text-white p-6">
                        <Award className="h-16 w-16 mx-auto mb-4 text-white drop-shadow-lg" />
                        <h3 className="text-2xl font-bold mb-2">{certificates[currentIndex].title}</h3>
                        <p className="text-lg opacity-90">{certificates[currentIndex].issuer}</p>
                      </div>
                      <div className="absolute bottom-4 right-4 z-20">
                        <Button
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            openModal(certificates[currentIndex].image)
                          }}
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{certificates[currentIndex].title}</h2>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-blue-600">
                            <Building className="h-5 w-5" />
                            <span className="font-medium">{certificates[currentIndex].issuer}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-5 w-5" />
                            <span>{certificates[currentIndex].year}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{certificates[currentIndex].description}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        Certificate {currentIndex + 1} of {certificates.length}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Controls */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Button onClick={goToPrevious} className="w-12 h-12 rounded-full bg-white/80">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <Button onClick={goToNext} className="w-12 h-12 rounded-full bg-white/80">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-blue-600 scale-125" : "bg-blue-200 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>
              <div className="absolute top-4 right-4">
                <Button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="bg-white/80 border-blue-200"
                  variant="outline"
                  size="sm"
                >
                  {isAutoPlaying ? "Pause" : "Play"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Grid */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📜 All Certifications</h2>
            <p className="text-xl text-gray-600">Complete overview of my professional achievements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  goToSlide(index)
                  document.getElementById("carousel")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <div 
                  className="relative w-full h-32 rounded-lg overflow-hidden mb-4 group"
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(cert.image)
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cert.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <Award className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <Building className="h-4 w-4" />
                  <span className="text-sm font-medium">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{cert.year}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 shadow-xl"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">🚀 Continuous Learning Journey</h2>
            <p className="text-xl text-gray-600 mb-8">
              These certifications represent my commitment to staying current with the latest technologies and best
              practices in web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                <a href="/projects">View My Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full"
              >
                <a href="/contact">Let's Connect</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}