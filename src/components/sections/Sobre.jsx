import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PictureEffect from "../layout/PictureEffect";

const Sobre = () => {
  return (
    <section
      id="sobre"
      className="pt-20 min-h-screen bg-gray-400 text-white flex flex-col items-center px-6 sm:px-12"
    >
      <h2 className="text-4xl font-bold text-black mb-12 text-center">
        <FontAwesomeIcon icon={faUser} className="mr-3" />
        Sobre <span className="text-blue-900">Mim</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full font-[nunito]">
        <div className="w-full md:w-1/2 flex justify-center">
          <PictureEffect
            className="w-60 h-60 md:w-72 md:h-72 rounded-md"
            src="https://th.bing.com/th/id/OIP.CYVMQihQDvft4xAv03jQQwHaEJ?rs=1&pid=ImgDetMain"
          />
        </div>

        <div className="w-full md:w-1/2 text-black text-lg">
          <h2 className="text-4xl font-bold mb-4">Quem é Gabriel Fontoura?</h2>
          <p className="text-l font-semibold text-blue-200 mb-2">
            Full-Stack Developer
          </p>
          <p className="mb-2">
            E aí! Eu sou o Gabriel Fontoura — um dev full-stack apaixonado por
            transformar ideias em código e experiências digitais. Curto
            aquela mistura de criatividade com lógica, e tô sempre buscando
            maneiras de deixar a tecnologia mais humana, intuitiva e funcional.
          </p>
          <p className="mb-2">
            No meu dia a dia, tô sempre com alguma aba de documentação aberta
            (ou um café na mão 😅), mergulhando em novas tecnologias, frameworks
            ou técnicas pra melhorar o que entrego.
          </p>
          <p className="mb-2">
            Já fui mentor de programação, ajudando a galera a destravar no
            código e alcançar seus objetivos. Levo isso comigo até hoje —
            ensinar e aprender são partes do mesmo rolê.
          </p>
          <p>
            Curioso por natureza, persistente por escolha, e dev por paixão. Se
            tem um desafio no caminho, eu encaro com vontade (e talvez alguns
            commits a mais).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
