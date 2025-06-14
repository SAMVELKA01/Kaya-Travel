import React from "react";
import {
  FaPlane,
  FaHotel,
  FaGlobeAfrica,
  FaPassport,
  FaCar,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Réservation de Vols",
    description:
      "Profitez des meilleurs tarifs pour vos voyages internationaux et domestiques avec des compagnies fiables.",
    icon: <FaPlane className="text-blue-600 text-4xl" />,
  },
  {
    id: 2,
    title: "Hôtels & Hébergements",
    description:
      "Nous vous proposons une large sélection d’hôtels confortables et bien situés, adaptés à tous les budgets.",
    icon: <FaHotel className="text-green-600 text-4xl" />,
  },
  {
    id: 3,
    title: "Circuits Touristiques",
    description:
      "Explorez les plus belles destinations avec des itinéraires personnalisés, culturels ou d’aventure.",
    icon: <FaGlobeAfrica className="text-yellow-500 text-4xl" />,
  },
  {
    id: 4,
    title: "Assistance Visa",
    description:
      "Notre équipe vous accompagne dans toutes vos démarches administratives pour l’obtention de votre visa.",
    icon: <FaPassport className="text-purple-600 text-4xl" />,
  },
  {
    id: 5,
    title: "Location de Voitures",
    description:
      "Bénéficiez de tarifs avantageux pour vos déplacements avec des véhicules adaptés à tous vos besoins.",
    icon: <FaCar className="text-red-500 text-4xl" />,
  },
  {
    id: 6,
    title: "Support 24h/24",
    description:
      "Un service client dédié disponible à toute heure pour vous assister pendant votre voyage.",
    icon: <FaHeadset className="text-indigo-600 text-4xl" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-6">
          Nos <span className="text-blue-800">Services</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          Chez KAYA Travel, nous proposons une gamme complète de services pour
          faire de votre voyage une expérience fluide, agréable et inoubliable.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, description, icon }) => (
            <motion.div
              key={id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">{icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a
            href="#contact"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 transition duration-300 text-lg"
          >
            Contactez-nous pour en savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
