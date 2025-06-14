import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Laura Johnson",
    title: "Voyageuse satisfaite",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "KAYA Travel a rendu mon voyage à Bali inoubliable. Service au top et très professionnel !",
    rating: 5,
  },
  {
    id: 2,
    name: "Tomas James",
    title: "Client fidèle",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    message:
      "J’ai utilisé KAYA Travel plusieurs fois, toujours satisfait des tarifs et de la qualité.",
    rating: 4,
  },
  {
    id: 3,
    name: "Kikyo Sakuna",
    title: "Amatrice de découvertes",
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
    message:
      "Les circuits touristiques proposés sont vraiment bien pensés, merci KAYA Travel !",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-4">
          Témoignages
        </h2>
        <p className="text-gray-600 text-lg">
          Ce que nos voyageurs disent de nous
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map(({ id, name, title, photo, message, rating }) => (
          <motion.div
            key={id}
            className="bg-gray-50 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
            />

            {/* Decorative Quote */}
            <div className="text-5xl text-blue-200 leading-none mb-2">“</div>

            <p className="text-gray-700 italic mb-4 leading-relaxed">
              {message}
            </p>

            {/* Rating */}
            <div className="flex justify-center mb-2 text-yellow-400">
              {Array.from({ length: rating }, (_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h3 className="text-lg font-bold text-blue-800">{name}</h3>
            <span className="text-gray-500 text-sm">{title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
