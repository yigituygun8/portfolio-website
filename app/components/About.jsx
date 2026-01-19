import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from "@/assets/assets.js"; 

const About = () => {
  return (
    <section id="about" className='w-full px-[12%] py-10 font-jetbrains scroll-mt-24'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-5xl'> ./About Me</h2>

        <div className='flex w-full flex-col md:flex-row items-center md:items-start justify-center gap-25 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl overflow-hidden'>
                <Image src={assets.user_image} alt='Photo of Yiğit' className='w-full rounded-3xl'></Image>
            </div>
            <div>
                <p className='mb-10 max-w-3xl'>
                    I am a sophomore student at <strong>Bilkent University</strong>, pursuing a degree in <strong>Computer Technology and Information Systems (CTIS)</strong>. My passion lies in <strong>backend and web development</strong>, where I enjoy creating projects and doing research in different areas of software development to expand my knowledge. I am also interested in data structures & algorithms to challenge myself and enhance my problem solving skills. Other than coursework, tutoring others is something I find incredibly rewarding, as it allows me to solidify my own understanding while also helping others grow. 
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => {
                        return (
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black'> 
                                <Image src={icon} alt={title} className='w-7 mt-3'></Image>
                                <h3 className='font-semibold text-gray-700 my-4'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        );
                    })}
                </ul>
                <h4 className='my-4 text-gray-700 font-semibold'>Tools & Frameworks:</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map(({title, icon}, index) => {
                        return (
                            <li key={index} className='flex items-center justify-center p-2.5 w-14 border border-gray-400 rounded-lg hover:-translate-y-1 duration-300 cursor-pointer'>
                                <Image src={icon} alt={title} className='w-6 h-6 object-contain sm:w-9 sm:h-9'></Image>
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