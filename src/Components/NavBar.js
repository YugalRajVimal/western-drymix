import { useEffect, useState } from "react";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Highlight active route (for Home, About Us, Products, Contact)
  const isHome = location.pathname === "/" || location.pathname === "";
  const isAbout = location.pathname === "/about";
  const isProducts = location.pathname === "/products";
  const isContact = location.pathname === "/contact";

  // Handler to move to top and close menu (if open)
  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const navLinks = (
    <>
      <Link
        to="/"
        className={`${
          isHome
            ? "text-green-500 border-b-2 border-green-500 pb-1 md:pb-0 md:border-b-0"
            : scrolled
            ? "text-black"
            : "text-white"
        }`}
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`hover:text-green-500 ${
          isAbout
            ? "text-green-500 border-b-2 border-green-500 pb-1 md:pb-0 md:border-b-0"
            : scrolled
            ? "text-black"
            : "text-white"
        }`}
        onClick={handleLinkClick}
      >
        About Us
      </Link>
      <Link
        to="/products"
        className={`hover:text-green-500 ${
          isProducts
            ? "text-green-500 border-b-2 border-green-500 pb-1 md:pb-0 md:border-b-0"
            : scrolled
            ? "text-black"
            : "text-white"
        }`}
        onClick={handleLinkClick}
      >
        Products
      </Link>
      <Link
        to="/contact"
        className={`hover:text-green-500 ${
          isContact
            ? "text-green-500 border-b-2 border-green-500 pb-1 md:pb-0 md:border-b-0"
            : scrolled
            ? "text-black"
            : "text-white"
        }`}
        onClick={handleLinkClick}
      >
        Contact Us
      </Link>
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "bg-white shadow-md py-6" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <img
            src="/logo.png"
            alt="chryso logo"
            className="w-16 h-16 object-contain rounded-md bg-white"
          />
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-xl ${scrolled ? "text-black" : "text-white"}`}>Western Drymix</span>
            <span className={`text-xs ${scrolled ? "text-gray-500" : "text-gray-100/70"}`}></span>
          </div>
        </Link>
  

        {/* Nav Links Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks}
        </nav>

        {/* Right Side / Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
            onClick={handleLinkClick}
          >
            Contact us <FiMail />
          </Link>
          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl focus:outline-none ${scrolled ? "text-black" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg py-8 px-8 flex flex-col gap-8 transition-all">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-xl text-black">chryso</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl"
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>
            <nav className="flex flex-col gap-7 font-medium">
              {/* For mobile, show route navigation for Home/About Us/Products/Contact */}
              <Link
                to="/"
                className={`${
                  isHome
                    ? "text-green-500 border-b-2 border-green-500 pb-1"
                    : "hover:text-green-500 text-black"
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isAbout
                    ? "text-green-500 border-b-2 border-green-500 pb-1"
                    : "hover:text-green-500 text-black"
                }`}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className={`${
                  isProducts
                    ? "text-green-500 border-b-2 border-green-500 pb-1"
                    : "hover:text-green-500 text-black"
                }`}
                onClick={handleLinkClick}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`${
                  isContact
                    ? "text-green-500 border-b-2 border-green-500 pb-1"
                    : "hover:text-green-500 text-black"
                }`}
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </nav>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition mt-6 w-fit"
              onClick={handleLinkClick}
            >
              Contact us <FiMail />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
