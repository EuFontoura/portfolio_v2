import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; 

const navItems = ["Home", "Sobre", "Skills", "Projetos", "Contato"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full text-white px-6 sm:px-10 md:px-32 shadow-[10px_5px_5px_rgba(0,0,0,0.5)] bg-black py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Gabriel Fontoura</h1>

        <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="font-semibold text-blue-300 after:scale-x-100"
              className="relative cursor-pointer text-xl text-white hover:text-blue-300 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {item}
            </Link>
          ))}
        </ul>

        <ul
          className={`absolute top-14 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 transition-all duration-300 md:hidden ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-xl text-white hover:text-blue-300 transition-colors"
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
