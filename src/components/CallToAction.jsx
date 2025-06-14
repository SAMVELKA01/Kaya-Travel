import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-20 px-6 text-white text-center"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Prêt pour votre prochaine aventure ?
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Réservez dès maintenant avec KAYA Travel et bénéficiez d’offres
          exclusives. Votre voyage de rêve n’a jamais été aussi proche !
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="#reservation"
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-50 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Réserver Maintenant
          </motion.a>
          <motion.a
            href="#services"
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            En savoir plus
          </motion.a>
        </div>
        <p className="mt-10 text-sm opacity-80 max-w-md mx-auto">
          Pas encore prêt ? Pas de souci, contactez notre équipe pour une
          consultation gratuite.
        </p>
      </motion.div>
    </section>
  );
};

export default CallToAction;
