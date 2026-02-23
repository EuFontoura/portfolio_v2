import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";

import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Projetos from "./components/sections/Projetos";
import Skills from "./components/sections/Skills";
import Sobre from "./components/sections/Sobre";
import Contato from "./components/sections/Contato";
import Experience from "./components/sections/Experience";
import ProjetosPage from "./pages/ProjetosPage";
import NotFound from "./pages/NotFound";
import BottomNavbar from "./components/layout/BottomNavbar";
import Footer from "./components/layout/Footer";
import Loading from "./components/layout/LoadingScreen";
import BackToTop from "./components/ui/BackToTop";

import "./App.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Sobre />
                <Skills />
                <Experience />
                <Projetos />
                <Contato />
                <BottomNavbar />
                <Footer />
              </>
            }
          />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimestamp = sessionStorage.getItem("loadingTimestamp");

    if (loadingTimestamp) {
      setIsLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("loadingTimestamp", String(Date.now()));
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <BackToTop />
      </Router>
    </ThemeProvider>
  );
}

export default App;
