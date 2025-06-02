// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from '../assets/logo.png';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="w-full bg-gradient-to-r from-purple-900 to-gray-900 shadow-md px-6 py-4 text-white fixed top-0 z-50">
//       <div className="max-w-10xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <img src={logo} alt="Aldiansyah Logo" className="w-10 h-auto object-contain" />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
//           <li><a href="#about" className="hover:text-blue-400 transition">services</a></li>
//           <li><a href="#portfolio" className="hover:text-blue-400 transition">portfolio</a></li>
//         </ul>

//         {/* Hamburger Icon */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden mt-4 space-y-3 px-4 pb-4 text-center bg-purple-800 rounded-lg shadow-lg animate-fade-in-down">
//           <li><a href="#" onClick={toggleMenu} className="block py-2 hover:text-blue-300 transition">Home</a></li>
//           <li><a href="#about" onClick={toggleMenu} className="block py-2 hover:text-blue-300 transition">About</a></li>
//           <li><a href="#portfolio" onClick={toggleMenu} className="block py-2 hover:text-blue-300 transition">Portfolio</a></li>
//         </ul>
//       )}
//     </nav>
//   );
// }





// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from '../assets/logo.png';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [portfolioOpen, setPortfolioOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     // Untuk toggle dropdown desktop (bisa juga hover)
//     const toggleServices = () => setServicesOpen(!servicesOpen);
//     const togglePortfolio = () => setPortfolioOpen(!portfolioOpen);

//     return (
//         <nav className="w-full bg-gradient-to-r from-purple-900 to-gray-900 shadow-md px-6 py-4 text-white fixed top-0 z-50">
//             <div className="max-w-7xl mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <img src={logo} alt="Aldiansyah Logo" className="w-10 h-auto object-contain" />

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex space-x-6 items-center">
//                     <li>
//                         <a href="/" className="px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition">Home</a>
//                     </li>

//                     {/* Services dropdown */}
//                     <li className="relative">
//                         <button
//                             onClick={toggleServices}
//                             className="flex items-center px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition focus:outline-none"
//                         >
//                             Services <ChevronDown size={16} className="ml-1" />
//                         </button>

//                         {servicesOpen && (
//                             <ul className="absolute left-0 mt-2 w-40 bg-purple-800 rounded-md shadow-lg z-50">
//                                 <li>
//                                     <a href="/services/web" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setServicesOpen(false)}>Web Development</a>
//                                 </li>
//                                 <li>
//                                     <a href="/services/seo" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setServicesOpen(false)}>SEO Optimization</a>
//                                 </li>
//                                 <li>
//                                     <a href="/services/marketing" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setServicesOpen(false)}>Digital Marketing</a>
//                                 </li>
//                             </ul>
//                         )}
//                     </li>

//                     {/* Portfolio dropdown */}
//                     <li className="relative">
//                         <button
//                             onClick={togglePortfolio}
//                             className="flex items-center px-3 py-1 rounded-md hover:bg-white/10 hover:text-white transition focus:outline-none"
//                         >
//                             Portfolio <ChevronDown size={16} className="ml-1" />
//                         </button>

//                         {portfolioOpen && (
//                             <ul className="absolute left-0 mt-2 w-40 bg-purple-800 rounded-md shadow-lg z-50">
//                                 <li>
//                                     <a href="/portfolio/websites" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setPortfolioOpen(false)}>Websites</a>
//                                 </li>
//                                 <li>
//                                     <a href="/portfolio/apps" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setPortfolioOpen(false)}>Apps</a>
//                                 </li>
//                                 <li>
//                                     <a href="/portfolio/graphics" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setPortfolioOpen(false)}>Graphics</a>
//                                 </li>
//                             </ul>
//                         )}
//                     </li>
//                 </ul>

