import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* À propos */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-6">KAYA Travel</h3>
          <p className="text-gray-400 leading-relaxed">
            Votre partenaire de confiance pour des voyages inoubliables.
            Explorez le monde avec nous, en toute sérénité.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-6">
            Liens utiles
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#destinations"
                className="hover:text-blue-400 transition-colors"
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-6">
            Contactez-nous
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Abidjan, Côte d’Ivoire</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <a
                href="tel:+2250123456789"
                className="hover:text-blue-400 transition-colors"
              >
                +225 01 23 45 67 89
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:contact@kayatravel.ci"
                className="hover:text-blue-400 transition-colors"
              >
                contact@kayatravel.ci
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter + réseaux sociaux */}
        <div>
          <h4 className="text-xl font-semibold text-blue-500 mb-6">
            Newsletter
          </h4>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              S’abonner
            </button>
          </form>
          <div className="flex gap-6 mt-10 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KAYA Travel. Tous droits réservés.
        <br />
        <a href="#privacy" className="hover:text-blue-400 transition-colors">
          Politique de confidentialité
        </a>{" "}
        |{" "}
        <a href="#terms" className="hover:text-blue-400 transition-colors">
          Conditions d’utilisation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
