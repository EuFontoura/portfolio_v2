import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Projetos from "./components/sections/Projetos";
import Skills from "./components/sections/Skills";
import Sobre from "./components/sections/Sobre";

import "./App.css";

import ProjetosPage from "./pages/ProjetosPage";

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
            </>
          }
        />
        <Route path="/projetos" element={<ProjetosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
