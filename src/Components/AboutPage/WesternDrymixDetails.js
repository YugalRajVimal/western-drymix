import { FiClock } from "react-icons/fi";
import { FaFlask, FaIndustry } from "react-icons/fa";

export function WesternDrymixDetails() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          WESTERN DRYMIX
        </h2>

        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed max-w-5xl">
          <p>
            At Western Drymix, we are dedicated to delivering high-quality, durable, and innovative solutions across multiple industries. Our products, including advanced adhesives, waterproofing materials, and industrial coatings, are designed to enhance efficiency and performance. 
          </p>
          <p>
            We strive to empower businesses and individuals by providing reliable and cutting-edge solutions tailored to their needs. With a strong focus on research, sustainability, and excellence, we aim to set new industry standards. Our mission is to drive progress, foster innovation, and build long-lasting partnerships for a better future.
          </p>
          <p>
            We believe in empowering talent, fostering innovation, and creating an environment where learning, collaboration, and excellence thrive.
          </p>
          <p>
            Your growth fuels <span className="font-semibold">our success.</span>
          </p>
          <hr className="my-8" />
          <p>
            Western Drymix is a leading provider of high-performance drymix solutions, offering plasters, mortars, tile adhesives, and waterproofing compounds. Committed to innovation, quality, and efficiency, we deliver cost-effective and durable construction materials. With cutting-edge manufacturing and a customer-first approach, we are revolutionizing modern construction.
          </p>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 text-center">
          <div>
            <FiClock className="mx-auto text-4xl text-green-500" />
            <p className="mt-4 font-medium">Founded In 2015</p>
          </div>

          <div>
            <FaFlask className="mx-auto text-4xl text-green-500" />
            <p className="mt-4 font-medium">State-of-the-Art R&D</p>
            <p className="text-sm text-gray-600 mt-1">
              Innovation & tailored solutions for diverse needs
            </p>
          </div>

          <div>
            <FaIndustry className="mx-auto text-4xl text-green-500" />
            <p className="mt-4 font-medium">Modern Production Facilities</p>
            <p className="text-sm text-gray-600 mt-1">
              Ensuring quality, sustainability, and efficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}