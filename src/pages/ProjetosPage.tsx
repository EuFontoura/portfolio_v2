import React, { useState } from "react";
import BottomNavbar from "../components/layout/BottomNavbar";
import Footer from "../components/layout/Footer";
import ProjetoModal from "../components/ui/ProjectModal";
import { motion } from "framer-motion";

// Mock de projetos
const projetosMock = [
  {
    titulo: "Portfólio Profissional",
    descricao: "O primeiro portfolio que fiz, com animações suaves, minimalista e integração com EmailJS.",
    imagem: "/projects/Portfolio.png",
    link: "https://gabrielfontoura.vercel.app/",
    github: "https://github.com/EuFontoura/Portfolio",
    tecnologias: ["React", "Tailwind", "Framer Motion", "EmailJS"],
  },
  {
    titulo: "E-commerce de Produtos Naturais",
    descricao: "Loja virtual com carrinho de compras, busca por produtos e integração com Mercado Pago.",
    imagem: "https://source.unsplash.com/random/800x600?store",
    link: "https://lojanatureba.com",
    github: "https://github.com/seuusuario/ecommerce-natureba",
    tecnologias: ["React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    titulo: "Blog Pessoal",
    descricao: "Blog com markdown, comentários e sistema de publicação via CMS headless.",
    imagem: "https://source.unsplash.com/random/800x600?blog",
    link: "https://meublogmaneiro.com",
    github: "https://github.com/seuusuario/blog-pessoal",
    tecnologias: ["Next.js", "Tailwind", "Contentful"],
  },
];

// Card de projeto
const ProjetoCard = ({ titulo, descricao, imagem, onClick }: any) => (
  <motion.div
    className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
  >
    <img src={imagem} alt={titulo} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{titulo}</h3>
      <p className="text-sm text-gray-700">{descricao}</p>
      <span className="inline-block mt-3 text-blue-500 hover:underline">
        Ver projeto
      </span>
    </div>
  </motion.div>
);

const MeusProjetos = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = (projeto: any) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      <section className="flex-grow px-6 pt-28 pb-10 max-w-6xl mx-auto">
        <BottomNavbar />
        <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
        <p className="mb-10">Confira alguns dos meus trabalhos mais recentes:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosMock.map((projeto, idx) => (
            <ProjetoCard
              key={idx}
              {...projeto}
              onClick={() => abrirModal(projeto)}
            />
          ))}
        </div>
      </section>

      <Footer />

      {projetoSelecionado && (
        <ProjetoModal
          isOpen={modalAberto}
          onClose={fecharModal}
          projeto={projetoSelecionado}
        />
      )}
    </main>
  );
};

export default MeusProjetos;
