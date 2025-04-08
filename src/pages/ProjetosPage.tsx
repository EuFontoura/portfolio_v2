import React from "react";
import BottomNavbar from "../components/layout/BottomNavbar";
import Footer from "../components/layout/Footer"; // importa o footer aqui

const MeusProjetos = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      <section className="flex-grow p-28">
        <BottomNavbar />
        <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
        <p>Em breve: uma chuva de projetos 🔥</p>
        {/* tem que colocar os cards depois. hoje não, depois */}
      </section>
      <Footer />
    </main>
  );
};

export default MeusProjetos;
