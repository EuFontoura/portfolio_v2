import React from "react";
import { Link } from "react-scroll";
import { Home, Folder, Code2, User, Mail } from "lucide-react"; // Ícones minimalistas

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around items-center py-3 md:hidden z-50">
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-60}
        className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
      >
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link
        to="sobre"
        smooth={true}
        duration={500}
        offset={-60}
        className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
      >
        <User size={24} />
        <span>Sobre</span>
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        offset={-60}
        className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
      >
        <Code2 size={24} />
        <span>Skills</span>
      </Link>
      <Link
        to="projetos"
        smooth={true}
        duration={500}
        offset={-60}
        className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
      >
        <Folder size={24} />
        <span>Projetos</span>
      </Link>
      <Link
        to="contato"
        smooth={true}
        duration={500}
        className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
      >
        <Mail size={24} />
        <span>Contato</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
