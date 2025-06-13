"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Info, X, SendHorizonal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SimpleChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi there! I'm your virtual assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { from: "user", text: input.trim() }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    setTimeout(() => {
      const botReply = {
        from: "bot",
        text: `🤖 You said: "${userMessage.text}". I'm still learning to help better!`,
      }
      setMessages((prev) => [...prev, botReply])
    }, 800)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-20 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl z-50"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Open ChatBot"
      >
        <Info className="h-5 w-5" />
      </motion.button>

      {/* ChatBot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-xl p-4 w-full sm:max-w-md shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-blue-800">💬 ChatBot</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Message Window */}
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: msg.from === "user" ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`px-3 py-2 rounded-lg text-sm w-fit max-w-[80%] ${
                      msg.from === "bot"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-blue-600 text-white ml-auto"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="mt-4 flex items-center gap-2">
                <input
                  className="flex-1 border rounded px-3 py-2 text-sm"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <Button size="sm" onClick={handleSend}>
                  <SendHorizonal className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
