// import React, { useState } from "react";
// import LOGO from "../assets/logo.jpg";
// import {
//   FaBars,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaWhatsapp,
// } from "react-icons/fa";

// import { NavLink } from "react-router-dom";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const phoneNumber = "9352515020";
//   const message = "Hello, I want to know more about your Products & Services.";
//   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <div className="">
//       <div className="flex md:flex-row items-center md:justify-between justify-around md:p-1 p-0">

//         {/* Logo */}
//         <div className="md:w-1/4 w-1/2">
//           <img
//             onClick={() =>
//               window.scrollTo(
//                 { top: 0, behavior: "smooth" },
//                 (window.location.href = "/")
//               )
//             }
//             className="mix-blend-color-burn aspect-square cursor-pointer"
//             src={LOGO}
//             width={150}
//             height={150}
//             alt="Logo"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="p-2 rounded hover:bg-gray-200 transition md:hidden block"
//         >
//           <FaBars size={24} />
//         </button>

//         {/* Desktop Menu */}
//         <nav className="md:flex hidden justify-center gap-10 text-xl font-bold w-3/4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-green-600 font-semibold" : "text-gray-500"
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-green-600 font-semibold" : "text-gray-500"
//             }
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="/products"
//             className={({ isActive }) =>
//               isActive ? "text-green-600 font-semibold" : "text-gray-500"
//             }
//           >
//             Our Products
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-green-600 font-semibold" : "text-gray-500"
//             }
//           >
//             Contact
//           </NavLink>
//         </nav>

//         {/* Social Icons */}
//         <div className="md:flex gap-3 hidden px-5">
//           <a href="#" className="hover:text-green-500">
//             <FaFacebook size={20} />
//           </a>
//           <a href="#" className="hover:text-green-500">
//             <FaLinkedin size={20} />
//           </a>
//           <a
//             href="https://www.instagram.com/thermogreenenergy"
//             target="_blank"
//             className="hover:text-green-500"
//           >
//             <FaInstagram size={20} />
//           </a>
//           <a
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-500"
//           >
//             <FaWhatsapp size={20} />
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="md:hidden flex flex-col gap-4 text-lg font-semibold p-5 bg-white shadow-md">
//           <NavLink to="/" onClick={() => setMenuOpen(false)}>
//             Home
//           </NavLink>

//           <NavLink to="/about" onClick={() => setMenuOpen(false)}>
//             About
//           </NavLink>

//           <NavLink to="/products" onClick={() => setMenuOpen(false)}>
//             Our Products
//           </NavLink>

//           <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
//           </NavLink>
//         </nav>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import LOGO from "../assets/logo.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Navigate, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneNumber = "9352515020";
  const message = "Hello, I want to know more about your Products & Services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="flex items-center justify-between px-4 md:px-10 py-2">

        {/* Logo */}
        <img
          src={LOGO}
          alt="Logo"
          className="h-16 cursor-pointer"
          onClick={() => (Navigate({ to: "/" }), window.scrollTo({ top: 0, behavior: "smooth" }))}
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg font-semibold">
          <NavLink to="/" className={({isActive})=>isActive ? "text-green-600" : "text-gray-600"}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive ? "text-green-600" : "text-gray-600"}>About</NavLink>
          <NavLink to="/products" className={({isActive})=>isActive ? "text-green-600" : "text-gray-600"}>Our Products</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive ? "text-green-600" : "text-gray-600"}>Contact</NavLink>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <FaFacebook className="hover:text-green-500 cursor-pointer" />
          <FaLinkedin className="hover:text-green-500 cursor-pointer" />
          <a href="https://www.instagram.com/thermogreenenergy" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-green-500 cursor-pointer" />
          </a>
          <a href={url} target="_blank">
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-lg font-semibold">

          <NavLink to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={()=>setMenuOpen(false)}>About</NavLink>
          <NavLink to="/products" onClick={()=>setMenuOpen(false)}>Our Products</NavLink>
          <NavLink to="/contact" onClick={()=>setMenuOpen(false)}>Contact</NavLink>

          <div className="flex gap-5 pt-4">
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <a href={url} target="_blank">
              <FaWhatsapp />
            </a>
          </div>

        </nav>
      </div>

    </header>
  );
}