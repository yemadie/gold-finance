import { useState } from "react";

interface SidebarProps {
  links: { name: string; href: string }[];
}

export default function Sidebar({ links }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
  
    const closeSidebar = () => setIsOpen(false);
  
    return (
      <>
        {/* Overlay (Only visible when sidebar is open) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-gray-400/40 backdrop-blur-sm z-10"
            onClick={closeSidebar}
          />
        )}
  
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-[#222B38] to-[#10161B] text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-64"
          } transition-transform duration-300 ease-in-out z-50`}
        >
            <h4 className="text-center mt-4 bg-none hover:text-gray-100 transition hover:bg-gray-400/40 cursor-pointer py-2">ACTIONS</h4>
          <nav className="flex flex-col mt-8 space-y-2 px-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[14px] text-start border border-[#BD9945] rounded-[8px] text-[#BD9945] p-2 bg-none hover:text-gray-100 transition hover:bg-gray-400/40"
              >
                {link.name}
              </a>
            ))}
            <div className="border-b border-gray-500 my-3"></div>
            <a href="/" className="text-center mt-4 bg-none hover:text-gray-100 transition hover:bg-gray-400/40 py-2">INFO</a>
            <a href="/" className="text-start bg-none hover:text-gray-100 transition hover:bg-gray-400/40 py-2">NFT DASHBOARD</a>
              <a
                href="/"
                className="text-[14px] text-start border border-[#BD9945] rounded-[8px] text-[#BD9945] p-2 bg-none hover:text-gray-100 transition hover:bg-gray-400/40"
              >
                CHART
              </a>
          </nav>
        </div>
            
        {/* Menu Button */}
        <button
          className="top-4 left-4 p-3 bg-none text-gray-100 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </>
    );
  }

