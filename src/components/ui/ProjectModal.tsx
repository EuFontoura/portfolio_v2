import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProjetoModalProps {
  isOpen: boolean;
  onClose: () => void;
  projeto: {
    titulo: string;
    descricao: string;
    imagem?: string;
    link?: string;
    github?: string;
    tecnologias?: string[];
  };
}

const ProjetoModal = ({ isOpen, onClose, projeto }: ProjetoModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl p-6 max-w-4xl w-full flex flex-col md:flex-row gap-6 text-black relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-3 right-3 text-black cursor-pointer" onClick={onClose}>
            <X size={24} />
          </button>

          {projeto.imagem && (
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full md:w-1/2 h-64 object-cover rounded"
            />
          )}

          <div className="flex flex-col justify-between w-full">
            <div>
              <h2 className="text-2xl font-bold mb-2">{projeto.titulo}</h2>
              <p className="text-gray-800 mb-4">{projeto.descricao}</p>

              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias?.map((tec, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tec}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {projeto.link && (
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Acessar Projeto
                </a>
              )}
              {projeto.github && (
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Ver no GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjetoModal;
