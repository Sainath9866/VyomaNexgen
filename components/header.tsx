"use client"

import { Spotlight } from "@/components/ui/spotlight";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border/40">
      {/* Spotlight effect behind the logo */}
      <Spotlight className="left-4 top-1/2 transform -translate-y-1/2 z-0" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              V
            </div>
            <div className="text-xl font-bold">
              <span className="text-purple-600">Vyoma</span>
              <span className="text-blue-500">nexgen</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#top" className="text-yellow-500 font-medium border-b-2 border-yellow-500 pb-1">
              Home
            </a>
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side - Get Started button and theme toggle */}
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
