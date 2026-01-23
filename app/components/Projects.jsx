import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects" className='w-full px-[12%] py-10 font-jetbrains scroll-mt-28'>
        <h4 className='text-center mb-2 text-lg'>What I Did</h4>
        <h2 className='text-center text-4xl sm:text-5xl'> ./Projects</h2>

        <p className='text-center max-w-full mx-auto mt-5 mb-12'>
            Including my university coursework projects and personal projects, you can find all of them in my <a href="https://github.com/yigituygun8?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-800 underline">GitHub repositories</a>. These projects help me grow and enhance my skills in software development as a future, aspiring software developer whilst improving my collaboration and problem-solving abilities. 
        </p>
        
        <div className='grid grid-cols-(--gridTemplateColumns) gap-8 my-10'>
            {workData.map(({title, description, bgImage, link}, index) => (
                <a href={link} target='_blank' rel="noopener noreferrer" key={index} style={{backgroundImage: `url(${bgImage})`}} className="aspect-square bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group"> {/* Group is for grouping everything in the div for hover effects */}
                    <div className='bg-[#ADD6EF] w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between gap-4 duration-400 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-bold text-lg'>{title}</h2>
                            <p className='text-sm text-gray-700'>{description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0_#000] group-hover:bg-lightHover transition'>
                            <Image src={assets.send_icon} alt="send icon" className="w-4"/>
                        </div>  
                    </div> {/* White box with title and description */}
                </a> // Project Card - holds background image and white box
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