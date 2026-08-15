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
            className="w-full h-full scale-175 pl-3"
            priority
          />
        </div>
      </header>

      <h2 className="flex justify-center items-center gap-2 text-xl md:text-3xl mb-3 font-ovo mt-6">
        <TypeAnimation
          sequence={["Hi, I'm Osman Yiğit Uygun!"]}
          speed={50}
          cursor={false}
          wrapper="span"
        />
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h2>

      <h1 className="text-3xl sm:text-5xl lg:text-[66px]">
        <TypeAnimation
          sequence={[
            "Junior CTIS Student at Bilkent University",
            1000,
            "Aspiring SDET & Full-Stack Developer",
          ]}
          speed={50}
          cursor={false}
          wrapper="span"
        />
      </h1>

      <p className="max-w-2xl mx-auto mt-4 text-lg">
        I am a <strong>QA Engineering Intern at Commencis</strong> and a
        third-year <strong>CTIS student at Bilkent University</strong> (CGPA
        3.93/4.00, full scholarship), working toward an <strong>SDET</strong>{" "}
        profile by combining hands-on <strong>QA/Test Automation</strong>{" "}
        experience with <strong>full-stack development</strong> skills.
      </p>

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
