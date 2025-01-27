"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface SocialLinks {
  facebook?: string
  instagram?: string
  linkedin?: string
  email?: string
}

interface TeamMember {
  name: string
  role: string
  image: string
  rotation: number
  isFounder?: boolean
  socials: SocialLinks
}

const teamMembers: TeamMember[] = [
  {
    name: "Faraz Ghani",
    role: "Unity Specialist",
    image: "/faraz.webp",
    rotation: -2,
    isFounder: true,
    socials: {
      facebook: "https://www.facebook.com/TheFarazghani/",
      instagram: "https://www.instagram.com/Farazghani_",
      linkedin: "https://www.linkedin.com/in/farazg/",
      email: "mailto:farazghani12@gmail.com",
    },
  },
  {
    name: "Muhammad Daniyal",
    role: "SEO Guy",
    image: "/daniyal.webp",
    rotation: 1,
    socials: {
      facebook: "https://facebook.com/muhammaddaniyalll",
      instagram: "https://instagram.com/daniyyawl2.0",
      linkedin: "https://www.linkedin.com/in/muhammaddaniyalll/",
      email: "mailto:muhammaddaniyal982@gmail.com",
    },
  },
  {
    name: "Moiz Azam",
    role: "Blender Expert",
    image: "/moiz.webp",
    rotation: -1,
    socials: {
      facebook: "https://facebook.com/moiz.azam.10",
      instagram: "https://instagram.com/moiz.azam121",
      linkedin: "https://www.linkedin.com/in/moiz-azam-549435215/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "mailto:Moiz89061@gmail.com",
    },
  },
  {
    name: "Rafay",
    role: "Code Ninja",
    image: "/rafay.webp",
    rotation: 2,
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=100010285934488",
      instagram: "https://instagram.com/rafaybachani",
      linkedin: "https://linkedin.com/in/rafayshakeel",
      email: "mailto:rafayshakeelbachani@gmail.com",
    },
  },
]

const mentor: TeamMember = {
  name: "Dr. Rabeea Jaffari",
  role: "Mentor",
  image: "/rabeea.webp",
  rotation: -1,
  socials: {
    linkedin: "https://www.linkedin.com/in/rabeeajaff",
    email: "mailto:rabeea.jaffari@faculty.muet.edu.pk",
  },
}

const SocialIcons = ({ socials }: { socials: SocialLinks }) => (
  <div className="flex justify-center md:justify-start space-x-3 mt-4">
    {socials.facebook && (
      <Link
        href={socials.facebook}
        target="_blank"
        className="text-gray-400 hover:text-[#4267B2] transition-colors transform hover:scale-110"
      >
        <Facebook className="w-5 h-5" />
      </Link>
    )}
    {socials.instagram && (
      <Link
        href={socials.instagram}
        target="_blank"
        className="text-gray-400 hover:text-[#E1306C] transition-colors transform hover:scale-110"
      >
        <Instagram className="w-5 h-5" />
      </Link>
    )}
    {socials.linkedin && (
      <Link
        href={socials.linkedin}
        target="_blank"
        className="text-gray-400 hover:text-[#0077B5] transition-colors transform hover:scale-110"
      >
        <Linkedin className="w-5 h-5" />
      </Link>
    )}
    {socials.email && (
      <Link
        href={socials.email}
        className="text-gray-400 hover:text-[#EA4335] transition-colors transform hover:scale-110"
      >
        <Mail className="w-5 h-5" />
      </Link>
    )}
  </div>
)

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 relative">
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
                  className="w-full h-64 object-contain bg-[#001e44]"
                />
                <div className="absolute top-0 right-0 bg-[#1e3354] px-4 py-1 transform translate-y-4 -rotate-2">
                  <span className="text-white font-bold tracking-wider">TEAM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-[#4CAF50] font-mono text-lg uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-gray-300 font-medium">{member.isFounder ? "Founder" : "Co-founder"}</p>
                <SocialIcons socials={member.socials} />
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
            <SocialIcons socials={mentor.socials} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

