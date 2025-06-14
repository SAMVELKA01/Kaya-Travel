import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <motion.div
        className="max-w-3xl text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight mb-6">
          Explorez le monde avec{" "}
          <span className="text-yellow-400">KAYA Voyages</span>
        </h1>

        <motion.p
          className="text-lg md:text-xl mb-8 drop-shadow-md max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Voyagez en toute confiance vers des destinations de rêve, à petit
          prix, avec des expériences sur-mesure qui marqueront votre vie.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition duration-300"
            aria-label="Découvrir les destinations"
          >
            Découvrir les destinations
          </button>

          <button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            aria-label="Contactez-nous"
          >
            Contactez-nous
          </button>
        </div>

        {/* Section future : recherche */}
        {/* <div className="mt-12 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Rechercher une destination..."
            className="w-full p-3 rounded-full text-gray-800"
          />
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
