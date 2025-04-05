import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import Skills from "./components/sections/Skills";
import Sobre from "./components/sections/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Skills />
    </>
  );
}

export default App;
