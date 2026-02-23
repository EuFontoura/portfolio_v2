import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Sun, Moon, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projetos";
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        setVisible(true);
      } else {
        setVisible(currentY < lastScrollY.current || currentY < 50);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "sobre", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "projetos", label: t("nav.projects") },
    { id: "contato", label: t("nav.contact") },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "pt-BR" ? "en" : "pt-BR");
  };

  const accessibilityButtons = (
    <div className="flex items-center gap-1">
      <button
        onClick={toggleLang}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 cursor-pointer"
        aria-label="Toggle language"
      >
        <Globe size={20} />
      </button>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 cursor-pointer"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );

  return (
    <nav className={`w-full text-white px-6 sm:px-10 md:px-32 shadow-[10px_5px_5px_rgba(0,0,0,0.5)] bg-white dark:bg-black py-4 fixed top-0 left-0 z-50 selection:bg-gray-400 selection:text-black transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Gabriel Fontoura</h1>

        {/* Mobile: only accessibility buttons */}
        <div className="md:hidden">
          {accessibilityButtons}
        </div>

        {/* Desktop: nav links + accessibility buttons */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6">
            {navItems.map(({ id, label }) =>
              isProjectsPage ? (
                <RouterLink
                  key={id}
                  to={`/#${id}`}
                  className="relative cursor-pointer text-xl transition-colors text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
                >
                  {label}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={id}
                  to={id}
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className="relative cursor-pointer text-xl transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
                  activeClass="!text-blue-500 dark:!text-blue-300 after:scale-x-100 font-semibold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  aria-current="true"
                >
                  {label}
                </ScrollLink>
              ),
            )}
          </ul>
          {accessibilityButtons}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
