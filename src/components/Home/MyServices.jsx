import { useRef, useEffect } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaLock,
  FaDatabase,
  FaChartLine,
  FaCoins,
  FaRocket,
  FaGlobe
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={40} />,
    title: "Web Development",
    desc: "Membangun website modern & responsif",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Mobile App Dev",
    desc: "Aplikasi Android & iOS dengan performa tinggi",
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: "UI/UX Design",
    desc: "Desain antarmuka yang menarik & user-friendly",
  },
  {
    icon: <FaServer size={40} />,
    title: "Server Setup",
    desc: "Deploy server & hosting project kamu",
  },
  {
    icon: <FaLock size={40} />,
    title: "Cyber Security",
    desc: "Keamanan digital dan audit sistem",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Database Management",
    desc: "Optimasi dan manajemen database",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Digital Marketing",
    desc: "SEO, ads, dan growth strategi online",
  },
  {
    icon: <FaCoins size={40} />,
    title: "Web3 Integration",
    desc: "Integrasi blockchain ke produk kamu",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Startup Launching",
    desc: "Bantu kamu dari ide hingga launching",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "Domain & Hosting",
    desc: "Setup domain, hosting, dan email bisnis",
  },
];

export default function MyServices() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });

        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000); // Geser otomatis setiap 4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full"
          >
            ◀
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-8"
          >
            {services.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center text-center"
              >
                <div className="text-white mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
