import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fermer le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex items-center justify-between z-50">
      <h1 className="text-2xl font-bold text-blue-800 cursor-pointer">
        <Link to="hero" smooth={true} duration={500} onClick={handleLinkClick}>
          KAYA Travel
        </Link>
      </h1>

      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
      </button>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white shadow-md px-8 py-4 space-y-4 md:space-y-0 md:space-x-6 md:flex md:static md:bg-transparent md:shadow-none md:w-auto`}
      >
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80} // décale pour tenir compte de la hauteur navbar
            className="text-gray-700 hover:text-blue-800 cursor-pointer"
            onClick={handleLinkClick}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="destinations"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-700 hover:text-blue-800 cursor-pointer"
            onClick={handleLinkClick}
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-700 hover:text-blue-800 cursor-pointer"
            onClick={handleLinkClick}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-700 hover:text-blue-800 cursor-pointer"
            onClick={handleLinkClick}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-gray-700 hover:text-blue-800 cursor-pointer"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
