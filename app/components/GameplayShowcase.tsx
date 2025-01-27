"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const screenshots = ["/ss2.png", "/ss3.png", "/ss4.png", "/ss5.png"]

export default function GameplayShowcase() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">Stunning Visuals & Gameplay</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience Pakistan's most beautiful locations in stunning detail with our state-of-the-art graphics engine.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#15233b] to-[#1e3354] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Image
                src={src || "/placeholder.svg"}
                alt={`Gameplay screenshot ${index + 1}`}
                width={400}
                height={300}
                className="relative rounded-lg w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#15233b] hover:bg-[#1e3354] text-white px-8 py-6 text-lg font-bold rounded-full glow"
          >
            Watch Full Gameplay Video
          </Button>
        </div>
      </div>
    </section>
  )
}

