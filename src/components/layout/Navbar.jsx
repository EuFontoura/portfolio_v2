import React from "react";
import { Link } from "react-scroll";

const navItems = ["Home", "Sobre", "Skills", "Projetos", "Contato"];

const Navbar = () => {
  return (
    <nav className="w-full text-white px-32 shadow-[10px_5px_5px_rgba(0,0,0,0.5)] bg-black py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Gabriel Fontoura</h1>
        <ul className="flex space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
