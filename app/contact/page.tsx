"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/mdsthamu", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Github, href: "https://github.com/mdsthamu", label: "GitHub", color: "hover:text-gray-800" },
  { icon: Twitter, href: "https://twitter.com/mdsthamu", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Instagram, href: "https://instagram.com/mdsthamu", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Facebook, href: "https://facebook.com/mdsthamu", label: "Facebook", color: "hover:text-blue-700" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // For now, we'll simulate the email sending process
      // Replace this with actual EmailJS implementation once you have valid credentials

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For demonstration, we'll always show success
      // In production, replace this with actual EmailJS call:

      const emailjs = (await import('@emailjs/browser')).default;

      const result = await emailjs.send(
        'service_qalqwwc',     // Replace with your EmailJS service ID
        'template_t4plopf',    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mdsthamu@gmail.com',
        },
        'IAgj7Qfs11OycWqgY'      // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setFormStatus("success")
        // ... success handling
      }


      // Temporary success simulation
      setFormStatus("success")
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setFormStatus("error")
      toast({
        title: "Failed to send message",
        description:
          "There was an error sending your message. Please try again later or contact me directly at mdsthamu@gmail.com.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">📬 Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">Let's Connect</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                  project in mind, need technical consultation, or just want to say hello, I'd love to hear from you!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <a
                        href="mailto:mdsthamu@gmail.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        mdsthamu@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <a href="tel:+91 8300945248" className="text-gray-600 hover:text-blue-600 transition-colors">
                        +91 83009 45248
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location</h3>
                      <a href="https://www.google.com/maps?q=Avajipattai,+Thiruvallur,+Tamil+Nadu+601103"
                        target="_blank"
                        rel="noopener noreferrer" className="text-gray-600">Avajipattai thiruvallur-601103 Tamilnadu</a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={social.label}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-blue-800 mb-6">Send Message</h2>

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Your message has been sent successfully! I'll get back to you soon.</p>
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <div>
                      <p>There was an error sending your message.</p>
                      <p className="text-sm mt-1">
                        Please contact me directly at{" "}
                        <a href="mailto:mdsthamu@gmail.com" className="underline hover:text-red-800">
                          mdsthamu@gmail.com
                        </a>
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>

                {/* Alternative Contact Methods */}
                <div className="mt-8 pt-6 border-t border-blue-100">
                  <p className="text-sm text-gray-600 text-center mb-4">Prefer to contact me directly?</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      <a href="mailto:mdsthamu@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Me
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      <a href="tel:+91 8300945248">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Me
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What's your typical response time?",
                answer:
                  "I usually respond to emails within 24 hours during weekdays. For urgent matters, feel free to call me directly.",
              },
              {
                question: "What types of projects do you work on?",
                answer:
                  "I specialize in full-stack web applications, e-commerce sites, portfolio websites, and custom web solutions using the MERN stack.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "I work with clients worldwide and am comfortable with different time zones and communication preferences.",
              },
              {
                question: "What's your development process?",
                answer:
                  "I follow an agile approach with regular updates, milestone reviews, and collaborative feedback throughout the project lifecycle.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's turn your vision into reality. I'm here to help you build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold"
              >
                <a href="mailto:mdsthamu@gmail.com">Send Email</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold"
              >
                <a href="tel:+91 8300945248">Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
