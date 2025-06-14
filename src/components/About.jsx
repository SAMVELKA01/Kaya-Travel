import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAfrica, FaHeart, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="À propos"
          className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
            À propos de <span className="text-blue-800">KAYA Travel</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Fondée avec passion, <strong>KAYA Travel</strong> est une agence
            moderne qui conçoit des expériences de voyage uniques et mémorables.
            Notre mission : rendre chaque aventure fluide, enrichissante et sans
            souci, où que vous alliez.
          </p>

          {/* Valeurs */}
          <div className="space-y-5 mb-6">
            <div className="flex items-start gap-4">
              <FaGlobeAfrica className="text-blue-800 text-2xl mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Voyage Responsable
                </h4>
                <p className="text-gray-600">
                  Nous collaborons avec des partenaires locaux pour soutenir un
                  tourisme durable et respectueux des cultures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaUsers className="text-blue-800 text-2xl mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Équipe Passionnée
                </h4>
                <p className="text-gray-600">
                  Nos conseillers dévoués vous accompagnent avant, pendant et
                  après votre voyage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaHeart className="text-blue-800 text-2xl mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Expériences Sur-Mesure
                </h4>
                <p className="text-gray-600">
                  Chaque itinéraire est pensé pour vous : que ce soit
                  l’aventure, le luxe, ou la découverte culturelle.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-900 transition duration-300"
            >
              Contactez-nous pour votre prochain voyage
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
