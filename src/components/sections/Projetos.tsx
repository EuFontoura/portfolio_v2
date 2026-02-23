import { Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import { fadeInUp } from "../../utils/animations";

const Projetos = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projetos"
      className="pt-10 min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-blue-950 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white flex flex-col items-center px-6 sm:px-12 selection:bg-gray-400 selection:text-black"
    >
      <motion.h1
        className="text-4xl font-bold mb-12 text-center font-poppins pb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("projects.title")} <span className="text-indigo-600 dark:text-indigo-400">{t("projects.titleHighlight")}</span>
      </motion.h1>

      <motion.div
        className="relative w-full max-w-[350px] sm:max-w-[600px] md:max-w-300 rounded-md overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 items-center px-4 py-2 z-10">
          <a href="https://github.com/EuFontoura" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto text-white hover:text-indigo-400 cursor-pointer px-0"
            >
              <Github className="h-6 w-6" />
              {t("projects.seeCode")}
            </Button>
          </a>

          <Link to="/projetos" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto hover:text-white hover:bg-indigo-600 group cursor-pointer"
            >
              {t("projects.myProjects")}
              <ArrowRight className="ml-2 transform transition-all duration-300 group-hover:translate-x-2" size={18} />
            </Button>
          </Link>
        </div>

        <img
          src="/images/github_page.png"
          alt="GitHub page"
          loading="lazy"
          className="w-full h-[400px] sm:h-[300px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Projetos;
