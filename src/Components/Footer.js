import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import productsData from "../Data/products.json"; // Import products for categories

export function Footer() {
  // Generate hash links exactly as on ProductsPage
  function getCategoryHash(name) {
    return "#" + encodeURIComponent(name.replace(/\s+/g, '').toLowerCase());
  }

  // Extract product categories
  const categories = Array.isArray(productsData?.products)
    ? productsData.products
    : [];

  // Theme colors
  const gold = "#fdca00";
  const blue = "#0393da";

  return (
    <>
      <section
        className="py-10"
        style={{ background: "#e6f6fd" }} // subtle blue-tinted background
      >
        <div className="max-w-7xl mx-auto  px-6">
          <h2 className="text-4xl md:text-5xl flex gap-2 font-semibold mb-4 font-serif">
            <img
              src="/logo.png"
              alt="Western Drymix Logo"
              className="h-12 mb-2"
            />
            <span style={{ color: gold }}>Western Drymix</span>
          </h2>
          <div className="text-gray-800 text-sm leading-relaxed space-y-2 max-w-4xl">
            <p
              className="italic text-xl font-medium"
              style={{ color: blue }}
            >
              Quality is not an act, it’s a habit. Excellence is built daily.
            </p>
            <p>
              At Western Drymix, we specialize in high-quality drymix solutions designed for modern construction needs. Our website showcases our innovative products, industry expertise, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <footer
        className="text-white"
        style={{
          background: blue,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left: About Us */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Western Drymix Logo"
                className="h-10"
              />
              <span
                className="font-bold text-xl font-serif"
                style={{ color: gold }}
              >
                Western Drymix
              </span>
            </div>
            <h3
              className="font-semibold text-lg mb-4 font-serif"
              style={{ color: gold }}
            >
              About Us
            </h3>
            <p className="text-sm mb-6 text-white/80">
              Western Drymix Pvt. Ltd. is dedicated to delivering superior drymix solutions with a focus on quality, consistency, and customer satisfaction.
            </p>
            <div className="flex items-center gap-2 mb-2 text-sm text-white/80">
              <FiPhone />
              <span>+91 9999999999</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <FiMail />
              <a
                href="mailto:Westerndrymix@gmail.com"
                className="underline"
                style={{ color: gold }}
              >
                Westerndrymix@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-[#fdca00] transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-[#fdca00] transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-[#fdca00] transition"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white hover:text-[#fdca00] transition"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col mx-auto">
            <h3
              className="font-semibold text-lg mb-4 font-serif"
              style={{ color: gold }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:underline cursor-pointer hover:text-[#fdca00] transition">About Us</li>
              <li className="hover:underline cursor-pointer hover:text-[#fdca00] transition">Privacy Policy</li>
              <li className="hover:underline cursor-pointer hover:text-[#fdca00] transition">Terms & Conditions</li>
              <li className="hover:underline cursor-pointer hover:text-[#fdca00] transition">Contact Us</li>
            </ul>
          </div>

          {/* New: Product Categories Links */}
          <div className="flex flex-col mx-auto">
            <h3
              className="font-semibold text-lg mb-4 font-serif"
              style={{ color: gold }}
            >
              Product Categories
            </h3>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat.categoryId}>
                  <a
                    href={getCategoryHash(cat.categoryName)}
                    className="hover:underline transition"
                    style={{
                      color: "inherit",
                      transition: "color 0.15s",
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = gold)}
                    onMouseOut={e => (e.currentTarget.style.color = "inherit")}
                  >
                    {cat.categoryName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Location */}
          <div className="flex flex-col  mx-auto">
            <h3
              className="font-semibold text-lg mb-4 font-serif"
              style={{ color: gold }}
            >
              Location
            </h3>
            <p className="text-sm mb-4 text-white/80">
              Matsya Industrial Area, Alwar,<br />
              Rajasthan, 301001, India
            </p>
            <span className="text-xs text-white/80">
              Available Daily: 7am - 10pm
            </span>
          </div>
        </div>
        <div
          className="border-t py-3 px-6"
          style={{
            borderColor: "rgba(255,255,255,0.16)",
            background: gold,
            color: blue,
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs md:text-sm text-center md:text-left">
            <span>
              &copy; 2024 Western Drymix Pvt. Ltd. All rights reserved.
            </span>
            <div className="flex items-center justify-center gap-5 mt-2 md:mt-0">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#0393da] hover:text-black transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#0393da] hover:text-black transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#0393da] hover:text-black transition"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#0393da] hover:text-black transition"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
