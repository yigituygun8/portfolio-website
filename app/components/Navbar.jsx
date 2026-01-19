// rafce snippet -> React Arrow Function Export Component
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets.js'

const Navbar = () => {
    // useRef is a React hook that allows you to create a reference to a DOM element or a value that persists across renders
    // Here, we use it to reference the side menu for opening and closing it and apply styles directly to DOM element
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled down
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setIsScrolled(true); // User has scrolled down more than 50 pixels
            } else {
                setIsScrolled(false); // User is at the top of the page so we set isScrolled to false
            }
        })
    }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <> {/* This is a fragment in React - to wrap multiple elements without adding extra nodes to the DOM */ }
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt="Header Background Color" className="w-full"></Image>
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center z-50 ${isScrolled ? 'bg-white/50 backdrop-blur-lg shadow-sm' : ''}`}>
            {/* Left: Logo */}
            <div className="flex-1 flex items-center">
                <a href="#top">
                    <span className="font-jetbrains">{'{'}O.Y.U{'}'}</span>
                </a>
            </div>

            {/* Center: Menu (absolutely centered) */}
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-ovo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isScrolled ? '' : 'bg-white/50 shadow-sm'}`}>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

            {/* Right: Buttons */}
            <div className="flex-1 flex items-center justify-end gap-4">
                <button>
                    <Image src={assets.moon_icon} alt="Theme Icon" className='w-6 cursor-pointer'></Image>
                </button>
                <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">Contact <Image src={assets.arrow_icon} className="w-3" alt='Arrow Icon'></Image>
                </a>
                <button className="block md:hidden ml-3" onClick={openMenu}>
                    <Image src={assets.menu_black} alt="Menu Icon" className="w-6 cursor-pointer"></Image>
                </button>
            </div>

            {/* Mobile Menu - shown on small screens - -right-64 is for hiding the menu off-screen at first */}
            <ul ref={sideMenuRef} className='md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 font-ovo h-screen bg-rose-50 transition-all duration-500 ease-in-out'>
                <div className='absolute right-6 top-6'>
                    <Image src={assets.close_black} alt="Close Icon" className='w-5 cursor-pointer' onClick={closeMenu}></Image>
                </div>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar