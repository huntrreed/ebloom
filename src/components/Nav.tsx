import { useState } from "react";
import { motion } from "framer-motion";

// icons
import logo from "../assets/icons/logo.png";
import search from "../assets/icons/search-icon.png";
import cart from "../assets/icons/cart-icon.png";
import profile from "../assets/icons/profile-icon.png";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  // framer motion variants for nav animation
  const navMove = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const linkMove = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <nav className="flex items-center justify-between text-[#4e3d34] pt-6 pb-4 mb-4 relative mx-4 md:mx-10 lg:mx-12 text-center bg-[#eadfcb] shadow-md rounded-xl px-6">
      {/* Logo */}
      <div className="flex items-center gap-2 h-full w-1/2 lg:w-1/5 justify-start">
        <a href="/" className="text-black flex items-center justify-center">
          <img
            className="h-8 md:h-10 m-4 w-28 md:w-fit"
            src={logo.src}
            alt="logo"
          />
        </a>
      </div>

      {/* Desktop Nav */}
      <motion.div
        variants={navMove}
        animate="visible"
        initial="hidden"
        className="hidden lg:flex gap-10 font-semibold text-lg lg:w-3/5 lg:items-center lg:justify-center text-[#4e3d34]"
      >
        <motion.a variants={linkMove} href="/" className="nav-link">
          Home
        </motion.a>
        <motion.a variants={linkMove} href="/shop" className="nav-link">
          Shop
        </motion.a>
        <motion.a variants={linkMove} href="/gallery" className="nav-link">
          Gallery
        </motion.a>
        <motion.a variants={linkMove} href="/about" className="nav-link">
          About
        </motion.a>
        <motion.a variants={linkMove} href="/contact" className="nav-link">
          Contact
        </motion.a>
      </motion.div>

      {/* Icons */}
      <div className="flex w-1/2 items-center justify-around lg:w-1/5 lg:justify-center p-2">
        <div className="flex items-center justify-around w-full gap-4 lg:w-1/2 lg:items-end mt-2 lg:m-0 ml-10">
          <img
            className="hover:cursor-pointer h-5 opacity-80 hover:opacity-100 transition"
            src={search.src}
            alt="search-icon"
          />
          <img
            className="hover:cursor-pointer h-5 opacity-80 hover:opacity-100 transition"
            src={profile.src}
            alt="profile-icon"
          />
          <img
            className="hover:cursor-pointer h-5 opacity-80 hover:opacity-100 transition"
            src={cart.src}
            alt="cart-icon"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="ml-10 mt-2 space-y-1.5 cursor-pointer z-50 lg:hidden"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 5 : 0 }}
            className="block h-0.5 w-5 bg-[#4e3d34]"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -5 : 0,
            }}
            className="block h-0.5 w-5 bg-[#4e3d34]"
          ></motion.span>
        </div>
      </div>

      {/* Mobile Nav */}
      {toggled && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="flex gap-12 font-Quicksand_B font-bold fixed bg-[#eadfcb] bottom-0 left-0 w-full h-full items-center justify-center z-40 shadow-xl"
        >
          <motion.div
            variants={navMove}
            animate="visible"
            initial="hidden"
            className="flex flex-col text-xl gap-8 text-[#4e3d34]"
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
