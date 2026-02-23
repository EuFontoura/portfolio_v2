import { User } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LineFade from "../ui/LineFade";
import PictureEffect from "../layout/PictureEffect";
import { fadeInDown, container } from "../../utils/animations";

const Sobre = () => {
  const { t } = useTranslation();

  return (
    <section
      id="sobre"
      className="pt-8 md:pt-16 pb-16 min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-200 flex flex-col items-center px-4 sm:px-12 selection:bg-gray-800 selection:text-white"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center font-poppins"
        variants={fadeInDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        custom={0}
      >
        <User className="inline mr-3" size={32} />
        {t("about.title")} <span className="text-blue-700">{t("about.titleHighlight")}</span>
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full font-poppins"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeInDown}
          custom={1}
        >
          <PictureEffect
            className="w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-md md:grayscale hover:grayscale-0"
            src="/images/profile-pic.jpg"
            alt="Gabriel Fontoura"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-md leading-relaxed max-w-prose"
          variants={container}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            variants={fadeInDown}
            custom={1.2}
          >
            {t("about.question")}
          </motion.h2>

          <motion.p
            className="text-lg font-semibold text-blue-600 mb-4"
            variants={fadeInDown}
            custom={1.4}
          >
            {t("about.role")}
          </motion.p>

          <LineFade text={t("about.bio")} className="mb-4" />

          <motion.p className="mb-2" variants={fadeInDown} custom={2.4}>
            <span className="text-blue-700 font-medium">{t("about.email")}</span>{" "}
            <a href="mailto:gabrielFMendonca@gmail.com" className="hover:underline">
              gabrielFMendonca@gmail.com
            </a>
          </motion.p>

          <motion.p className="mb-2" variants={fadeInDown} custom={2.6}>
            <span className="text-blue-700 font-medium">{t("about.location")}</span>{" "}
            {t("about.locationValue")}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sobre;
