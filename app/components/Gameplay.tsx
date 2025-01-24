"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const screenshots = ["/screenshot1.jpg", "/screenshot2.jpg", "/screenshot3.jpg", "/screenshot4.jpg", "/screenshot5.jpg"]

export default function Gameplay() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Feel the Speed, Own the Streets</h2>
        <div className="mb-12">
          <video className="w-full max-w-4xl mx-auto rounded-lg shadow-lg" controls poster="/gameplay-poster.jpg">
            <source src="/gameplay-teaser.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Game Screenshots</h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {screenshots.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Gameplay screenshot ${index + 1}`}
                className="w-64 h-36 object-cover rounded-lg shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentScreenshot(index)}
              />
            ))}
          </div>
          <div className="mt-8">
            <img
              src={screenshots[currentScreenshot] || "/placeholder.svg"}
              alt={`Featured gameplay screenshot`}
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="text-center">
          <Button className="bg-neon-green hover:bg-neon-green/80 text-black font-bold">
            Download Raftar and start your adventure today
          </Button>
        </div>
      </div>
    </section>
  )
}

