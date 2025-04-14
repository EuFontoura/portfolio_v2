import React from "react";
import { motion } from "framer-motion";

interface ProjetoCardProps {
  titulo: string;
  descricao: string;
  imagem?: string;
  link?: string;
}

const ProjetoCard = ({ titulo, descricao, imagem, link }: ProjetoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
    >
      {imagem && (
        <img src={imagem} alt={titulo} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{titulo}</h3>
        <p className="text-gray-700">{descricao}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-500 hover:underline"
          >
            Ver projeto
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjetoCard;
