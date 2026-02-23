export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "instagram" | "mail";
}

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/EuFontoura", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/gabriel-fontoura/", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com/eu_fontoura", icon: "instagram" },
  { name: "Email", url: "mailto:gabrielFMendonca@gmail.com", icon: "mail" },
];
