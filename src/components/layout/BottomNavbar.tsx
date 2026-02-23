import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Home, Folder, Code2, User, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const BottomNavbar = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projetos";
  const { t } = useTranslation();

  const navItems = [
    { id: "home", label: t("nav.home"), icon: <Home size={24} /> },
    { id: "sobre", label: t("nav.about"), icon: <User size={24} /> },
    { id: "skills", label: t("nav.skills"), icon: <Code2 size={24} /> },
    { id: "projetos", label: t("nav.projects"), icon: <Folder size={24} /> },
    { id: "contato", label: t("nav.contact"), icon: <Mail size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 flex justify-around items-center py-3 md:hidden z-50">
      {navItems.map(({ id, label, icon }) =>
        isProjectsPage ? (
          <RouterLink
            key={id}
            to={`/#${id}`}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 text-sm"
          >
            {icon}
            <span>{label}</span>
          </RouterLink>
        ) : (
          <ScrollLink
            key={id}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 text-sm cursor-pointer"
            activeClass="!text-blue-500 font-semibold"
            aria-current="true"
          >
            {icon}
            <span>{label}</span>
          </ScrollLink>
        ),
      )}
    </nav>
  );
};

export default BottomNavbar;
