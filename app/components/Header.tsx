"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Info, Gamepad, Map, Users, HelpCircle, Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      setSheetOpen(false)
    }, 100)
  }

  const menuItems = [
    { id: "story", label: "About", icon: Info },
    { id: "features", label: "Gameplay Features", icon: Gamepad },
    { id: "roadmap", label: "Roadmap", icon: Map },
    { id: "team", label: "Team", icon: Users },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ]

  const socialItems = [
    { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { label: "Email", icon: Mail, href: "mailto:contact@raftar.com" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-[#15233b] relative z-10">
            <Image src="/logo.png" alt="Raftar Logo" width={100} height={32} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`${isScrolled ? "text-white" : "text-white"} hover:text-[#1e3354] transition-colors`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open("https://discord.com/invite/QUKdx7rvSs", "_blank")}
              className="bg-[#15233b] hover:bg-white text-white hover:text-[#15233b] font-semibold rounded-full px-6 relative overflow-hidden group transition-colors duration-300"
            >
              <span className="relative z-10">Join Waitlist</span>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center lg:hidden">
            <Button
              onClick={() => window.open("https://discord.com/invite/QUKdx7rvSs", "_blank")}
              className="bg-[#15233b] hover:bg-white text-white hover:text-[#15233b] font-semibold rounded-full px-4 py-2 text-sm mr-4 relative overflow-hidden group transition-colors duration-300"
            >
              <span className="relative z-10">Join Waitlist</span>
            </Button>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-white"}`}>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#15233b]/80 backdrop-blur-md border-[#15233b] text-white">
                <SheetHeader className="text-center">
                  <SheetTitle className="text-white text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col h-full pt-12">
                  <div className="space-y-4">
                    {menuItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className="text-white hover:text-[#4CAF50] transition-colors text-base w-full text-left px-4 py-2 flex items-center gap-3"
                        >
                          <Icon className="w-5 h-5" />
                          {item.label}
                        </button>
                      )
                    })}
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <h3 className="text-white text-lg font-semibold mb-4 px-4">Connect with us</h3>
                    <div className="flex justify-between px-4">
                      {socialItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#4CAF50] transition-colors p-2"
                          >
                            <Icon className="w-5 h-5" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

