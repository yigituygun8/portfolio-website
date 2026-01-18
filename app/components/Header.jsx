import Image from "next/image";
import React from "react"; 
import { assets } from "@/assets/assets.js"; 
import { TypeAnimation } from 'react-type-animation'; // For typing animation effect

const Header = () => {
  return (
    <section className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <header>
        <Image
          src={assets.profile_img}
          alt="Photo of Osman Yiğit Uygun"
          className="w-48 rounded-full mx-auto"
          priority
        />
      </header>

      <h2 className="flex justify-center align items-center gap-2 text-xl md:text-3xl mb-3 font-ovo mt-6">
        <TypeAnimation
            sequence={["Hi, I'm Osman Yiğit Uygun!"]}
            speed={50}
            cursor={false}            
            wrapper="span"
        />
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h2>

      <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-ovo">
        <TypeAnimation
            sequence={["Sophomore CTIS Student at Bilkent University."]}
            speed={50}
            cursor={false}            
            wrapper="span"
        />          
      </h1>

      <p className="max-w-2xl mx-auto font-ovo mt-4 text-lg">
        I am a passionate and dedicated student at <strong>CTIS, Bilkent University</strong>, who is
        interested in <strong>backend and web development</strong>, doing research and side projects, and who loves <strong>teaching</strong> others while continuously learning every day.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="/resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">My Resume <Image src={assets.download_icon} alt="" className="w-4"></Image></a>
        
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">Contact Me <Image src={assets.right_arrow_white} alt="" className="w-4"></Image></a>

      </div>

    

    </section>
  );
};

export default Header;
