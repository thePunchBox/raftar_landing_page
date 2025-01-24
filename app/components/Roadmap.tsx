"use client"

import { motion } from "framer-motion"
import { Check, Circle } from "lucide-react"

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    items: [
      { text: "Core game mechanics development", completed: true },
      { text: "Initial vehicle models", completed: false },
      { text: "Basic environment creation", completed: false },
      { text: "Physics engine implementation", completed: false },
      { text: "Early testing phase", completed: false },
    ],
  },
  {
    phase: "Phase 2",
    title: "Enhancement",
    items: [
      { text: "Advanced graphics implementation", completed: false },
      { text: "Additional vehicle roster", completed: false },
      { text: "Expanded location selection", completed: false },
      { text: "Multiplayer framework", completed: false },
      { text: "Beta testing program", completed: false },
    ],
  },
  {
    phase: "Phase 3",
    title: "Polish & Launch",
    items: [
      { text: "Final optimization", completed: false },
      { text: "Community features", completed: false },
      { text: "Tournament system", completed: false },
      { text: "Marketing campaign", completed: false },
      { text: "Official release", completed: false },
    ],
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 glow-text">Development Roadmap</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our journey as we build Pakistan's premier racing game experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg glassmorphism border border-[#15233b]/30"
            >
              <div className="text-sm font-bold text-[#15233b] bg-white px-3 py-1 rounded-full w-fit mb-4">
                {item.phase}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-center gap-2">
                    {listItem.completed ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                    <span className={listItem.completed ? "line-through" : ""}>{listItem.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

