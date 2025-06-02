import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import test8 from '../assets/8.png';
import test9 from '../assets/8.png';
import test10 from '../assets/8.png';
import test11 from '../assets/8.png';
import test12 from '../assets/8.png';
import test13 from '../assets/8.png';
import test14 from '../assets/8.png';
import test15 from '../assets/cofee.png';
import test16 from '../assets/target.png';
import brand1 from '../assets/brand1.jpg';
import brand2 from '../assets/brand2.jpg';
import brand3 from '../assets/brand3.jpg';
import brand4 from '../assets/brand4.jpg';
import brand5 from '../assets/brand5.jpg';
import brand6 from '../assets/brand6.jpg';
import myAvatar from "../assets/23.jpg";
import people1 from '../assets/people/img_01.png';
import people2 from '../assets/people/img_02.png';
import people3 from '../assets/people/img_03.png';
import people4 from '../assets/people/img_04.png';
import people5 from '../assets/people/team_01.png';
import people6 from '../assets/people/team_03.png';
import { CheckCircle } from "lucide-react";
import icon1 from '../assets/icon/icon1.png';
import icon2 from '../assets/icon/icon2.png';
import icon3 from '../assets/icon/icon3.png';
import icon4 from '../assets/icon/icon4.png';

const portfolios = [
  {
    name: "Website Redesign for Tech Startup",
    image: test8,
    link: "https://example.com/portfolio1"
  },
  {
    name: "E-Commerce Store UI/UX",
    image: test9,
    link: "https://example.com/portfolio2"
  },
  {
    name: "Marketing Dashboard for SaaS",
    image: test10,
    link: "https://example.com/portfolio3"
  },
  {
    name: "Portfolio Website for Designer",
    image: test11,
    link: "https://example.com/portfolio4"
  },
  {
    name: "Brand Identity for Startup",
    image: test12,
    link: "https://example.com/portfolio5"
  },
  {
    name: "Mobile App UI Kit",
    image: test13,
    link: "https://example.com/portfolio6"
  },
  {
    name: "Real Estate Website",
    image: test14,
    link: "https://example.com/portfolio7"
  },
  {
    name: "Fitness App Landing Page",
    image: test9,
    link: "https://example.com/portfolio8"
  },
  {
    name: "Food Delivery UI Concept",
    image: test9,
    link: "https://example.com/portfolio9"
  },
  {
    name: "Travel Blog Platform",
    image: test9,
    link: "https://example.com/portfolio10"
  },
];

