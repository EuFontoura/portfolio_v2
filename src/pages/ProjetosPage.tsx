import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import BottomNavbar from "../components/layout/BottomNavbar";
import Footer from "../components/layout/Footer";
import ProjetoModal from "../components/ui/ProjectModal";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import { Projeto } from "../types/project";

const ProjetosPage = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const { t } = useTranslation();

  const abrirModal = (projeto: Projeto) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="flex-grow px-6 pt-28 pb-10 max-w-6xl mx-auto w-full">
        <BottomNavbar />

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft size={18} />
          {t("projects.back")}
        </Link>

        <h1 className="text-3xl font-bold mb-6">{t("projects.pageTitle")}</h1>
        <p className="mb-10 text-gray-600 dark:text-gray-400">{t("projects.pageSubtitle")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projeto, idx) => (
            <ProjectCard
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

export default ProjetosPage;
