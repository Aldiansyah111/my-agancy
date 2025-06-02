import { ChevronDown, User } from "lucide-react";
import leftImg from "../../assets/2-Photoroom.png";
import rightImg from "../../assets/3-Photoroom.png";
import myAvatar from "../../assets/23.jpg";

import {
  AiFillAlipayCircle,
  AiFillApple,
  AiFillBehanceCircle,
  AiFillAppstore,
  AiFillGift,
  AiFillTikTok,
  AiFillWeiboSquare,
} from "react-icons/ai";

export default function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-r from-purple-900 to-gray-900 text-white px-4 py-16 overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-center mb-20 animate-ping text-amber-500">
        WELCOME EVERYONE
      </h1>

      {/* Gambar Kiri */}
      <img
        src={leftImg}
        alt="Left visual"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 sm:w-1/3 h-auto opacity-30 md:opacity-100"
      />

      {/* Gambar Kanan */}
      <img
        src={rightImg}
        alt="Right visual"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 sm:w-1/3 h-auto opacity-30 md:opacity-100"
      />

      {/* Card Konten Tengah */}
      <div className="relative z-10 max-w-md mx-auto text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg mt-20 md:mt-40 mb-20 md:mb-32 hover:bg-white/20 transition-colors duration-300">
        {/* Avatar bulat */}
        <img
          src={myAvatar}
          alt="My Avatar"
          className="mx-auto mb-4 w-24 h-24 rounded-full object-cover border-4 border-white/40 shadow-md"
        />

        <h1 className="text-2xl sm:text-3xl font-bold mb-2 animate-color-shift">
          Hi, I'm Aldiansyah
        </h1>
        <p className="text-base sm:text-lg mb-4 font-semibold tracking-wide uppercase">
          A DIGITALPRENEUR & CREATIVE DEVELOPER
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-3xl sm:text-4xl text-amber-500">
        <AiFillAlipayCircle className="hover:text-purple-600 hover:scale-125 cursor-pointer transition-transform duration-300" />
        <AiFillApple className="hover:text-purple-600 hover:scale-125 cursor-pointer transition-transform duration-300" />
        <AiFillBehanceCircle className="hover:text-purple-600 hover:scale-125 cursor-pointer transition-transform duration-300" />
        <AiFillAppstore className="hover:text-purple-600 hover:scale-125 cursor-pointer transition-transform duration-300" />
        <AiFillGift className="hover:text-purple-600 hover:scale-125 cursor-pointer transition-transform duration-300" />
        <AiFillTikTok className="hover:text-purple-600 hover:scale-125 cursor-pointer transition-transform duration-300" />
        <AiFillWeiboSquare className="hover:text-purple-600 hover:scale-125 cursor-pointer transition-transform duration-300" />
      </div>
    </section>
  );
}
