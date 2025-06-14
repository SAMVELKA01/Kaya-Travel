import React from "react";
import {
  FaStar,
  FaShieldAlt,
  FaThumbsUp,
  FaHeadset,
  FaGlobe,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    icon: <FaStar />,
    title: "Qualité Garantie",
    description:
      "Nous nous engageons à fournir des services d'excellence pour rendre votre voyage inoubliable.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Sécurité Maximale",
    description:
      "Votre sécurité est notre priorité grâce à des partenaires fiables et des conseils personnalisés.",
  },
  {
    id: 3,
    icon: <FaThumbsUp />,
    title: "Satisfaction Client",
    description:
      "Des milliers de voyageurs satisfaits témoignent de notre professionnalisme et de notre écoute.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "Support 24/7",
    description:
      "Une équipe dédiée à votre écoute pour vous accompagner avant, pendant et après votre voyage.",
  },
  {
    id: 5,
    icon: <FaGlobe />,
    title: "Couverture Internationale",
    description:
      "Nous couvrons de nombreuses destinations à travers le monde pour vous offrir le meilleur.",
  },
  {
    id: 6,
    icon: <FaClock />,
    title: "Réactivité & Rapidité",
    description:
      "Des réponses rapides et un traitement efficace de vos demandes, pour ne pas perdre de temps.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Pourquoi choisir <span className="text-blue-800">KAYA Travel</span> ?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Chez KAYA Travel, nous mettons tout en œuvre pour vous offrir une
          expérience de voyage inégalée, alliant qualité, sécurité, et
          satisfaction. Découvrez pourquoi nos clients nous font confiance année
          après année.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ id, icon, title, description }) => (
          <motion.div
            key={id}
            className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-3 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center w-16 h-16 mb-6 rounded-full bg-blue-800 text-white text-3xl shadow-md">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