export default function Apps() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-900 mt-20 mb-20">
      <h1 className="text-4xl font-bold mb-4 text-center text-white">MY PORTFOLIO</h1>
      <p className="text-center mb-10 max-w-2xl mx-auto text-white mt-10">
        Discover some of the projects I've crafted with <span className="font-semibold text-purple-600">passion and precision across web, branding, and digital strategy.</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolios.map(({ name, image, link }, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white group  hover:translate-x-1 
                         hover:-translate-y-2 hover:ring-3 hover:ring-offset-2 hover:ring-neutral-400 hover:ring-offset-neutral-400 hover:bg-gradient-to-r 
                         hover:from-purple-400 hover:to-pink-600 transition duration-300 transform hover:text-white"
          >
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                {name}
              </h3>
              <div className="mt-3 inline-flex items-center text-purple-600 font-medium hover:underline cursor-pointer ">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FaShoppingCart className="mr-2 cursor-pointer" />
                </a>
                Checkout This Project
              </div>
            </div>
          </div>
        ))}
      </div>





      {/* <div className="mt-20 text-center mb-20">
        <h2 className="text-3xl font-bold mb-10">Why Choose My Services?</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          With a solid track record in crafting modern, user-centered digital experiences, I focus on delivering solutions that work. I combine creative strategy, technical knowledge, and business understanding to help your brand grow online. My services are designed with conversion, usability, and branding in mind.
        </p>
      </div> */}

      <div className="relative my-20 text-center px-4 ">
        {/* Gambar kiri */}
        <img
          src={test16}
          alt="Left Decor"
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-auto animate-bounce"
        />

        {/* Gambar kanan */}
        <img
          src={test15}
          alt="Right Decor"
          className="hidden md:block absolute right-0 top-1/1 transform -translate-y-1/2 w-50 h-auto animate-bounce"
        />

        {/* Konten utama */}
        <div className="relative z-10 max-w-3xl mx-auto text-white mt-30 mb-30">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose My Services?</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            With a solid track record in crafting modern, user-centered digital experiences, I am dedicated to delivering results-driven solutions tailored to your unique business needs.
            By blending creative strategy, technical expertise, and a deep understanding of market trends, I help brands <span className="font-semibold text-purple-600">accelerate growth, boost engagement, and maximize ROI.</span>
          </p>
          <p className="text-lg leading-relaxed mb-8 text-center">
            My approach ensures every project is designed with <span className="font-semibold text-purple-600">conversion optimization, seamless usability, and strong brand identity</span> at its core — empowering your business to thrive in a competitive digital landscape.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-20">Core Advantages</h3>
          <ul className="space-y-4 max-w-xl text-left">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-600 mt-1" size={20} />
              Customized digital solutions that align with your strategic goals and customer expectations.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-600 mt-1" size={20} />
              Proven expertise in responsive design, ensuring flawless experiences across all devices.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-600 mt-1" size={20} />
              Agile and transparent project management for timely delivery and continuous improvement.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-600 mt-1" size={20} />
              Strong focus on SEO best practices to enhance visibility and organic growth.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-600 mt-1" size={20} />
              Ongoing support and maintenance to keep your digital assets running smoothly and securely.
            </li>
          </ul>
        </div>
      </div>


      <div className="my-20">
        <h2 className="text-3xl font-bold text-center mt-40 text-white">⌘⌘⌘ Brands I've Worked With</h2>
        <div className="overflow-hidden relative">
          <div className="flex space-x-10 animate-scroll mt-15 ">
            {/* Ganti dengan logo asli sponsor/brand kamu */}
            <img src={brand1} alt="Brand 1" className="h-24 object-contain rounded-full" />
            <img src={brand2} alt="Brand 2" className="h-24 object-contain rounded-full" />
            <img src={brand3} alt="Brand 3" className="h-24 object-contain rounded-full" />
            <img src={brand4} alt="Brand 4" className="h-24 object-contain rounded-full" />
            <img src={brand5} alt="Brand 5" className="h-24 object-contain rounded-full" />
            <img src={brand6} alt="Brand 6" className="h-24 object-contain rounded-full" />
          </div>
        </div>
      </div>







      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4 text-center text-white"> ➱➱➱ Client Testimonials</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={people1}
              alt="Sarah"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700">
              "Amazing experience! Fast, responsive, and exactly what we needed for our launch."
            </p>
            <p className="mt-4 font-semibold text-purple-600">— Sarah, Startup Founder</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={people2}
              alt="Michael"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700">
              "Truly professional. Delivered beyond expectations and great communication throughout."
            </p>
            <p className="mt-4 font-semibold text-purple-600">— Michael, Creative Director</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={people3}
              alt="Alex"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700">
              "Exceptional design sense and always meets deadlines. Highly recommended!"
            </p>
            <p className="mt-4 font-semibold text-purple-600">— Alex, Product Manager</p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={people4}
              alt="Alex"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700">
              "Exceptional design sense and always meets deadlines. Highly recommended!"
            </p>
            <p className="mt-4 font-semibold text-purple-600">— Alex, Product Manager</p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={people5}
              alt="Alex"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700">
              "Exceptional design sense and always meets deadlines. Highly recommended!"
            </p>
            <p className="mt-4 font-semibold text-purple-600">— Alex, Product Manager</p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={people6}
              alt="Alex"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic text-gray-700">
              "Exceptional design sense and always meets deadlines. Highly recommended!"
            </p>
            <p className="mt-4 font-semibold text-purple-600">— Alex, Product Manager</p>
          </div>



        </div>
      </div>



      <div className="mt-20 relative flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0">
        {/* Konten tengah */}
        <div className="text-center z-10">
          <img
            src={myAvatar}
            alt="Aldiansyah Akbar"
            className="w-28 h-28 rounded-full mx-auto border-4 border-purple-500 shadow-lg animate-bounce"
          />
          {/* <h3 className="mt-4 text-xl font-bold">Aldiansyah Akbar</h3>
          <p className="text-white">⭆⭆⭆⭆ Digitalpreneur & Creative Developer</p> */}
        </div>

        {/* Gambar kiri */}
        <img
          src={icon1}
          alt="Left Decor"
          className="hidden md:block absolute left-30 top-1/4 transform -translate-y-1/2 w-40 h-auto animate-bounce"
        />
        <img
          src={icon1}
          alt="Left Decor"
          className="hidden md:block absolute left-0 top-1/1 transform -translate-y-1/5 w-20 h-auto animate-bounce"
        />

        <img
          src={icon4}
          alt="Left Decor"
          className="hidden md:block absolute left-70 top-1/1 transform -translate-y-1/5 w-20 h-auto animate-bounce"
        />

        {/* Gambar kanan */}
        <img
          src={icon2}
          alt="Right Decor"
          className="hidden md:block absolute right-0 top-1/1 transform -translate-y-1/2 w-40 h-auto animate-bounce"
        />


        <img
          src={icon2}
          alt="Right Decor"
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/3 w-40 h-auto animate-bounce"
        />

        <img
          src={icon3}
          alt="Right Decor"
          className="hidden md:block absolute right-80 top-2/1 transform -translate-y-1/1 w-20 h-auto animate-bounce"
        />
      </div>



    </section>
  );
}
