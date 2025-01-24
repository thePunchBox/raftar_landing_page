"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
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
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setSheetOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-[#15233b]">
            <Image src="/logo.png" alt="Raftar Logo" width={100} height={32} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollTo("about")}
              className={`${isScrolled ? "text-white" : "text-white"} hover:text-[#1e3354] transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollTo("gameplay")}
              className={`${isScrolled ? "text-white" : "text-white"} hover:text-[#1e3354] transition-colors`}
            >
              Gameplay Features
            </button>
            <button
              onClick={() => scrollTo("roadmap")}
              className={`${isScrolled ? "text-white" : "text-white"} hover:text-[#1e3354] transition-colors`}
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollTo("team")}
              className={`${isScrolled ? "text-white" : "text-white"} hover:text-[#1e3354] transition-colors`}
            >
              Team
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className={`${isScrolled ? "text-white" : "text-white"} hover:text-[#1e3354] transition-colors`}
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollTo("cta")}
              className="bg-[#15233b] hover:bg-white text-white hover:text-[#15233b] font-semibold px-6 relative overflow-hidden group transition-colors duration-300"
            >
              <span className="relative z-10">Join Waitlist</span>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center lg:hidden">
            <Button
              onClick={() => scrollTo("cta")}
              className="bg-[#15233b] hover:bg-white text-white hover:text-[#15233b] font-semibold px-4 py-2 text-sm mr-4 relative overflow-hidden group transition-colors duration-300"
            >
              <span className="relative z-10">Join Waitlist</span>
            </Button>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className={`${isScrolled ? "text-white" : "text-white"}`}>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white border-[#15233b]">
                <SheetHeader>
                  <SheetTitle className="text-[#15233b]">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <button
                    onClick={() => scrollTo("about")}
                    className="text-[#15233b] hover:text-[#1e3354] transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollTo("gameplay")}
                    className="text-[#15233b] hover:text-[#1e3354] transition-colors"
                  >
                    Gameplay Features
                  </button>
                  <button
                    onClick={() => scrollTo("roadmap")}
                    className="text-[#15233b] hover:text-[#1e3354] transition-colors"
                  >
                    Roadmap
                  </button>
                  <button
                    onClick={() => scrollTo("team")}
                    className="text-[#15233b] hover:text-[#1e3354] transition-colors"
                  >
                    Team
                  </button>
                  <button
                    onClick={() => scrollTo("faq")}
                    className="text-[#15233b] hover:text-[#1e3354] transition-colors"
                  >
                    FAQ
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

