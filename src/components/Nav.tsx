import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Icons
import logo from "../assets/icons/logo.png";
import search from "../assets/icons/search-icon.png";
import cart from "../assets/icons/cart-icon.png";
import profile from "../assets/icons/profile-icon.png";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);

    const interval = setInterval(() => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(updatedCart.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const navMove = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    hidden: { opacity: 0 },
  };

  const linkMove = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    hidden: { opacity: 0, x: -15 },
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-[#eadfcb] text-[#4e3d34] flex items-center justify-between px-6 md:px-10 lg:px-12 py-3 shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 w-1/4 lg:w-1/5 justify-start">
        <a href="/" className="flex items-center justify-center">
          <img
            className="h-24 md:h-32 w-auto max-w-[200px] md:max-w-[300px]"
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
        className="hidden lg:flex gap-10 font-semibold text-xl lg:w-3/5 justify-center"
      >
        <motion.a variants={linkMove} href="/" className="hover:text-[#d7a55a]">Home</motion.a>
        <motion.a variants={linkMove} href="/shop" className="hover:text-[#d7a55a]">Shop</motion.a>
        <motion.a variants={linkMove} href="/gallery" className="hover:text-[#d7a55a]">Gallery</motion.a>
        <motion.a variants={linkMove} href="/about" className="hover:text-[#d7a55a]">About</motion.a>
        <motion.a variants={linkMove} href="/contact" className="hover:text-[#d7a55a]">Contact</motion.a>
      </motion.div>

      {/* Icons with cart bubble */}
      <div className="flex w-1/4 justify-end lg:w-1/5 p-2 space-x-4 relative">
        <img className="cursor-pointer h-5 opacity-80 hover:opacity-100 transition" src={search.src} alt="search-icon" />
        <img className="cursor-pointer h-5 opacity-80 hover:opacity-100 transition" src={profile.src} alt="profile-icon" />
        <div className="relative">
        <a href="/cart" className="relative">
  <img className="cursor-pointer h-5 opacity-80 hover:opacity-100 transition" src={cart.src} alt="cart-icon" />
  <span id="cart-count" className="absolute -top-2 -right-2 bg-[#4e3d34] text-[#eadfcb] rounded-full text-xs px-1 hidden">0</span>
</a>          {cartCount > 0 && (
            <span id="cart-bubble" className="absolute -top-2 -right-2 bg-[#4e3d34] text-[#eadfcb] rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div onClick={() => setToggled((prev) => !prev)} className="lg:hidden cursor-pointer z-50">
          <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 5 : 0 }} transition={{ duration: 0.3 }} className="block h-0.5 w-5 bg-[#4e3d34]"></motion.span>
          <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -5 : 0 }} transition={{ duration: 0.3 }} className="block h-0.5 w-5 bg-[#4e3d34]"></motion.span>
        </div>
      </div>

      {/* Mobile Nav */}
      {toggled && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#4e3d34] flex flex-col items-center justify-center gap-6 text-[#eadfcb] text-xl z-40"
        >
          <motion.a variants={linkMove} href="/" onClick={() => setToggled(false)}>Home</motion.a>
          <motion.a variants={linkMove} href="/shop" onClick={() => setToggled(false)}>Shop</motion.a>
          <motion.a variants={linkMove} href="/gallery" onClick={() => setToggled(false)}>Gallery</motion.a>
          <motion.a variants={linkMove} href="/about" onClick={() => setToggled(false)}>About</motion.a>
          <motion.a variants={linkMove} href="/contact" onClick={() => setToggled(false)}>Contact</motion.a>
        </motion.div>
      )}
    </nav>
  );
}
