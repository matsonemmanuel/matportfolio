import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { navigation } from "../constants/navigation";
import Logo from "../components/common/Logo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-slate-900 shadow-lg z-50 overflow-x-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <a href="#home">
          <Logo />
        </a>

        {/* Navigation */}

        <ul className="hidden md:flex gap-10">

          {navigation.map((item) => (

            <li key={item.id}>

              <a
                href={item.href}
                className={`
                  relative
                  pb-2
                  transition-all
                  duration-300
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }
                `}
              >
                {item.title}

                {activeSection === item.href.replace("#", "") && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded-full"></span>
                )}

              </a>

            </li>

          ))}

        </ul>

        {/* Desktop Button */}

        <a
          href="/cv.pdf"
          download
          className="
            hidden
            md:inline-flex
            items-center
            bg-cyan-400
            text-slate-900
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:bg-cyan-300
            transition-all
            duration-300
          "
        >
          Download CV
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-cyan-400 text-3xl p-2"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (

        <div
          className="
            absolute
            top-full
            left-0
            w-full
            bg-slate-800
            shadow-xl
            md:hidden
            z-50
          "
        >

          <ul className="flex flex-col px-4 py-6 gap-6">

            {navigation.map((item) => (

              <li key={item.id}>

                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block
                    text-white
                    hover:text-cyan-400
                    transition
                  "
                >
                  {item.title}
                </a>

              </li>

            ))}

          </ul>

          <div className="px-4 pb-6">

            <a
              href="/cv.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="
                block
                w-full
                text-center
                bg-cyan-400
                text-slate-900
                py-3
                rounded-lg
                font-semibold
                hover:bg-cyan-300
                transition
              "
            >
              Download CV
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;