//                 {/* Hamburger Icon */}
//                 <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden mt-4 bg-purple-800 rounded-lg shadow-lg animate-fade-in-down">
//                     <ul className="px-4 py-4 space-y-3 text-center">
//                         <li>
//                             <a href="/" onClick={toggleMenu} className="block py-2 hover:text-blue-300 transition">Home</a>
//                         </li>

//                         {/* Mobile Services with nested dropdown */}
//                         <li>
//                             <details className="group">
//                                 <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">
//                                     Services
//                                 </summary>
//                                 <ul className="pl-4 mt-2 space-y-1">
//                                     <li><a href="/services/web" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Web Development</a></li>
//                                     <li><a href="/services/seo" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">SEO Optimization</a></li>
//                                     <li><a href="/services/marketing" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Digital Marketing</a></li>
//                                 </ul>
//                             </details>
//                         </li>

//                         {/* Mobile Portfolio with nested dropdown */}
//                         <li>
//                             <details className="group">
//                                 <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">
//                                     Portfolio
//                                 </summary>
//                                 <ul className="pl-4 mt-2 space-y-1">
//                                     <li><a href="/portfolio/websites" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Websites</a></li>
//                                     <li><a href="/portfolio/apps" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Apps</a></li>
//                                     <li><a href="/portfolio/graphics" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Graphics</a></li>
//                                 </ul>
//                             </details>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }



// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from '../assets/logo.png';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [portfolioOpen, setPortfolioOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleServices = () => setServicesOpen(!servicesOpen);
//   const togglePortfolio = () => setPortfolioOpen(!portfolioOpen);

//   return (
//     <nav className="w-full bg-gradient-to-r from-purple-900 to-gray-900 shadow-md px-6 py-4 text-white fixed top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Aldiansyah Logo" className="w-10 h-auto object-contain" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <Link to="/" className="hover:text-blue-400 transition">Home</Link>
//           </li>

//           {/* Services dropdown */}
//           <li className="relative">
//             <button
//               onClick={toggleServices}
//               className="flex items-center hover:text-blue-400 transition focus:outline-none"
//             >
//               Services <ChevronDown size={16} className="ml-1" />
//             </button>

//             {servicesOpen && (
//               <ul className="absolute left-0 mt-2 w-40 bg-purple-800 rounded-md shadow-lg z-50">
//                 <li>
//                   <Link to="/services/web" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setServicesOpen(false)}>Web Development</Link>
//                 </li>
//                 <li>
//                   <Link to="/services/seo" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setServicesOpen(false)}>SEO Optimization</Link>
//                 </li>
//                 <li>
//                   <Link to="/services/marketing" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setServicesOpen(false)}>Digital Marketing</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Portfolio dropdown */}
//           <li className="relative">
//             <button
//               onClick={togglePortfolio}
//               className="flex items-center hover:text-blue-400 transition focus:outline-none"
//             >
//               Portfolio <ChevronDown size={16} className="ml-1" />
//             </button>

//             {portfolioOpen && (
//               <ul className="absolute left-0 mt-2 w-40 bg-purple-800 rounded-md shadow-lg z-50">
//                 <li>
//                   <Link to="/portfolio/websites" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setPortfolioOpen(false)}>Websites</Link>
//                 </li>
//                 <li>
//                   <Link to="/portfolio/apps" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setPortfolioOpen(false)}>Apps</Link>
//                 </li>
//                 <li>
//                   <Link to="/portfolio/graphics" className="block px-4 py-2 hover:bg-purple-700 transition" onClick={() => setPortfolioOpen(false)}>Graphics</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Hamburger Icon */}
//         <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-purple-800 rounded-lg shadow-lg animate-fade-in-down">
//           <ul className="px-4 py-4 space-y-3 text-center">
//             <li>
//               <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-blue-300 transition">Home</Link>
//             </li>

