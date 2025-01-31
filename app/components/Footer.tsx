import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-[#15233b]/30 overflow-hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-0" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/3">
            <Image
              src="/logo.png"
              alt="Raftar Logo"
              width={100}
              height={32}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Experience the thrill of racing through iconic Pakistani streets with Raftar!
            </p>
            <p className="text-sm text-gray-500 mb-4">
              © Copyright 2025 Raftar. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/playyraftar"
                target="_blank"
                className="text-gray-400 hover:text-[#4267B2] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/playraftar"
                target="_blank"
                className="text-gray-400 hover:text-[#E1306C] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/playraftar"
                target="_blank"
                className="text-gray-400 hover:text-[#0077B5] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/playraftar"
                target="_blank"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:info@playraftar.com"
                className="text-gray-400 hover:text-[#EA4335] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Community Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://discord.com/invite/QUKdx7rvSs"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Join Discord
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
