import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Projetos from "./components/sections/Projetos";
import Skills from "./components/sections/Skills";
import Sobre from "./components/sections/Sobre";
import Contato from "./components/sections/Contato";
import ProjetosPage from "./pages/ProjetosPage";
import BottomNavbar from "./components/layout/BottomNavbar";
import Footer from "./components/layout/Footer";
import Loading from "./components/layout/LoadingScreen"; // novo import

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimestamp = localStorage.getItem("loadingTimestamp");
    const now = Date.now();
    const oneHour = 1000 * 60 * 60; // 1 hora em ms

    if (loadingTimestamp && now - Number(loadingTimestamp) < oneHour) {
      // Já carregou dentro da última hora
      setIsLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("loadingTimestamp", String(now));
      }, 500); // duração do loading

      return () => clearTimeout(timeout);
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Sobre />
              <Skills />
              <Projetos />
              <Contato />
              <BottomNavbar />
              <Footer />
            </>
          }
        />
        <Route path="/projetos" element={<ProjetosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
