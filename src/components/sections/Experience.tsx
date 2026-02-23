import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeInUp } from "../../utils/animations";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
  type: "work" | "education";
}

const timelineData: TimelineItem[] = [
  {
    period: "02/2025 - Presente",
    title: "Bacharelado em Análise e Desenvolvimento de Sistemas",
    company: "Uninter (EAD)",
    description:
      "Graduação com foco em desenvolvimento de software, arquitetura de sistemas e fundamentos de computação.",
    type: "education",
  },
  {
    period: "01/2024 - 09/2024",
    title: "Mentor de Programação",
    company: "CodiAcademy",
    description:
      "Mentorei estudantes em HTML, CSS, JavaScript, React, Python e frameworks como Tailwind CSS e Pandas. Criei aulas interativas e coordenei equipes de projetos, promovendo aprendizado prático e colaboração.",
    skills: ["React", "JavaScript", "Python", "Tailwind CSS", "Mentoria"],
    type: "work",
  },
  {
    period: "10/2023 - 09/2024",
    title: "Curso de Programação Fullstack",
    company: "CodiAcademy (Remoto)",
    description:
      "Formação completa em desenvolvimento web fullstack com foco em React, Node.js e tecnologias modernas.",
    type: "education",
  },
  {
    period: "06/2021 - 04/2023",
    title: "Assistente de Data Center",
    company: "Centro de Processamento de Dados da Leitura",
    description:
      "Atuei em rotinas operacionais do setor de TI, com foco em processos internos, controle de estoque, emissão de notas fiscais, precificação e suporte ao e-commerce. Automatizei relatórios utilizando Excel avançado.",
    skills: ["Excel Avançado", "Automação", "E-commerce", "Controle de Estoque"],
    type: "work",
  },
  {
    period: "10/2020 - 10/2021",
    title: "Curso de Manutenção de Computadores",
    company: "Cebrac",
    description:
      "Formação em hardware, manutenção preventiva e corretiva de computadores.",
    type: "education",
  },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experiencia"
      className="py-20 min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-blue-950 text-gray-900 dark:text-white flex flex-col items-center px-6 sm:px-12"
    >
      <motion.h2
        className="text-4xl font-bold mb-4 font-poppins text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("experience.title")}{" "}
        <span className="text-blue-600 dark:text-cyan-400">{t("experience.titleHighlight")}</span>
      </motion.h2>

      <a
        href="/cv.pdf"
        download
        className="mb-12 inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-colors font-semibold"
      >
        <Download size={18} />
        {t("experience.downloadCV")}
      </a>

      <div className="relative max-w-3xl w-full">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 md:-translate-x-1/2" />

        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-100 dark:border-gray-900 -translate-x-1/2 z-10 mt-1" />

            <div
              className={`ml-10 md:ml-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                {item.period}
              </span>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                {item.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                {item.company}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
              {item.skills && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
