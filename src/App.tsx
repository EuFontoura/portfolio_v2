import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Projetos from "./components/sections/Projetos";
import Skills from "./components/sections/Skills";
import Sobre from "./components/sections/Sobre";
import Contato from "./components/sections/Contato";

import "./App.css";

import ProjetosPage from "./pages/ProjetosPage";
import BottomNavbar from "./components/layout/BottomNavbar";
import Footer from "./components/layout/Footer";

function App() {
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