//             {/* Mobile Services with nested dropdown */}
//             <li>
//               <details className="group">
//                 <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">
//                   Services
//                 </summary>
//                 <ul className="pl-4 mt-2 space-y-1">
//                   <li><Link to="/services/web" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Web Development</Link></li>
//                   <li><Link to="/services/seo" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">SEO Optimization</Link></li>
//                   <li><Link to="/services/marketing" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Digital Marketing</Link></li>
//                 </ul>
//               </details>
//             </li>

//             {/* Mobile Portfolio with nested dropdown */}
//             <li>
//               <details className="group">
//                 <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">
//                   Portfolio
//                 </summary>
//                 <ul className="pl-4 mt-2 space-y-1">
//                   <li><Link to="/portfolio/websites" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Websites</Link></li>
//                   <li><Link to="/portfolio/apps" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Apps</Link></li>
//                   <li><Link to="/portfolio/graphics" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Graphics</Link></li>
//                 </ul>
//               </details>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }




// import { useState, useEffect, useRef } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [portfolioOpen, setPortfolioOpen] = useState(false);

//     const servicesRef = useRef(null);
//     const portfolioRef = useRef(null);

//     const toggleMenu = () => setIsOpen(!isOpen);
//     const toggleServices = () => setServicesOpen(!servicesOpen);
//     const togglePortfolio = () => setPortfolioOpen(!portfolioOpen);

//     // Auto-close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 servicesRef.current && !servicesRef.current.contains(event.target)
//             ) {
//                 setServicesOpen(false);
//             }
//             if (
//                 portfolioRef.current && !portfolioRef.current.contains(event.target)
//             ) {
//                 setPortfolioOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <nav className="w-full bg-gradient-to-r from-purple-900 to-gray-900 shadow-md px-6 py-4 text-white fixed top-0 z-50">
//             <div className="max-w-7xl mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <img src={logo} alt="Aldiansyah Logo" className="w-10 h-auto object-contain" />

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex space-x-6 items-center">
//                     <li>
//                         <a href="/" className="px-3 py-1 rounded-md hover:bg-white/10 transition">Home</a>
//                     </li>

//                     {/* Services dropdown */}
//                     <li className="relative" ref={servicesRef}>
//                         <button
//                             onClick={toggleServices}
//                             className="flex items-center px-3 py-1 rounded-md hover:bg-white/10 transition focus:outline-none"
//                         >
//                             Services <ChevronDown size={16} className="ml-1" />
//                         </button>
//                         {servicesOpen && (
//                             <ul className="absolute left-0 mt-2 w-44 bg-purple-800 rounded-md shadow-lg z-50">
//                                 <li><a href="/services/web" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setServicesOpen(false)}>Web Development</a></li>
//                                 <li><a href="/services/seo" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setServicesOpen(false)}>SEO Optimization</a></li>
//                                 <li><a href="/services/marketing" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setServicesOpen(false)}>Digital Marketing</a></li>
//                             </ul>
//                         )}
//                     </li>

//                     {/* Portfolio dropdown */}
//                     <li className="relative" ref={portfolioRef}>
//                         <button
//                             onClick={togglePortfolio}
//                             className="flex items-center px-3 py-1 rounded-md hover:bg-white/10 transition focus:outline-none"
//                         >
//                             Portfolio <ChevronDown size={16} className="ml-1" />
//                         </button>
//                         {portfolioOpen && (
//                             <ul className="absolute left-0 mt-2 w-44 bg-purple-800 rounded-md shadow-lg z-50">
//                                 <li><a href="/portfolio/websites" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setPortfolioOpen(false)}>Websites</a></li>
//                                 <li><a href="/portfolio/apps" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setPortfolioOpen(false)}>Apps</a></li>
//                                 <li><a href="/portfolio/graphics" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setPortfolioOpen(false)}>Graphics</a></li>
//                             </ul>
//                         )}
//                     </li>
//                 </ul>

