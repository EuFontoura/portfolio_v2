import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-800">
      <div className=":max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:mb-0 mb-14">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Gabriel Fontoura. Todos os direitos
          reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/EuFontoura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/gabriel-fontoura/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:gabrielFMendonca@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
