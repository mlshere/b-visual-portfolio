import { Link } from "react-router-dom";
import { useState } from "react";

const MenuOverlay = ({ closeMenu }) => {
    const menuItems = [
        { to: '/', label: 'HOME' },
        { to: '/about', label: 'ABOUT' },
        { to: '/reel', label: 'REEL' },
        { to: '/works', label: 'WORKS' },
        { to: '/services', label: 'SERVICES' },
    ]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center text-4xl text-white space-y-4 transition-all duration-300">
          <button onClick={closeMenu} className="absolute top-4 right-6 text-3xl">
            ✕
          </button>
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={closeMenu}>
              <span className="hover:font-bold">{item.label}</span>
            </Link>
          ))}
        </div>
      )
        
}

export default MenuOverlay;