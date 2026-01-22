import React from 'react'
import Image from 'next/image'
import { serviceData, assets } from "@/assets/assets.js";

const Services = () => {
  return (
    <section id="services" className='w-full px-[12%] py-10 font-jetbrains scroll-mt-28'>
        <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
        <h2 className='text-center text-5xl mb-8'> ./My Services</h2>

        <p className='text-center max-w-4xl mx-auto mt-5 mb-12'>
            I&apos;ve been a <strong>private tutor</strong> for university and high school students for about 1.5 years, alongside my <strong>undergraduate teaching assistant experience</strong> at Bilkent University.
            I also provide <strong>frontend, backend, and database development services</strong> for small to medium-scale projects.
        </p>
        
        <div className='grid grid-cols-(--gridTemplateColumns) gap-6 my-10'>
                        {serviceData.map(({icon, title, description, link}, index) => {
                                const isLast = index === serviceData.length - 1;
                                return (
                                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover-light'>
                                        <Image src={icon} alt={title} className='w-10' />
                                        <h3 className='text-[17px] my-4 text-gray-700 font-bold'>{title}</h3>
                                        <p className='text-sm text-gray-600 leading-5'>
                                            {description}
                                        </p>
                                        {isLast ? (
                                            <a href={link} className='flex items-center gap-2 text-sm mt-5' target="_blank" rel="noopener noreferrer">
                                                See My GitHub Repositories
                                                <Image src={assets.right_arrow} alt="" className='w-4' />
                                            </a>
                                        ) : (
                                            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                                                Contact Me
                                                <Image src={assets.right_arrow} alt="" className='w-4' />
                                            </a>
                                        )}
                                    </div>
                                );
                        })}
        </div>
    </section>
  )
}

export default Services