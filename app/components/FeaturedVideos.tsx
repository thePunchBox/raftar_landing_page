"use client"

import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"

const videos = [
  { id: 1, title: "Karachi Streets Gameplay", thumbnail: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "Vehicle Customization", thumbnail: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Multiplayer Race", thumbnail: "/placeholder.svg?height=200&width=300" },
]

export default function FeaturedVideos() {
  return (
    <section className="py-20 bg-[#1e3354]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white
            [text-shadow:_4px_4px_0_rgb(30_51_84_/_20%)]"
        >
          Featured Videos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

