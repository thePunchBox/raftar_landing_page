"use client"

import { motion } from "framer-motion"
import { Car, Map, Gamepad2, Users, Settings, Trophy } from "lucide-react"

const features = [
  {
    icon: Car,
    title: "Authentic Vehicles",
    description: "Drive iconic Pakistani cars like Suzuki Mehran, Toyota Corolla, and customized trucks",
  },
  {
    icon: Map,
    title: "Real Locations",
    description: "Race through accurately recreated streets of Karachi, Lahore, and scenic northern areas",
  },
  {
    icon: Gamepad2,
    title: "Immersive Gameplay",
    description: "Experience realistic physics and stunning graphics powered by Unity",
  },
  {
    icon: Users,
    title: "Multiplayer Racing",
    description: "Compete with friends and racers from around Pakistan in thrilling online matches",
  },
  {
    icon: Settings,
    title: "Deep Customization",
    description: "Modify your vehicles with authentic Pakistani art and performance upgrades",
  },
  {
    icon: Trophy,
    title: "Championships",
    description: "Participate in nationwide tournaments and earn exclusive rewards",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 glow-text">
            Experience Pakistani Racing Culture
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in the rich automotive culture of Pakistan with features designed to deliver an authentic
            racing experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg glassmorphism border border-[#15233b]/30 hover:border-[#15233b] transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

