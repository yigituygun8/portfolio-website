import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects" className='w-full px-5 sm:px-[8%] md:px-[12%] py-10 font-jetbrains scroll-mt-28'>
        <h4 className='text-center mb-2 text-lg'>What I Did</h4>
        <h2 className='text-center text-3xl sm:text-4xl md:text-5xl'> ./Projects</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base leading-relaxed'>
            Six projects that show how I work: full-stack, mobile and applied AI, from solo builds to team projects. The rest — coursework included — lives in my <a href="https://github.com/yigituygun8?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline">GitHub repositories</a>.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 my-10'>
            {workData.map(({title, description, tech, badge, bgImage, link}) => (
                <a
                    key={title}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        <Image
                            src={bgImage}
                            alt={`${title} preview`}
                            fill
                            sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-[11px] font-semibold text-gray-500">{badge}</span>
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors duration-300 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                                    <path d="M7 17 17 7M9 7h8v8" />
                                </svg>
                            </span>
                        </div>

                        <h3 className="mt-2 text-[15px] font-bold leading-snug text-gray-900">{title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-gray-600">{description}</p>

                        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                            {tech.map((item) => (
                                <li key={item} className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-600">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </a>
            ))}
        </div>

        <a href="https://github.com/yigituygun8?tab=repositories" target="_blank" rel="noopener noreferrer" className='max-w-lg flex items-center justify-center gap-2 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lightHover hover:scale-105 duration-300 transition'>
            More of Projects & Personal Notes
            <Image src={assets.right_arrow_bold} alt="" className='w-4'/>
            </a>
    </section>
  )
}

export default Projects