//                 {/* Hamburger Icon */}
//                 <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
//                     {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden mt-4 bg-purple-800 rounded-lg shadow-lg animate-fade-in-down">
//                     <ul className="px-4 py-4 space-y-3 text-center">
//                         <li>
//                             <a href="/" onClick={toggleMenu} className="block py-2 hover:text-blue-300 transition">Home</a>
//                         </li>
//                         <li>
//                             <details className="group">
//                                 <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">Services</summary>
//                                 <ul className="pl-4 mt-2 space-y-1">
//                                     <li><a href="/services/web" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Web Development</a></li>
//                                     <li><a href="/services/seo" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">SEO Optimization</a></li>
//                                     <li><a href="/services/marketing" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Digital Marketing</a></li>
//                                 </ul>
//                             </details>
//                         </li>
//                         <li>
//                             <details className="group">
//                                 <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">Portfolio</summary>
//                                 <ul className="pl-4 mt-2 space-y-1">
//                                     <li><a href="/portfolio/websites" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Websites</a></li>
//                                     <li><a href="/portfolio/apps" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Apps</a></li>
//                                     <li><a href="/portfolio/graphics" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Graphics</a></li>
//                                 </ul>
//                             </details>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }




import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const togglePortfolio = () => setPortfolioOpen(!portfolioOpen);

  // Auto-close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (portfolioRef.current && !portfolioRef.current.contains(event.target)) {
        setPortfolioOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-purple-900 to-gray-900 shadow-md px-6 py-4 text-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Aldiansyah Logo" className="w-10 h-auto object-contain" />
        </Link>
 
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="px-3 py-1 rounded-md hover:bg-white/10 transition">Home</Link>
          </li>

          {/* Services dropdown */}
          <li className="relative" ref={servicesRef}>
            <button
              onClick={toggleServices}
              className="flex items-center px-3 py-1 rounded-md hover:bg-white/10 transition focus:outline-none"
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {servicesOpen && (
              <ul className="absolute left-0 mt-2 w-44 bg-purple-800 rounded-md shadow-lg z-50">
                <Link to="/services/web" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setServicesOpen(false)}>Web Development</Link>
                <Link to="/services/seo" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setServicesOpen(false)}>SEO Optimization</Link>
                <Link to="/services/marketing" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setServicesOpen(false)}>Digital Marketing</Link>
              </ul>
            )}
          </li>

          {/* Portfolio dropdown */}
          <li className="relative" ref={portfolioRef}>
            <button
              onClick={togglePortfolio}
              className="flex items-center px-3 py-1 rounded-md hover:bg-white/10 transition focus:outline-none"
            >
              Portfolio <ChevronDown size={16} className="ml-1" />
            </button>
            {portfolioOpen && (
              <ul className="absolute left-0 mt-2 w-44 bg-purple-800 rounded-md shadow-lg z-50">
                <li><Link to="/portfolio/Websites" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setPortfolioOpen(false)}>Websites</Link></li>
                <li><Link to="/portfolio/apps" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setPortfolioOpen(false)}>Apps</Link></li>
                <li><Link to="/portfolio/graphics" className="block px-4 py-2 hover:bg-purple-700" onClick={() => setPortfolioOpen(false)}>Graphics</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-purple-800 rounded-lg shadow-lg animate-fade-in-down">
          <ul className="px-4 py-4 space-y-3 text-center">
            <li>
              <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-blue-300 transition">Home</Link>
            </li>
            <li>
              <details className="group">
                <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">Services</summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li><Link to="/services/web" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Web Development</Link></li>
                  <li><Link to="/services/seo" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">SEO Optimization</Link></li>
                  <li><Link to="/services/marketing" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Digital Marketing</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex justify-center cursor-pointer py-2 hover:text-blue-300 transition select-none">Portfolio</summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li><Link to= "/portfolio/Websites" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Websites</Link></li>
                  <li><Link to="/portfolio/apps" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Apps</Link></li>
                  <li><Link to="/portfolio/graphics" onClick={toggleMenu} className="block py-1 hover:text-blue-300 transition">Graphics</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
