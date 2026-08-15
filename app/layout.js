import { Outfit, Ovo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-outfit',
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"], variable: '--font-ovo',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["400"], variable: '--font-jetbrains',
});

export const metadata = {
  title: "Osman Yiğit Uygun",
  description: "Osman Yiğit Uygun — Aspiring SDET | QA Engineering Intern at Commencis | CTIS Student at Bilkent University",
  keywords: ['Osman Yiğit Uygun', 'Yiğit Uygun', 'portfolio', 'student', 'QA Engineer', 'SDET', 'software testing', 'Commencis', 'quality assurance', 'test automation', 'Bilkent University', 'web developer', 'backend developer'],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${outfit.variable} ${ovo.variable} ${jetbrainsMono.variable} antialiased leading-7 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
