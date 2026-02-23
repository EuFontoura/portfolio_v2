import { motion } from "framer-motion";
import { Projeto } from "../../types/project";

interface ProjectCardProps extends Projeto {
  onClick?: () => void;
}

const ProjectCard = ({ titulo, descricao, imagem, link, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    >
      {imagem && (
        <img
          src={imagem}
          alt={titulo}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{titulo}</h3>
        <p className="text-gray-700 text-sm">{descricao}</p>
        {link && !onClick && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-500 hover:underline"
          >
            Ver projeto
          </a>
        )}
        {onClick && (
          <span className="inline-block mt-3 text-blue-500 hover:underline">
            Ver projeto
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
