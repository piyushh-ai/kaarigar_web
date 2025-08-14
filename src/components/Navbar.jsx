"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/projects", label: "Projects", icon: "🚀" },
    { href: "/youtube", label: "YouTube", icon: "📺" },
    { href: "/about", label: "About", icon: "👨‍💻" },
    { href: "/contact", label: "Contact", icon: "📬" },
    { href: "/app", label: "My App", icon: "📱" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 md:bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-2 text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:via-cyan-300 group-hover:to-blue-300 transition-all duration-300">
              Kaarigar Code
            </span>
            <span className="text-xl group-hover:animate-bounce">⚡</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-5 bg-gray-300 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-gray-300 transform transition-all duration-300 mt-1 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-gray-300 transform transition-all duration-300 mt-1 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl mt-4 border border-gray-700/50 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animation: isMenuOpen
                      ? `slide-in 0.4s ease-out ${index * 0.1}s forwards`
                      : "none",
                    opacity: 0,
                  }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ➡
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
