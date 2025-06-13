"use client"

import { useEffect } from "react"
import emailjs from "@emailjs/browser"

// This component initializes EmailJS with your public key
// It should be imported in your layout.tsx or a parent component

export default function EmailJsSetup() {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("IAgj7Qfs11OycWqgY") // Replace with your actual EmailJS public key
  }, [])

  return null
}
