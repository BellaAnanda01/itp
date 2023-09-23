import React, { useState } from 'react'
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <nav className="bg-[#E9E3D7] border-b border-solid border-slate-600 font-sniglet w-[100vw] sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
                <div className="flex-shrink-0 font-bold tracking-wider">
                ITP 2023
                </div>
                <div className="hidden md:block font-sniglet">
                <NavbarMenu />
                </div>
                <button
                type="button"
                className="md:hidden bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-white focus:outline-none focus:bg-white focus:text-black transition duration-150 ease-in-out"
                onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
                </button>
            </div>
            <div className="md:hidden font-sniglet">
                {showMobileMenu && <NavbarMenu />}
            </div>
        </nav>
    )
}

export default Navbar