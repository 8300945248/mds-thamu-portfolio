"use client"

import { motion } from "framer-motion"
import { Download, Eye, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Thamu-CV.pdf"  // Make sure this file is in your /public folder
    link.download = "Thamu-CV.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">📄 My Resume</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Download my complete resume or view it online to learn more about my experience and qualifications
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document.getElementById("resume-preview")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Eye className="mr-2 h-5 w-5" />
                View Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Preview Section */}
      <section id="resume-preview" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header Info */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
              <h1 className="text-4xl font-bold mb-2">Thamu MDS</h1>
              <h2 className="text-xl mb-4">Full Stack Web Developer | MERN Stack Enthusiast</h2>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>mdsthamu@gmail.com</span></div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>+91-8300945248</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Chennai, India</span></div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2"><Globe className="h-4 w-4" /><span>portfolio.mdsthamu.com</span></div>
                <div className="flex items-center gap-2"><Github className="h-4 w-4" /><span>github.com/thamumds</span></div>
                <div className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><span>linkedin.com/in/thamumds</span></div>
              </div>
            </div>

            {/* Resume Details */}
            <div className="p-8 space-y-8 text-gray-800">
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Professional Summary</h3>
                <p>
                  Passionate and self-driven Full Stack Web Developer with hands-on experience in building real-world applications. Proficient in the MERN stack, focused on responsive design, performance, and scalable web solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Education</h3>
                <p><strong>B.E. in Computer Science and Engineering</strong> (2022–2026), Gojan School of Business and Technology – CGPA: 8.6</p>
                <p><strong>HSC (Computer Science)</strong> (2022), Government Higher Secondary School – Score: 371/600</p>
                <p><strong>SSLC</strong> (2020), Government High School – Score: 317/500</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Projects</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Wedding Planner Website:</strong> Vendor listings, gallery, event booking. <em>React, Node.js, MongoDB</em></li>
                  <li><strong>Online Tuition Platform:</strong> Enrollment, course reviews, student dashboard. <em>MERN Stack</em></li>
                  <li><strong>Portfolio Website:</strong> Personal site with resume, links, animations. <em>Next.js, Tailwind CSS</em></li>
                  <li><strong>Construction Company Website:</strong> Portfolio, contact form, testimonials. <em>HTML, CSS, JS, Node.js</em></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Certifications</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Full Stack Developer – CSC Academy (2024)</li>
                  <li>Java Masterclass – CSC Academy (2023)</li>
                  <li>Responsive Web Design – CSC Academy (2023)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Achievements</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Participated – Smart India Hackathon (2024)</li>
                  <li>Participated – National Web Hackathon (2023)</li>
                  <li>Organizer – TechMania’24 National Symposium</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-200 pb-2">Leadership & Activities</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>NSS Volunteer – Coordinated multiple social and campus events</li>
                  <li>Member – Google Developer Student Clubs (GDSC)</li>
                  <li>Organizer – College Symposium Events</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Final Download Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleDownload}
            >
              <Download className="mr-3 h-6 w-6" />
              Download Complete Resume (PDF)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
