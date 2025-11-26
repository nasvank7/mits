import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${
          scrolled
            ? "w-full top-0 rounded-none bg-white shadow-lg"
            : "w-[95%] md:w-[90%] mt-6 rounded-3xl bg-white shadow-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition">mits</a>

          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-black font-medium transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex space-x-8">
           <button className="px-4 py-2 bg-black  hover:bg-white text-white hover:text-black border-black border rounded-md" >
            Get Started
           </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-black transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t rounded-b-3xl absolute w-full left-0 shadow-lg animate-in slide-in-from-top-2">
          <div className="px-6 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-gray-600 hover:text-black hover:pl-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
