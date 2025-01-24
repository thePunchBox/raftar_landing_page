"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"

export default function CTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-[#1e3354]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-white"
        >
          Be Part of the Raftar Revolution!
        </motion.h2>
        <p className="text-xl mb-8 text-white">
          Join our waitlist to get exclusive updates and early access opportunities.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-64 mr-2"
            />
            <Button type="submit" className="bg-[#074271] hover:bg-[#0b1928] text-white">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </form>
          <Button variant="outline" className="w-full md:w-auto text-white border-white hover:bg-[#074271]">
            <MessageCircle className="mr-2 h-4 w-4" /> Join Our Community
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto h-64 bg-[#0b1928] rounded-lg shadow-lg"
        >
          {/* 3D car model or environment would go here */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-xl text-white">Raftar Concept Art Coming Soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

