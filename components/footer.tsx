"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Facebook, Phone, Heart } from "lucide-react"

const WhatsAppIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M16.004 3C9.38 3 4 8.38 4 15c0 2.647.9 5.088 2.418 7.057L5 29l7.158-1.89A11.98 11.98 0 0016.004 27C22.627 27 28 21.627 28 15S22.627 3 16.004 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.957 9.957 0 01-5.084-1.392l-.348-.218-4.062 1.072 1.085-3.915-.244-.374A9.958 9.958 0 016 15c0-5.514 4.486-10 10-10zm-1.685 6.725c-.295-.013-.599.093-.83.352-.45.522-1.1 1.452-1.097 2.72.003 1.268.801 2.496.911 2.663.109.168 1.905 3.333 4.781 4.287.436.151.775.238 1.056.305.443.104.844.09 1.16.055.503-.057 1.543-.641 1.764-1.257.22-.615.22-1.144.155-1.25-.065-.105-.236-.167-.495-.292s-1.482-.735-1.715-.822c-.233-.087-.4-.13-.567.128-.168.257-.642.818-.787.986-.145.167-.291.189-.541.063s-1.057-.393-2.01-1.257c-.743-.66-1.207-1.476-1.353-1.713-.145-.238-.014-.364.11-.49.112-.112.26-.292.39-.438.13-.147.173-.245.26-.41.087-.165.043-.308-.02-.438-.064-.13-.567-1.37-.774-1.876-.205-.506-.415-.523-.557-.531z" />
  </svg>
)

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/mds-thamu-938295323/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Thamu-MDS", label: "GitHub" },
  { icon: WhatsAppIcon, href: "https://wa.me/918300945248", label: "WhatsApp" },
  { icon: Instagram, href: "https://instagram.com/mdsthamu", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/mdsthamu", label: "Facebook" },
]



export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              )
            })}
          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg font-medium">
              © 2025 MDS Thamu | Built with <Heart className="inline h-5 w-5 text-red-400 mx-1" />
              using React & Node
            </p>
            <p className="text-blue-200 text-sm">Crafting digital experiences that inspire and innovate</p>
          </motion.div>

          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-blue-700">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-blue-300 transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="hover:text-blue-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
