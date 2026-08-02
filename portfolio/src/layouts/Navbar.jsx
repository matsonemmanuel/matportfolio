

import { useState } from "react";
import { navigation } from "../constants/navigation";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        
        {/* Logo */}
        <a
          href="#home"
          className="text-cyan-400 text-3xl font-bold cursor-pointer"
        >
          {"<EM />"}
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-white hover:text-cyan-400 transition-all duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <button
          className="hidden md:block bg-cyan-400 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 hover:scale-105 transition-all duration-300"
        >
          Download CV
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-cyan-400 text-3xl hover:scale-110 transition-transform duration-300"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 px-8 py-6">
          <ul className="flex flex-col gap-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-cyan-400 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}

            
          </ul>
        </div>
      )}

      
    </nav>
  );
}

export default Navbar;