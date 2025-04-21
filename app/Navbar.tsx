'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-[#F1D302] z-10">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Portfolio</h1>

        {/* Hamburger icon (only visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu - Desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#F1D302] space-y-4 pb-4">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }) {
  const classes = "hover:text-white transition duration-300";
  return (
    <>
      <Link className={classes} href="#home" onClick={onClick}>Home</Link>
      <Link className={classes} href="#about" onClick={onClick}>About</Link>
      <Link className={classes} href="#skills" onClick={onClick}>Skills</Link>
      <Link className={classes} href="#projects" onClick={onClick}>Projects</Link>
      <Link className={classes} href="#contact" onClick={onClick}>Contact</Link>
    </>
  );
}
