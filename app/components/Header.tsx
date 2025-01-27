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

  // Ensure scroll happens after the page is hydrated
  const scrollTo = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        console.error(`Element with id "${id}" not found`)
      }
      setSheetOpen(false)
    }, 100) // Small delay to allow client-side rendering to complete
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
              onClick={() => scrollTo("story")}
              className={`${isScrolled ? "text-white" : "text-white"} hover:text-[#1e3354] transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollTo("features")}
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
                    <button
                      onClick={() => scrollTo("story")}
                      className="text-white hover:text-[#4CAF50] transition-colors text-base w-full text-left px-4 py-2"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollTo("features")}
                      className="text-white hover:text-[#4CAF50] transition-colors text-base w-full text-left px-4 py-2"
                    >
                      Gameplay Features
                    </button>
                    <button
                      onClick={() => scrollTo("roadmap")}
                      className="text-white hover:text-[#4CAF50] transition-colors text-base w-full text-left px-4 py-2"
                    >
                      Roadmap
                    </button>
                    <button
                      onClick={() => scrollTo("team")}
                      className="text-white hover:text-[#4CAF50] transition-colors text-base w-full text-left px-4 py-2"
                    >
                      Team
                    </button>
                    <button
                      onClick={() => scrollTo("faq")}
                      className="text-white hover:text-[#4CAF50] transition-colors text-base w-full text-left px-4 py-2"
                    >
                      FAQ
                    </button>
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

