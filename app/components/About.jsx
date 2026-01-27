import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from "@/assets/assets.js"; 

const About = () => {
  return (
    <section id="about" className='w-full px-6 sm:px-[8%] md:px-[12%] py-10 font-jetbrains scroll-mt-24'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-4xl sm:text-5xl'> ./About Me</h2>

        <div className='flex w-full flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 my-12 md:my-20'>
            <div className='w-48 sm:w-64 md:w-72 rounded-3xl overflow-hidden shrink-0'>
                <Image src={assets.user_image} alt='Photo of Yiğit' className='w-full h-auto rounded-3xl object-cover' />
            </div>
            <div className='flex-1 flex flex-col items-center md:items-start'>
                <p className='mb-10 max-w-full text-center sm:text-left sm:max-w-4xl text-sm sm:text-base leading-relaxed'>
                    I am a sophomore student at <strong>Bilkent University</strong>, pursuing a degree in <strong>Information Systems and Technologies (CTIS)</strong>. My passion lies in <strong>backend and web development</strong>, where I enjoy creating projects and doing research in different areas of software development to expand my knowledge. I am also interested in <strong>data structures & algorithms</strong> to challenge myself and enhance my problem solving skills. Other than coursework, <strong>tutoring others</strong> is something I find incredibly rewarding, as it allows me to solidify my own understanding while also helping others grow. 
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => {
                        const isLast = index === infoList.length - 1;
                        const content = (
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover-light flex flex-col items-center sm:items-start'> 
                                <Image src={icon} alt={title} className='w-7 mt-3'></Image>
                                <h3 className='font-semibold text-gray-700 my-4'>{title}</h3>
                                <p className='text-gray-600 text-sm text-center sm:text-left'>{description}</p>
                            </li>
                        );
                        return isLast ? (
                            <a href="https://github.com/yigituygun8" target="_blank" rel="noopener noreferrer" key={index}> {/* noopener and noreferrer are security features to prevent the new page from having access to the window object of the page that opened it */}
                                {content}
                            </a>
                        ) : (
                            content                           
                        );
                    })}
                </ul>
                <h4 className='text-center sm:text-left my-4 text-gray-700 font-semibold'>Tools & Frameworks:</h4>
                <ul className='flex items-center justify-center flex-wrap gap-3 sm:gap-5 sm:justify-start'>
                    {toolsData.map(({title, icon}, index) => {
                        return (
                            <li key={index} className='flex items-center justify-center
                                                        w-16 h-16
                                                        sm:w-14 sm:h-14
                                                        border border-gray-400 rounded-lg
                                                        hover:-translate-y-1 hover:scale-105
                                                        duration-300 cursor-pointer'>
                                <Image src={icon} alt={title} className='w-8 h-8 object-contain sm:w-9 sm:h-9'></Image>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
        
    </section>
  )
}

export default About