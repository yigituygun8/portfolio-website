'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from "@/assets/assets.js"; 

const certifications = [
    {
        emoji: '🏅',
        title: 'Amazon University Engagement Program 2025',
        subtitle: 'SDE Track — Frontend, Backend, DevOps',
        details: [
            'Completed the Software Development Engineer (SDE) track covering end-to-end web development.',
            'Topics: Frontend (React, HTML/CSS), Backend (APIs, Microservices), DevOps (CI/CD, Cloud).',
            'Hands-on projects and collaborative workshops with Amazon engineers.'
        ],
        color: 'border-orange-300',
        hoverColor: 'hover:border-orange-400',
        bgAccent: 'bg-orange-50',
    },
    {
        emoji: '🏅',
        title: 'HackerRank Java Certificate',
        subtitle: 'Problem Solving & OOP',
        details: [
            'Certified proficiency in Java programming and object-oriented design.',
            'Covered data structures, algorithms, and problem-solving techniques.',
            'Demonstrated skills in Java collections, generics, and design patterns.'
        ],
        color: 'border-green-300',
        hoverColor: 'hover:border-green-400',
        bgAccent: 'bg-green-50',
    },
    {
        emoji: '🏅',
        title: 'Google Project Management',
        subtitle: 'Foundations of PM & Agile — Coursera',
        details: [
            'Google Career Certificates program covering project management fundamentals.',
            'Agile methodologies: Scrum, Kanban, Sprint planning and retrospectives.',
            'Project lifecycle, stakeholder management, risk assessment, and documentation.'
        ],
        color: 'border-blue-300',
        hoverColor: 'hover:border-blue-400',
        bgAccent: 'bg-blue-50',
    },
    {
        emoji: '🌐',
        title: 'Network Technician Career Path',
        subtitle: 'Cisco — Networking Fundamentals',
        details: [
            'Different types of networks and how they work. How devices send and receive data, types of network cabling, and how IP addresses find information on the Internet.',
            'Physical, data link and network layers, and how they work together to provide end-to-end connectivity.',
            'Benefits of cloud and virtualization. Troubleshooting knowledge to support endpoints, networks, and users as a member of a help desk team.'
        ],
        color: 'border-purple-300',
        hoverColor: 'hover:border-purple-400',
        bgAccent: 'bg-purple-50',
    },
    {
        emoji: '🎓',
        title: 'IELTS Academic — Band 7.0',
        subtitle: 'British Council — English Proficiency',
        details: [
            'Overall band score of 7.0 (Good User) in the IELTS Academic examination.',
            'Demonstrated proficiency in academic English across Listening, Reading, Writing, and Speaking modules.',
            'Qualified for international study programs and professional English communication.'
        ],
        color: 'border-red-300',
        hoverColor: 'hover:border-red-400',
        bgAccent: 'bg-red-50',
    }
];

const skillTag = ({ children }) => (
     <span className="px-2.5 py-1 bg-slate-100/80 text-slate-700 font-medium text-xs rounded-lg border border-slate-200/80 transition-transform duration-200 hover:scale-115">
        {children}
    </span>
) // For hover effect 

