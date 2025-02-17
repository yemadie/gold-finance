import { useState } from "react"
import {NavLink} from 'react-router-dom'
import {Menu, X } from 'lucide-react'



interface NavLinkType {
    name: string
    path: string
}

const navLinks : NavLinkType[] =[
    {name: 'Dashboard', path: '/'},
    {name: 'Farm', path: '/farm'},
    {name: 'Boadroom', path: '/boadroom'},
    {name: 'BaseDex', path: '/dex'}
]


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>    
            <header className='w-full fixed top-0 shadow-sm shadow-neutral-500 h-16 flex items-center z-10'>
                <button aria-labelledby='Toggle Sidebar' className='flex items-center justify-center p-2 bg-gray-800 text-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}    
                    >
                        {isMenuOpen ? (
                            <X className="text-secondary" size={24}/>
                        ) : (
                            <Menu className="text-secondary" size={24} />
                        )}
                </button>
                <nav className='flex justify-between items-center w-full px-4'>
                    
                    <NavLink to='/' className='font-sans text-amber-600 text-3xl'>
                        Gold Finance
                    </NavLink>
                    <ul className='flex items-center text-white gap-8'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink to={link.path} className="text-secondary">{link.name}</NavLink>
                            </li>
                        ))}
                        <a href="https://chinwike.space" className="golden-btn">Connect</a>
                    </ul>
                </nav>
            </header>

            <div
                className={`fixed top-0 left-0 h-full w-64 text-white p-5 transition-transform duration-300 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-white"
                >
                    <X size={24} />
                </button>
                <nav className="mt-10">
                    {navLinks.map((link) => (
                        <NavLink
                        key={link.name}
                        to={link.path}
                        className="block py-2 px-4 hover:bg-gray-700 rounded"
                        onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                        >
                        {link.name}
                        </NavLink>
                    ))}
                </nav> 
            </div>
        </>
    )
}

