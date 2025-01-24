"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Story() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="prose prose-lg prose-invert">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 glow-text">Our Story</h2>
            <div className="space-y-6 p-8 rounded-lg glassmorphism hover:shadow-2xl hover:shadow-[#15233b]/50 transition-all duration-300">
              <p className="text-lg font-medium text-gray-300">
                It began with a simple thought. One day, our team realized that all the racing games we played felt
                foreign. The cars, roads, and cities were fun but didn't feel like home. We then thought why isn't there
                a game that feels truly Pakistani? Where we can race on roads we know, with cars we see every day?
              </p>
              <h3 className="text-2xl font-bold text-[#4CAF50] glow-text">The idea:</h3>
              <p className="text-lg font-medium text-gray-300">
                We decided to create a racing game that highlights Pakistan's culture. From the busy streets of Karachi
                to the beautiful highways of the North, we wanted players to feel connected to their surroundings.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] glassmorphism rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#15233b]/50 transition-all duration-300"
          >
            <Image src="/ss1.png" alt="Raftar Game Screenshot" layout="fill" objectFit="cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

