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
  description: "Osman Yiğit Uygun's personal portfolio website.",
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
