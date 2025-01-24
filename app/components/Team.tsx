"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Faraz Ghani",
    role: "Lead Developer",
    image: "/faraz.webp",
    rotation: -2,
  },
  {
    name: "Muhammad Daniyal",
    role: "Art Director",
    image: "/daniyal.webp",
    rotation: 1,
  },
  {
    name: "Moiz Azam",
    role: "Game Designer",
    image: "/moiz.webp",
    rotation: -1,
  },
  {
    name: "Rafay",
    role: "Sound Engineer",
    image: "/rafay.webp",
    rotation: 2,
  },
]

const mentor = {
  name: "Dr. Rabeea Jaffari",
  role: "Mentor",
  image: "/rabeea.webp",
  rotation: -1,
}

export default function Team() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-text">The Visionaries Behind Raftar</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals bringing Pakistan's premier racing game to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 1 }}
              className="glassmorphism rounded-none border-4 border-[#1e3354]/30 hover:shadow-2xl hover:shadow-[#15233b]/50 transition-all duration-300"
              style={{ transform: `rotate(${member.rotation}deg)` }}
            >
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#1e3354] px-4 py-1 transform translate-y-4 -rotate-2">
                  <span className="text-white font-bold tracking-wider">TEAM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-[#4CAF50] font-mono text-lg uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-gray-300 font-medium">Co-founder</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 1 }}
          className="glassmorphism rounded-none border-4 border-[#1e3354]/30 max-w-md mx-auto hover:shadow-2xl hover:shadow-[#15233b]/50 transition-all duration-300"
          style={{ transform: `rotate(${mentor.rotation}deg)` }}
        >
          <div className="relative">
            <Image
              src={mentor.image || "/placeholder.svg"}
              alt={mentor.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-0 right-0 bg-[#1e3354] px-4 py-1 transform translate-y-4 -rotate-2">
              <span className="text-white font-bold tracking-wider">MENTOR</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white">{mentor.name}</h3>
            <p className="text-[#4CAF50] font-mono text-lg uppercase tracking-wider mb-2">{mentor.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

