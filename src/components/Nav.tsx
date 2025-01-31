import { useState } from "react";
import { motion } from "framer-motion";

// icons
import logo from "../assets/icons/logo.png";
import search from "../assets/icons/search-icon.png";
import cart from "../assets/icons/cart-icon.png";
import profile from "../assets/icons/profile-icon.png";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  // Navbar animation with slightly faster transitions
  const navMove = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3, // Faster stagger effect
        duration: 0.8, // Quicker fade-in
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  // Link movement - More natural
  const linkMove = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      x: -15, // Small movement for smooth transition
    },
  };

  return (
    <nav className="w-full bg-[#4e3d34] text-[#eadfcb] flex items-center justify-between pt-6 pb-4 px-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 h-full w-1/4 lg:w-1/5 justify-start">
        <a href="/" className="flex items-center justify-center">
          <img className="h-8 md:h-10 m-4 w-28 md:w-fit" src={logo.src} alt="logo" />
        </a>
      </div>

      {/* Desktop Nav */}
      <motion.div
        variants={navMove}
        animate="visible"
        initial="hidden"
        className="hidden lg:flex gap-10 font-semibold text-lg lg:w-3/5 lg:items-center lg:justify-center"
      >
        <motion.a variants={linkMove} href="/" className="hover:text-[#d7a55a]">
          Home
        </motion.a>
        <motion.a variants={linkMove} href="/shop" className="hover:text-[#d7a55a]">
          Shop
        </motion.a>
        <motion.a variants={linkMove} href="/gallery" className="hover:text-[#d7a55a]">
          Gallery
        </motion.a>
        <motion.a variants={linkMove} href="/about" className="hover:text-[#d7a55a]">
          About
        </motion.a>
        <motion.a variants={linkMove} href="/contact" className="hover:text-[#d7a55a]">
          Contact
        </motion.a>
      </motion.div>

      {/* Icons */}
      <div className="flex w-1/4 items-center justify-around lg:w-1/5 lg:justify-center p-2">
        <div className="flex items-center justify-around w-full gap-4 lg:w-1/2 lg:items-end mt-2 lg:m-0">
          <img className="hover:cursor-pointer h-5 opacity-80 hover:opacity-100 transition" src={search.src} alt="search-icon" />
          <img className="hover:cursor-pointer h-5 opacity-80 hover:opacity-100 transition" src={profile.src} alt="profile-icon" />
          <img className="hover:cursor-pointer h-5 opacity-80 hover:opacity-100 transition" src={cart.src} alt="cart-icon" />
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={() => setToggled((prevToggle) => !prevToggle)} className="ml-10 mt-2 space-y-1.5 cursor-pointer z-50 lg:hidden">
          <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 5 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="block h-0.5 w-5 bg-[#eadfcb]"></motion.span>
          <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -5 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="block h-0.5 w-5 bg-[#eadfcb]"></motion.span>
        </div>
      </div>

      {/* Mobile Nav */}
      {toggled && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ duration: 0.6, ease: "easeInOut" }} // Faster but still smooth
          className="flex gap-12 font-Quicksand_B font-bold fixed bg-[#4e3d34] bottom-0 left-0 w-full h-full items-center justify-center z-40 shadow-xl"
        >
          <motion.div
            variants={navMove}
            animate="visible"
            initial="hidden"
            className="flex flex-col text-xl gap-8 text-[#eadfcb]"
          >
            <motion.a variants={linkMove} href="/">
              Home
            </motion.a>
            <motion.a variants={linkMove} href="/shop">
              Shop
            </motion.a>
            <motion.a variants={linkMove} href="/gallery">
              Gallery
            </motion.a>
            <motion.a variants={linkMove} href="/about">
              About
            </motion.a>
            <motion.a variants={linkMove} href="/contact">
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
