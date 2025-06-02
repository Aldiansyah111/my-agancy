import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import test1 from '../assets/1.png';
import test2 from '../assets/2.png';
import test3 from '../assets/2.png';
import test4 from '../assets/4.png';
import test5 from '../assets/5.png';
import test6 from '../assets/6.png';

const services = [
  {
    name: "Landing Page Design",
    image: test1,
    link: "#",
  },
  {
    name: "Company Profile Website",
    image: test2,
    link: "#",
  },
  {
    name: "eCommerce Store",
    image: test3,
    link: "#",
  },
  {
    name: "Portfolio Website",
    image: test4,
    link: "#",
  },
  {
    name: "Blog Platform",
    image: test5 ,
    link: "#",
  },
  {
    name: "Web App Dashboard",
    image: test6,
    link: "#",
  },
  {
    name: "Custom CMS",
    image: test6,
    link: "#",
  },
  {
    name: "Booking System",
    image: test6,
    link: "#",
  },
  {
    name: "Real Estate Website",
    image: test6,
    link: "#",
  },
  {
    name: "News & Magazine Site",
    image: test6,
    link: "#",
  },
];

export default function SeoOptimization() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 mt-20 mb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-10">Web Development Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our range of professional web development services tailored for businesses,
          startups, and entrepreneurs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 ">
        {services.map(({ name, image, link }) => (
          <div
            key={name}
            className="bg-white/10 backdrop-blur-md rounded-lg shadow-md overflow-hidden  hover:translate-x-1 
                         hover:-translate-y-2 hover:ring-3 hover:ring-offset-2 hover:ring-neutral-400 hover:ring-offset-neutral-400 hover:bg-gradient-to-r 
                         hover:from-purple-400 hover:to-pink-600 transition duration-300 transform"
          >
            <img src={image} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold  text-gray-900 mb-2">{name}</h2>
              <a
                href={link}
                className="text-white hover:text-amber-500 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project ➤➤➤➤
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-xl p-8 shadow-md bg-gradient-to-r from-purple-400 to-fuchsia-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Choose Your Service</h2>
        <p className="text-gray-700 mb-6">
          Ready to take the next step? Select the service you need and checkout securely.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option value="">-- Select a Service --</option>
            {services.map(({ name }) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            <FaShoppingCart className=""/> Checkout Now
          </button>
        </form>
      </div>
    </section>
  );
}
