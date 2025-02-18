import React from "react";
import { Image } from "astro:assets";

// Icons
import logo from "../assets/icons/logo.png";
import instagram from "../assets/icons/instagram.png";

// Toggle this to show/hide the newsletter
const showNewsletter = false; // Set to 'true' when you want to enable it

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Gets the current year dynamically

  return (
    <section className="font-Quicksand_L bg-[#eadfcb] flex flex-col items-center justify-center py-6 w-full">
      <div className="flex flex-col items-center w-full">
        
        {/* Logo with proper spacing */}
        <div className="footer-logo w-28 lg:w-32 h-auto mb-2"> {/* ⬅ Reduced size & spacing */}
          <a href="/">
            <img src={logo.src} alt="Embered Blooms logo" className="w-full h-auto" />
          </a>
        </div>

        {/* Social Icons with adjusted spacing */}
        <div className="flex gap-4 mb-4"> {/* ⬅ Reduced gap so it aligns better */}
          <a href="https://www.instagram.com/emberedblooms/" target="_blank" rel="noopener noreferrer">
            <img src={instagram.src} alt="Instagram" className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
        </div>

        {/* Copyright Section with proper spacing */}
        <div className="text-sm text-[#4e3d34] opacity-80 pb-4">
          © {currentYear} Embered Blooms. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