const About = () => {
    const [expandedCert, setExpandedCert] = useState(null);

    const toggleCert = (index) => {
        setExpandedCert(expandedCert === index ? null : index);
    };

  return (
    <section id="about" className='w-full px-6 sm:px-[8%] md:px-[12%] py-10 font-jetbrains scroll-mt-24'>
        <h4 className='text-center mb-2 text-lg'>Introduction</h4>
        <h2 className='text-center text-4xl sm:text-5xl'> ./About Me</h2>

        <div className='flex w-full flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 my-12 md:my-20'>
            <div className='w-48 sm:w-64 md:w-72 rounded-3xl overflow-hidden shrink-0'>
                <Image src={assets.user_image} alt='Photo of Yiğit' className='w-full h-auto rounded-3xl object-cover' />
            </div>
            <div className='flex-1 flex flex-col items-center md:items-start w-full '>
                <p className='mb-10 w-full text-center sm:text-left text-sm sm:text-base leading-relaxed'>
                    I am a third-year student at <strong>Bilkent University</strong>, pursuing a degree in <strong>Information Systems and Technologies (CTIS)</strong> with a CGPA of <strong>3.93/4.00</strong> (full scholarship).
                    Currently a <strong>QA Engineering Intern at Commencis</strong> on a European digital banking project, I am working toward an <strong>SDET (Software Development Engineer in Test)</strong> profile - combining hands-on <strong>QA</strong> exposure with <strong>full-stack development</strong> skills.
                    I also enjoy <strong>tutoring people</strong> and find it incredibly rewarding.
                </p>

                {/* Main Content Grid: Left (Info + Tools) vs Right (Certifications) */}
                <div className='w-[105%] grid grid-cols-1 xl:grid-cols-5 gap-8 items-start'>
                    
                    {/* Left Column (3 cols on xl): Info Cards + Tools & Frameworks */}
                    <div className='xl:col-span-3 flex flex-col gap-6 w-full'>
                        {/* 3 Info Cards: Unified Color Harmony & Spacious Padding */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 w-full'>
                            
                            {/* Card 1: Languages */}
                            <div className='border border-gray-200/90 rounded-2xl p-5 sm:p-6 bg-white hover-light flex flex-col justify-between h-full shadow-xs'> 
                                <div>
                                    <div className='flex items-center gap-2.5 mb-4'>
                                        <Image src={assets.code_icon} alt="Languages" className='w-6 h-6'></Image>
                                        <h3 className='font-bold text-gray-800 text-base'>Languages</h3>
                                    </div>
                                    <div className='flex flex-wrap gap-2 mt-4'>
                                        {skillTag({ children: 'Java' })}
                                        {skillTag({ children: 'JavaScript' })}
                                        {skillTag({ children: 'TypeScript' })}
                                        {skillTag({ children: 'Python' })}
                                        {skillTag({ children: 'C / C++' })}
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Education */}
                            <div className='border border-gray-200/90 rounded-2xl p-5 sm:p-6 bg-white hover-light flex flex-col justify-between h-full shadow-xs'> 
                                <div>
                                    <div className='flex items-center gap-2.5 mb-4'>
                                        <Image src={assets.edu_icon} alt="Education" className='w-6 h-6'></Image>
                                        <h3 className='font-bold text-gray-800 text-base'>Education</h3>
                                    </div>
                                    <p className='text-sm font-semibold text-gray-800 mt-4'>BSc in CTIS</p>
                                    <p className='text-xs text-gray-500 mt-0.5'>Bilkent University</p>
                                    
                                    <div className='flex flex-col gap-4 mt-5'>
                                        <span className='inline-flex items-center px-2.5 py-1 bg-slate-100/80 text-slate-700 font-semibold text-xs rounded-lg border border-slate-200/80 w-fit hover:scale-115 transition-transform duration-200'>
                                            ⭐ CGPA 3.93 / 4.00
                                        </span>
                                        <span className='inline-flex items-center px-2.5 py-1 bg-slate-100/80 text-slate-700 font-medium text-xs rounded-lg border border-slate-200/80 w-fit hover:scale-115 transition-transform duration-200'>
                                            🎓 Full Scholarship
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Projects */}
                            <a href="https://github.com/yigituygun8" target="_blank" rel="noopener noreferrer" className='group block h-full'>
                                <div className='border border-gray-200/90 rounded-2xl p-5 sm:p-6 bg-white hover-light flex flex-col justify-between h-full group-hover:border-slate-400 transition-colors shadow-xs'> 
                                    <div>
                                        <div className='flex items-center gap-2.5 mb-4'>
                                            <Image src={assets.project_icon} alt="Projects" className='w-6 h-6'></Image>
                                            <h3 className='font-bold text-gray-800 text-base'>Projects</h3>
                                        </div>
                                        <p className='text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed'>
                                            Available in GitHub Repositories
                                        </p>
                                    </div>
                                    <div className='mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-slate-700 font-semibold group-hover:text-blue-700'>
                                        <span>Click to View</span>
                                        <span className='group-hover:translate-x-1 transition-transform'>→</span>
                                    </div>
                                </div>
                            </a>

                        </div>

                        {/* Tools & Frameworks (Placed in Left Column) */}
                        <div className='w-full border border-gray-200 rounded-xl p-5 bg-gray-50/50 mt-2'>
                            <h4 className='text-gray-700 font-semibold mb-4 flex items-center gap-2'>
                                <span className='text-lg'>🛠️</span> Tools & Frameworks
                            </h4>
                            <ul className='flex items-center flex-wrap gap-3 sm:gap-4'>
                                 {toolsData.map(({title, icon}, index) => {
                                    return (
                                        <li key={index} 
                                            className='group relative flex items-center justify-center
                                                        w-12 h-12 sm:w-14 sm:h-14
                                                        border border-gray-300 rounded-lg bg-white
                                                        hover:-translate-y-1 hover:scale-105 hover:border-gray-500 hover:shadow-md
                                                        duration-300 cursor-pointer shadow-xs'>
                                            <Image src={icon} alt={title} className='w-7 h-7 object-contain sm:w-8 sm:h-8'></Image>
                                            
                                            {/* Custom Tooltip */}
                                            <span className='absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:-top-11 transition-all duration-200 pointer-events-none whitespace-nowrap z-30'>
                                                {title}
                                                {/* Tooltip Arrow */}
                                                <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45'></span>
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column (2 cols on xl): Certifications */}
                    <div className='xl:col-span-2 w-100'>
                        <h4 className='text-gray-700 font-semibold mb-4 flex items-center gap-2'>
                            <span className='text-lg'>📜</span> Certifications
                        </h4>
                        <ul className='flex flex-col gap-3.5'>
                            {certifications.map((cert, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => toggleCert(index)}
                                    className={`
                                        cursor-pointer rounded-xl border-[1.5px] transition-all duration-300 overflow-hidden
                                        ${cert.color} ${cert.hoverColor}
                                        ${expandedCert === index 
                                            ? `${cert.bgAccent} shadow-md scale-[1.01]` 
                                            : 'bg-white hover:shadow-sm hover:-translate-y-0.5'
                                        }
                                    `}
                                >
                                    {/* Card Header - always visible */}
                                    <div className='flex items-center gap-3 p-4'>
                                        <span className='text-2xl shrink-0'>{cert.emoji}</span>
                                        <div className='flex-1 min-w-0'>
                                            <p className='font-semibold text-gray-800 text-sm leading-tight'>{cert.title}</p>
                                            <p className='text-gray-500 text-xs mt-0.5'>{cert.subtitle}</p>
                                        </div>
                                        <span className={`text-gray-400 transition-transform duration-300 text-lg shrink-0 ${expandedCert === index ? 'rotate-180' : ''}`}>
                                            ▾
                                        </span>
                                    </div>

                                    {/* Expandable Details */}
                                    <div 
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                            expandedCert === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className='px-4 pb-4 pt-1 border-t border-gray-200/60'>
                                            <ul className='space-y-2 mt-2'>
                                                {cert.details.map((detail, i) => (
                                                    <li key={i} className='flex items-start gap-2 text-xs text-gray-600 leading-relaxed'>
                                                        <span className='text-gray-400 mt-0.5 shrink-0'>▸</span>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default About