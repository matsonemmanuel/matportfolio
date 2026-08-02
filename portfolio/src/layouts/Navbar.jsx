

import { useState } from "react";
import { navigation } from "../constants/navigation";

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="text-cyan-400 text-3xl font-bold cursor-pointer">
          {"<EM />"}
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-white hover:text-cyan-400 transition duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <button className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300">
          Download CV
        </button>

      </div>

      {/* Temporary State Test */}
<div className="mt-24 text-center">

  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="bg-red-500 text-white px-6 py-2 rounded"
  >
    Toggle Menu
  </button>

  <p className="text-white mt-4">
    {isMenuOpen ? "Menu is Open" : "Menu is Closed"}
  </p>

</div>
    </nav>
  );
}

export default Navbar;