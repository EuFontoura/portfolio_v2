# 💼 Portfólio | Gabriel Fontoura

Portfólio pessoal de desenvolvedor frontend, construído com React 19, TypeScript e Tailwind CSS 4. Apresenta projetos, habilidades, experiência profissional e formulário de contato.

🌐 **[gabrielfontouradev.vercel.app](https://gabrielfontouradev.vercel.app)**

## 🚀 Tech Stack

| Categoria | Tecnologias |
|-----------|-------------|
| **Core** | React 19, TypeScript, Vite 6 |
| **Estilização** | Tailwind CSS 4, clsx, tailwind-merge |
| **Animações** | Framer Motion, Lottie, react-simple-typewriter |
| **Roteamento** | React Router DOM 7, React Scroll |
| **i18n** | i18next, react-i18next (PT-BR / EN) |
| **Ícones** | Lucide React, React Icons (brand logos) |
| **Contato** | EmailJS |
| **Linting** | ESLint, Prettier, TypeScript strict mode |

## 📁 Estrutura

```
src/
├── app/                  # Entry point (App.tsx, App.css, main.tsx)
├── components/
│   ├── layout/           # Navbar, BottomNavbar, Footer, LoadingScreen, PictureEffect
│   ├── sections/         # Home, Sobre, Skills, Experience, Projetos, Contato
│   └── ui/               # Button, Icons, LineFade, ProjectCard, ProjectModal, BackToTop
├── contexts/             # ThemeContext (dark/light mode)
├── data/                 # projects.ts, social.ts
├── hooks/
├── i18n/                 # Configuração + locales (pt-BR.json, en.json)
├── pages/                # ProjetosPage, NotFound (404)
├── types/                # project.ts, lottie.d.ts
└── utils/                # animations.ts
```

## ✨ Funcionalidades

- **SPA** com navegação suave por seções (react-scroll)
- **Navbar responsiva** — auto-hide no scroll down em mobile, sempre visível em desktop
- **Bottom navbar** com indicador de seção ativa (mobile)
- **Dark / Light mode** com persistência em localStorage
- **Internacionalização** — PT-BR e Inglês com troca dinâmica
- **Formulário de contato** funcional via EmailJS
- **Página de projetos** com modal detalhado (focus trap, Escape para fechar)
- **Timeline de experiência** com dados reais do currículo + download de CV
- **Efeito 3D na foto** com perspectiva via mouse (sem re-renders — DOM direto)
- **Animações** de entrada por seção com Framer Motion
- **Back to top** flutuante
- **404** com redirecionamento
- **SEO** — meta tags, Open Graph, robots.txt, sitemap.xml
- **Acessibilidade** — skip-to-content, aria-labels, validação de formulário por campo

## 📦 Como rodar

```bash
git clone https://github.com/EuFontoura/portfolio_v2.git
cd portfolio_v2
npm install
npm run dev
```

### Variáveis de ambiente

Crie um `.env` na raiz com:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |

## 📬 Contato

📧 [gabrielFMendonca@gmail.com](mailto:gabrielFMendonca@gmail.com) · 🔗 [LinkedIn](https://linkedin.com/in/gabriel-fontoura/) · 🐙 [GitHub](https://github.com/EuFontoura)

Feito com 💚 por Gabriel Fontoura
