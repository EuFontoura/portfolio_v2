import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../../data/social";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
} as const;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-700 dark:text-white py-6 border-t border-gray-300 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:mb-0 mb-14">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Gabriel Fontoura. {t("footer.rights")}
        </p>

        <div className="flex gap-4">
          {socialLinks
            .filter((link) => link.icon !== "instagram")
            .map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.icon !== "mail" ? "_blank" : undefined}
                  rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                  className="hover:text-blue-400 transition"
                >
                  <Icon size={20} />
                </a>
              );
            })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
