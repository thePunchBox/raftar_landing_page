"use client"

import { motion } from "framer-motion"
import { Car, Palette, Map, Gamepad, Mountain } from "lucide-react"
import type React from "react"

interface Feature {
  title: string
  description: string
  icon: React.ElementType
}

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#1e3354] hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <feature.icon className="w-12 h-12 text-[#15233b] mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-[#15233b]">{feature.title}</h3>
    <p className="text-[#1e3354]">{feature.description}</p>
  </motion.div>
)

const features: Feature[] = [
  {
    title: "Iconic Vehicles",
    description: "Drive authentic Pakistani cars and trucks",
    icon: Car,
  },
  {
    title: "Customizations",
    description: "Personalize your vehicles with unique designs",
    icon: Palette,
  },
  {
    title: "Authentic Tracks",
    description: "Race through real Pakistani locations",
    icon: Map,
  },
  {
    title: "Game Modes",
    description: "Enjoy various exciting racing modes",
    icon: Gamepad,
  },
  {
    title: "Realistic Environments",
    description: "Experience true-to-life Pakistani landscapes",
    icon: Mountain,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#15233b]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white
            [text-shadow:_4px_4px_0_rgb(30_51_84_/_20%)]"
        >
          Gameplay Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
          <div className="md:col-span-3 flex justify-center gap-8">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={index + 3} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

