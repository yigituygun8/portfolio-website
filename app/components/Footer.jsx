import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <section id="footer" className='w-full px-[12%] py-10 font-jetbrains scroll-mt-28'>
            <h2 className='text-center text-5xl mb-8'>./EOF</h2>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt="Mail Icon" className='w-6'/>
                osmanuygun197@gmail.com
            </div>
            <div className='text-center text-sm sm:text-[16px] sm:flex items-center justify-between border-t border-gray-400 mx-[5%] mt-8'>
                <p className='mt-4 sm:mt-2'>© 2026 Osman Yiğit Uygun. All rights reserved.</p>
                <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-2'>
                    <li><a href="https://github.com/yigituygun8" target='_blank' rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/osmanyigituygun8/" target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/yigitt_uygn/" target='_blank' rel="noopener noreferrer">Instagram</a></li>

                </ul>
            </div>
    </section>
  )
}

export default Footer