"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="/logo.png"
              alt="Raftar Logo"
              width={200}
              height={64}
              className="mx-auto h-16 md:h-24 w-auto mb-8"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold glow-text"
          >
            Race Through Pakistan
            <br />
            Like Never Before
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the thrill of racing through iconic Pakistani streets with stunning visuals, authentic vehicles,
            and immersive gameplay.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-[#15233b] hover:bg-[#1e3354] text-white px-6 py-4 text-base md:text-lg font-bold rounded-full glow w-full sm:w-auto"
              onClick={() => window.open("https://discord.com/invite/QUKdx7rvSs", "_blank")}
            >
              Join the Waitlist <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#15233b] text-[#15233b] bg-white hover:bg-[#15233b] hover:text-white px-6 py-4 text-base md:text-lg font-bold rounded-full w-full sm:w-auto"
              onClick={() => window.open("https://youtu.be/0kkWnswyhZc?si=Lj2U46VlADOWbwWp", "_blank")}
            >
              Watch Trailer
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
