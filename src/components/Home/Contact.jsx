import React from "react";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineMail,
} from "react-icons/ai";
import { FaSpotify, FaWhatsapp } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";


const contacts = [
    {
        name: "LinkedIn",
        icon: <AiFillLinkedin className="text-blue-600" />,
        url: "https://www.linkedin.com/in/username",
        img: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // contoh thumbnail
    },
    {
        name: "GitHub",
        icon: <AiFillGithub className="text-gray-800" />,
        url: "https://github.com/username",
        img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
        name: "Instagram",
        icon: <AiFillInstagram className="text-pink-500" />,
        url: "https://instagram.com/username",
        img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    {
        name: "YouTube",
        icon: <AiFillYoutube className="text-red-600" />,
        url: "https://youtube.com/channel/yourchannel",
        img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
        name: "Spotify",
        icon: <FaSpotify className="text-green-500" />,
        url: "https://open.spotify.com/user/username",
        img: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    },
    {
        name: "Gmail",
        icon: <AiOutlineMail className="text-red-400" />,
        url: "mailto:your.email@gmail.com",
        img: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp className="text-green-600" />,
        url: "https://wa.me/1234567890",
        img: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp className="text-green-600" />,
        url: "https://wa.me/1234567890",
        img: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    },

    {
        name: "WhatsApp",
        icon: <FaWhatsapp className="text-green-600" />,
        url: "https://wa.me/1234567890",
        img: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    }, ,
];

export default function Contact() {
    return (
        <section className="max-w-6xl mx-auto p-4 sm:p-6 mb-40 ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
                Contact Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {contacts.map(({ name, icon, url, img }) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-4 flex items-center gap-4 hover:translate-x-1 
                         hover:-translate-y-2 hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500 hover:bg-gradient-to-r 
                         hover:from-purple-400 hover:to-pink-600 transition duration-300 transform"
                    >
                        <img
                            src={img}
                            alt={`${name} thumbnail`}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-300"
                        />
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-gray-900">
                                {icon} {name}
                            </h3>
                            <a href={url} className="text-sm text-white break-all">
                                click here
                            </a>
                        </div>
                    </a>
                ))}
            </div>
        </section>


    );
}
