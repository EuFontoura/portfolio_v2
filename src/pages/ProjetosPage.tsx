import React from "react"
import BottomNavbar  from "../components/layout/BottomNavbar" 

const MeusProjetos = () => {
    return (
      <section className="min-h-screen p-28 bg-white text-black">
        < BottomNavbar />
        <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
        <p>Em breve: uma chuva de projetos 🔥</p>
        {/* tem que colocar os cards depois. hoje não, depois */}
      </section>
    );
  };
  
  export default MeusProjetos;
  