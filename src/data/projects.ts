import { Projeto } from "../types/project";

export const projects: Projeto[] = [
  {
    titulo: "Semente de Ogum — Simulado ENEM",
    descricao:
      "Plataforma web de simulados ENEM para o cursinho preparatório gratuito Semente de Ogum. Alunos realizam simulados cronometrados e professores criam provas e analisam resultados.",
    imagem: "/projects/semente-de-ogum.png",
    link: "https://semente-de-ogum.vercel.app",
    tecnologias: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Firebase"],
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
    titulo: "Portfólio Profissional",
    descricao:
      "O primeiro portfolio que fiz, com animações suaves, minimalista e integração com EmailJS.",
    imagem: "/projects/Portfolio.png",
    link: "https://gabrielfontoura.vercel.app/",
    github: "https://github.com/EuFontoura/Portfolio",
    tecnologias: ["React", "Tailwind", "Framer Motion", "EmailJS"],
  },
  {
    titulo: "TetrisPy",
    descricao:
      "Um clone do clássico Tetris feito inteiramente em Python com Pygame. Bem documentado para fácil utilização.",
    imagem: "/projects/TetrisPy.png",
    github: "https://github.com/EuFontoura/TetrisPy",
    tecnologias: ["Python", "Pygame"],
  },
];
