
import {NavLink} from 'react-router-dom'
//import {Menu, X } from 'lucide-react'
import Sidebar from "./sidebar"


interface NavLinkType {
    name: string
    path: string
}

const navLinks : NavLinkType[] =[
    {name: 'DASHBOARD', path: '/'},
    {name: 'FARM', path: '/farm'},
    {name: 'BOARDROOM', path: '/boardroom'},
    {name: 'BASEDEX', path: '/dex'}
]


export const Navbar = () => {
    return (
        <>    
            <header className='w-full fixed top-0 shadow-sm shadow-neutral-500 h-21 flex items-center z-10'>
                <Sidebar
                            links={[
                            { name: "BUY GoldCoin", href: "#" },
                            { name: "BUY GoldShare", href: "#" },
                            { name: "MINT NFT", href: "#" },
                            ]}
                />
                <nav className='flex justify-between items-center max-w-[1200px] w-full mx-auto'>
                    
                    <NavLink to='/' className='font-serif text-[28px] font-black tracking-wide text-[#C09028]'>
                        Gold Finance
                    </NavLink>
                    <ul className='flex items-center text-white gap-8 mr-8'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink to={link.path} className="text-secondary">{link.name}</NavLink>
                            </li>
                        ))}
                        <a href="https://chinwike.space" className="golden-btn">Connect</a>
                    </ul>
                </nav>
            </header>
        </>
    )
}

