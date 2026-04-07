
import { motion } from "framer-motion";

const offerings = [
  {
    title: "Advanced Adhesives",
    desc: "High-performance adhesives engineered for a range of industries, ensuring strong bonds and enhanced process efficiency.",
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Waterproofing Materials",
    desc: "Long-lasting waterproofing products designed to protect structures and surfaces from moisture, ensuring durability and safety.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Industrial Coatings",
    desc: "Cutting-edge coatings for industrial applications, focused on improving performance, longevity, and sustainability.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
];

export function Offerings() {
  return (
    <section className="py-20 bg-white h-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-semibold">
            Innovating for a Better Future
          </h2>
          <p className="mt-4 text-gray-600">
            At Western Drymix, we are dedicated to delivering high-quality, durable, and innovative solutions across multiple industries. Our products, including advanced adhesives, waterproofing materials, and industrial coatings, are designed to enhance efficiency and performance.
          </p>
          <p className="mt-2 text-gray-600">
            We strive to empower businesses and individuals by providing reliable and cutting-edge solutions tailored to their needs. With a strong focus on research, sustainability, and excellence, we aim to set new industry standards.
          </p>
          <p className="mt-2 text-gray-600">
            Our mission is to drive progress, foster innovation, and build long-lasting partnerships for a better future.
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mt-16"
        >
          Our Solutions & Capabilities
        </motion.h3>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ maxHeight: "80vh" }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[420px] max-h-[80vh] object-cover group-hover:scale-105 transition duration-500"
                style={{ maxHeight: "80vh" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h4 className="text-2xl font-semibold">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80 mt-2 max-w-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
