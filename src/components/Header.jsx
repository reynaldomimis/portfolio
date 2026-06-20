import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../helper/routerHelper";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => setMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass =
    "relative px-4 py-2 rounded-full font-medium text-white transition-all duration-200 hover:text-cyan-400 hover:scale-105 transform-gpu focus:outline-none focus:ring-0";

  return (
    <header className="sticky top-0 z-50 h-16">
      <div
        className="flex justify-between items-center px-4 py-3 flex-wrap
        backdrop-blur-md bg-gray-900/80 border-b border-white/10"
      >
        {/* Logo */}
        <Link to="/" className={navLinkClass}>
          <h1 className="text-3xl font-bold flex gap-2">
            {/* REM. */}
            <span
              className="
              bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 
              bg-[length:200%_200%] bg-clip-text text-transparent 
              hover:animate-gradient 
              hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]
              transition-all duration-300"
            >
              REM.
            </span>

            {/* Portfolio */}
            <span
              className="
              bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-500 
              bg-[length:200%_200%] bg-clip-text text-transparent 
              hover:animate-gradient 
              hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]
              transition-all duration-300
            "
            >
              Portfolio
            </span>
          </h1>
        </Link>

        {/* Hamburger */}
        {!menuOpen && (
          <button
            className="md:hidden z-50 relative w-8 h-8"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white my-1" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        )}

        {/* Close */}
        {menuOpen && (
          <button
            className="md:hidden z-50 relative w-8 h-8"
            onClick={() => setMenuOpen(false)}
          >
            <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-2" />
            <span className="block w-6 h-0.5 bg-white opacity-0" />
            <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-2" />
          </button>
        )}

        {/* Navigation */}
        <div
          ref={menuRef}
          className={`flex flex-col md:flex-row pl-4 md:space-x-2 text-lg w-full md:w-auto ${
            menuOpen ? "block border-b border-white/10" : "hidden"
          } md:flex`}
        >
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {/* <span className={borderEffect}></span> */}
              <span className="relative z-10">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
