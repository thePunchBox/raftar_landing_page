"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Ahmed",
    image: "/testimonials/ahmed.jpg",
    text: "Raftar is the perfect blend of culture and adrenaline!",
  },
  {
    name: "Fatima",
    image: "/testimonials/fatima.jpg",
    text: "I've never felt more connected to my roots while racing. Amazing game!",
  },
  {
    name: "Imran",
    image: "/testimonials/imran.jpg",
    text: "The attention to detail in recreating Pakistani cities is mind-blowing.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">What Racers Are Saying</h2>
        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <p className="text-xl mb-2">"{testimonials[current].text}"</p>
              <p className="text-neon-pink">- {testimonials[current].name}, Beta Tester</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-12">
          <p className="text-2xl font-bold text-neon-green">10,000+ Beta Testers</p>
          <p className="text-xl">4.9/5 Rating</p>
        </div>
      </div>
    </section>
  )
}

