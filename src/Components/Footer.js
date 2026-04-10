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

  return (
    <>
      <section className="py-10 bg-zinc-100">
        <div className="max-w-7xl mx-auto  px-6">
          <h2 className="text-4xl md:text-5xl flex gap-2 font-semibold mb-4">
            <img
              src="/logo.png"
              alt="Western Drymix Logo"
              className="h-12 mb-2"
            />
            Western Drymix
          </h2>


          <div className="text-gray-800 text-sm leading-relaxed space-y-2 max-w-4xl">
            

            <p className="italic text-xl text-gray-700 font-medium">
              Quality is not an act, it’s a habit. Excellence is built daily.
            </p>
            
            <p>
              At Western Drymix, we specialize in high-quality drymix solutions designed for modern construction needs. Our website showcases our innovative products, industry expertise, and commitment to excellence.
            </p>

          

            {/* <div>
              <span className="font-semibold">Address:</span><br />
              Matsya Industrial Area, Alwar, 301001<br />
              Rajasthan, India
            </div>
            <div>
              <span className="font-semibold">Available Daily:</span> 7am - 10pm
            </div> */}
          </div>
        </div>
      </section>

      <footer className="bg-[#7ac000] text-black">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left: About Us */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Western Drymix Logo"
                className="h-10"
              />
              <span className="font-bold text-xl">Western Drymix</span>
            </div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p className="text-sm mb-6">
              Western Drymix Pvt. Ltd. is dedicated to delivering superior drymix solutions with a focus on quality, consistency, and customer satisfaction.
            </p>
            <div className="flex items-center gap-2 mb-2 text-sm">
              <FiPhone />
              <span>+91 9999999999</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FiMail />
              <a href="mailto:Westerndrymix@gmail.com" className="underline">
                Westerndrymix@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-black hover:text-green-700 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-black hover:text-green-700 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black hover:text-green-700 transition"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-black hover:text-green-700 transition"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="flex flex-col mx-auto">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Terms & Conditions</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* New: Product Categories Links */}
          <div className="flex flex-col mx-auto">
            <h3 className="font-semibold text-lg mb-4">Product Categories</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat.categoryId}>
                  <a
                    href={getCategoryHash(cat.categoryName)}
                    className="hover:underline hover:text-green-700 transition"
                  >
                    {cat.categoryName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Location */}
          <div className="flex flex-col  mx-auto">
            <h3 className="font-semibold text-lg mb-4">Location</h3>
            <p className="text-sm mb-4">
              Matsya Industrial Area, Alwar,<br />
              Rajasthan, 301001, India
            </p>
            <span className="text-xs text-gray-900">
              Available Daily: 7am - 10pm
            </span>
          </div>
        </div>
        <div className="border-t border-black/10 py-3 px-6 bg-[#73b700]">
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
                className="text-black hover:text-green-700 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-black hover:text-green-700 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black hover:text-green-700 transition"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-black hover:text-green-700 transition"
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
