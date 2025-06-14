import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonésie",
    description:
      "Des plages paradisiaques, une culture spirituelle fascinante et des rizières à couper le souffle.",
    image:
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1925&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Paris, France",
    description:
      "La ville de l'amour : monuments iconiques, gastronomie raffinée et art de vivre unique.",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Tokyo, Japon",
    description:
      "Une fusion entre traditions millénaires, gratte-ciels futuristes et gastronomie incroyable.",
    image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Marrakech, Maroc",
    description:
      "Un univers coloré entre souks, palais, désert et cuisine aux mille saveurs.",
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Rome, Italie",
    description:
      "Le cœur de l’histoire romaine avec ses ruines antiques, ses places animées et ses plats savoureux.",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Zanzibar, Tanzanie",
    description:
      "Un joyau tropical avec ses eaux turquoise, ses plages immaculées et ses influences culturelles variées.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Nos <span className="text-blue-600">Destinations</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Des lieux d’exception sélectionnés pour vous offrir des souvenirs
          inoubliables. Explorez le monde avec KAYA Travel.
        </p>

        <AnimatePresence>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map(({ id, name, description, image }) => (
              <motion.div
                key={id}
                className="relative rounded-2xl overflow-hidden shadow-lg group transform hover:scale-[1.02] transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300 px-6 py-8 flex flex-col justify-end text-left text-white">
                  <h3 className="text-2xl font-bold mb-2">{name}</h3>
                  <p className="text-sm mb-4 leading-snug">{description}</p>
                  <button className="self-start bg-blue-600 hover:bg-blue-600 text-gray-900 font-semibold px-5 py-2 rounded-full shadow-md transition duration-300">
                    Découvrir
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Destinations;
