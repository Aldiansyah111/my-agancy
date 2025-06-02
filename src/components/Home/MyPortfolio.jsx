import { useRef, useEffect } from "react";
import test1 from '../../assets/1.png';
import test2 from '../../assets/2.png';
import test3 from '../../assets/3.png';
import test4 from '../../assets/4.png';
import test5 from '../../assets/5.png';
import test6 from '../../assets/6.png';

const portfolios = [
  {
    image: test1,
    title: "Marketplace Web3",
    link: "https://example.com/porto1",
  },
  {
    image: test2,
    title: "Landing Page Crypto",
    link: "https://example.com/porto2",
  },
  {
    image: test3,
    title: "NFT Collection",
    link: "https://example.com/porto3",
  },
  {
    image: test4,
    title: "Token ERC20",
    link: "https://example.com/porto4",
  },
  {
    image: test5,
    title: "Crypto Wallet UI",
    link: "https://example.com/porto5",
  },
  {
    image: test6,
    title: "Blockchain Explorer",
    link: "https://example.com/porto6",
  },
  {
    image: test5,
    title: "Smart Contract Audit",
    link: "https://example.com/porto7",
  },
  {
    image: test5,
    title: "DeFi Dashboard",
    link: "https://example.com/porto8",
  },
  {
    image: test5,
    title: "Token Presale UI",
    link: "https://example.com/porto9",
  },
  {
    image: test5,
    title: "Portfolio Crypto",
    link: "https://example.com/porto10",
  },
];

export default function MyPortfolio() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });

        // Optional: Reset to start if at end
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000); // setiap 3 detik auto scroll

    return () => clearInterval(interval); // clear kalau component unmount
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>

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
            {portfolios.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Lihat Project
                  </a>
                </div>
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
