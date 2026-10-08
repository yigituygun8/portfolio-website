import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets.js";
import { TypeAnimation } from "react-type-animation"; // For typing animation effect

const Header = () => {
  return (
    // h-screen yerine min-h-screen yapıldı. pt-28 ile navbarın arkasına kaçması kesin olarak engellendi.
    <section className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col justify-center items-center gap-4 font-ovo pt-28 pb-12">
      <header>
        {/* mt-32 ve md:mt-8 kaldırıldı. Esnek hizalama flex box'a bırakıldı. */}
        <div className="w-52 rounded-full overflow-hidden mx-auto">
          <Image
            src={assets.profile_img2}
            alt="Photo of Osman Yiğit Uygun"
            className=""
            priority
          />
        </div>
      </header>

      <h2 className="flex justify-center items-center gap-2 text-xl md:text-3xl mb-3 font-ovo mt-6">
        <TypeAnimation
          sequence={["Hi, I'm Osman Yiğit Uygun!"]}
          speed={75}
          cursor={false}
          wrapper="span"
        />
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h2>

      <h1 className="text-3xl sm:text-5xl lg:text-[66px]">
        <TypeAnimation
          sequence={[
            "CTIS Student @ Bilkent University",
            1500,
            "Erasmus+ Exchange @ FH Oberösterreich, Austria",
            1500,
            "Full-Stack · Mobile · QA / SDET Developer",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          cursor={false}
          wrapper="span"
        />
      </h1>

      <ul className="max-w-2xl mx-auto mt-3 mb-2 text-base sm:text-lg space-y-2.5 text-left inline-flex flex-col text-gray-700">
        <li className="flex items-start gap-2.5">
          <span className="text-blue-600 font-bold mt-0.5 shrink-0">▸</span>
          <span>
            Third-year <strong>CTIS student at Bilkent University</strong> (CGPA 3.93/4.00, full scholarship)
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-blue-600 font-bold mt-0.5 shrink-0">▸</span>
          <span>
            Currently on an <strong>Erasmus+ exchange semester at FH Oberösterreich (Austria)</strong>
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-blue-600 font-bold mt-0.5 shrink-0">▸</span>
          <span>
            Internship experience at <strong>Akbank</strong> (React Native) &amp; <strong>Commencis</strong> (QA Engineering)
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="text-blue-600 font-bold mt-0.5 shrink-0">▸</span>
          <span>
            Focused on <strong>full-stack web</strong>, <strong>mobile development</strong>, and <strong>QA / test automation</strong>
          </span>
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="/OsmanYiğitUygun_CV.pdf"
          download
          className="text-[18px] px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 scale-100 hover:scale-105 transition-transform duration-200 ease-out"
        >
          My Resume{" "}
          <Image src={assets.download_icon} alt="" className="w-4"></Image>
        </a>

        <a
          href="https://www.linkedin.com/in/osmanyigituygun8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] px-10 py-3 border border-white rounded-full bg-[#0c5094] text-white flex items-center gap-2 scale-100 hover:scale-105 transition-transform duration-200 ease-out"
        >
          LinkedIn
          <Image src={assets.linkedin_white} alt="" className="w-4"></Image>
        </a>
      </div>
    </section>
  );
};

export default Header;
