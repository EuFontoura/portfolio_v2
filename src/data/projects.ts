import { Projeto } from "../types/project";

export const projects: Projeto[] = [
  {
    titulo: "Portfólio Profissional",
    descricao:
      "O primeiro portfolio que fiz, com animações suaves, minimalista e integração com EmailJS.",
    imagem: "/projects/Portfolio.png",
    link: "https://gabrielfontoura.vercel.app/",
    github: "https://github.com/EuFontoura/Portfolio",
    tecnologias: ["React", "Tailwind", "Framer Motion", "EmailJS"],
  },
  {
    titulo: "Gravity Ball",
    descricao:
      "Um site lúdico criado com o objetivo de estudar efeitos de gravidade no JavaScript, atualmente funcionando apenas em Desktop.",
    imagem: "/projects/gravityBall.png",
    link: "https://gravity-ball-eight.vercel.app/",
    github: "https://github.com/EuFontoura/GravityBall",
    tecnologias: ["JavaScript", "CSS", "HTML"],
  },
  {
    titulo: "Awwwards Clone",
    descricao: "Um clone da página da Zentry, ganhadora do Awwwards.",
    imagem: "/projects/awards.jpg",
    link: "https://awards-three-phi.vercel.app",
    github: "https://github.com/EuFontoura/awards",
    tecnologias: ["React", "Tailwind", "Gsap", "ScrollTrigger", "Framer Motion"],
  },
  {
    titulo: "TetrisPy",
    descricao:
      "Um clone do jogo Tetris. Por ter sido criado inteiramento com Python, não é possível reproduzir direto no navegador. Entretanto, bem documentado para que seja bem simples de utilizá-lo.",
    imagem: "/projects/TetrisPy.png",
    github: "https://github.com/EuFontoura/TetrisPy",
    tecnologias: ["Python", "Pygame"],
  },
  {
    titulo: "DefenseTowerPy",
    descricao:
      "Um Defense Tower. Por ter sido criado inteiramento com Python, não é possível reproduzir direto no navegador. Entretanto, bem documentado para que seja bem simples de utilizá-lo.",
    imagem: "/projects/DefenseTowerPy.png",
    github: "https://github.com/EuFontoura/DefenseTowerPy",
    tecnologias: ["Python", "Pygame"],
  },
];
