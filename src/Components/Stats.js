import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    // { value: "50+", label: "Tons Net Sales" },
    { value: "40+", label: "Brands" },
    // { value: "100+", label: "Number of Employees" },
    { value: "3+", label: "Manufacturing Units in India" },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2  items-center">
        {/* Left */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Key Facts & Figures
        </motion.h2>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="text-sm mt-2 tracking-wide text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}