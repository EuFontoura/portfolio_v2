import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Projetos from "./components/sections/Projetos";
import Skills from "./components/sections/Skills";
import Sobre from "./components/sections/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Skills />
      <Projetos />
    </>
  );
}

export default App;
