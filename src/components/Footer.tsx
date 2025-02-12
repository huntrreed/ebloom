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
    <section className="font-Quicksand_L bg-[#eadfcb] flex flex-col items-center justify-center py-6 w-full h-[230px] lg:h-[180px] pb-4"> {/* Adjusted height */}
      <div className="flex flex-col items-center gap-6 w-full"> {/* Increased gap */}

        {/* Logo */}
        <div className="footer-logo w-32 lg:w-36 h-14 lg:h-16 py-2"> 
          <a href="/">
            <img src={logo.src} alt="Embered Blooms logo" />
          </a>
        </div>

        {/* Conditional Newsletter Section */}
        {showNewsletter && (
          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="font-Quicksand_B text-sm lg:text-base text-center">
              Stay updated with new items, updates, and more.
            </h2>
            <div className="flex items-center mt-2">
              <input
                id="email"
                type="text"
                placeholder="Your email"
                className="block w-56 px-3 py-2 text-black border-b-2 bg-transparent focus:outline-none focus:border-black font-sm"
              />
              <button className="xs:text-xs sm:text-sm bg-black text-white py-1 px-4 lg:px-6 rounded-full font-Quicksand_L ml-2">
                Subscribe
              </button>
            </div>
          </div>
        )}

        {/* Social Icons */}
        <div className="flex gap-7 mt-2"> {/* Added space */}
          <a href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE" target="_blank" rel="noopener noreferrer">
            <img src={instagram.src} alt="Instagram" className="h-6 w-6 lg:h-8 lg:w-8" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-[#4e3d34] opacity-80 mt-4 pb-4">
          © {currentYear} Embered Blooms. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
