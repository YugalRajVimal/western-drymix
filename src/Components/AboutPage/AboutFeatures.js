import { motion } from "framer-motion";

// ================= ABOUT FEATURES (UPDATED CONTENT) =================
const features = [
  {
    title: "Our Expertise",
    img: "https://images.unsplash.com/photo-1581091215367-59ab6b3d9b3d",
    points: [
      "At Western Drymix, we specialize in high-performance drymix solutions, including plasters, mortars, tile adhesives, and waterproofing compounds.",
      "Our cutting-edge manufacturing process and strict quality control ensure that every product meets industry standards.",
    ],
  },
  {
    title: "Our Commitment",
    img: "https://images.unsplash.com/photo-1581093588401-22d0f1c1c2f3",
    points: [
      "We are dedicated to quality, innovation, and customer satisfaction.",
      "Through continuous research and development, we deliver cost-effective, durable, and eco-friendly construction materials.",
      "Our customer-first approach ensures tailored solutions that meet diverse industry needs.",
    ],
  },
  {
    title: "Our Vision",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    points: [
      "To lead the drymix industry by setting new benchmarks in quality, sustainability, and innovation.",
      "We strive to deliver reliable construction solutions that foster long-term partnerships.",
    ],
  },
  {
    title: "Mission",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    points: [
      "Driving industry growth through reliability, collaboration, and trust.",
      "Our mission is to empower the construction sector with products and support that shape a better, sustainable built environment.",
    ],
  },
];

export function AboutFeatures() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-2xl h-[260px] w-full object-cover"
            />

            <h3 className="mt-5 text-xl font-semibold">
              {item.title}
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

