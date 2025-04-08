import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Home, Folder, Code2, User, Mail } from "lucide-react";

const BottomNavbar = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projetos";

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={24} /> },
    { id: "sobre", label: "Sobre", icon: <User size={24} /> },
    { id: "skills", label: "Skills", icon: <Code2 size={24} /> },
    { id: "projetos", label: "Projetos", icon: <Folder size={24} /> },
    { id: "contato", label: "Contato", icon: <Mail size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around items-center py-3 md:hidden z-50">
      {navItems.map(({ id, label, icon }) =>
        isProjectsPage ? (
          <RouterLink
            key={id}
            to="/"
            className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
          >
            {icon}
            <span>{label}</span>
          </RouterLink>
        ) : (
          <ScrollLink
            key={id}
            to={id}
            smooth={true}
            duration={500}
            offset={-60}
            className="flex flex-col items-center text-gray-600 hover:text-blue-500 text-sm"
          >
            {icon}
            <span>{label}</span>
          </ScrollLink>
        )
      )}
    </nav>
  );
};

export default BottomNavbar;
