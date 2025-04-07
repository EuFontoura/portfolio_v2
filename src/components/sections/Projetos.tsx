import React from "react";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Projetos = () => {
  return (
    <section
      id="projetos"
      className="pt-6 min-h-screen bg-gray-100 text-black flex flex-col items-center px-6 sm:px-12"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center font-poppins pb-2">
        Projetos
      </h1>

      <div className="relative w-300 h-100 rounded-md overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform">
        <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white flex justify-end gap-4 items-center px-4 py-2 z-10">
          <a href="https://github.com/EuFontoura">
            <Button
              variant="outline"
              size="sm"
              className="text-white hover:text-blue-400 cursor-pointer px-0"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-6 w-6"
              ></FontAwesomeIcon>
              Veja como é feito
            </Button>
          </a>
          <Link to="/projetos">
  <Button
    variant="outline"
    size="sm"
    className="hover:text-white hover:bg-blue-600 group cursor-pointer"
  >
    Meus Projetos
    <FontAwesomeIcon
      icon={faArrowRight}
      className="pl-2.5 transform transition-all duration-300 group-hover:translate-x-2"
    />
  </Button>
</Link>
        </div>

        <img
          src="/github_page.png"
          alt="Imagem Github"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Projetos;
