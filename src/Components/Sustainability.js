import { motion } from "framer-motion";

export function Sustainability() {
  return (
    <section className="py-20 bg-white pr-10">
      <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-r-3xl overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full aspect-[16/10]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="video"
            allowFullScreen
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold">
            Solutions That Stick, Strengthen & Inspire
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg">
            From quick fixes to long-term solutions, our range of adhesives, waterproofing materials, and construction chemicals is designed to make every task easier and more efficient. Whether it's crafting, repairing, or building, we provide innovative and reliable products that simplify your work.
          </p>
          <p className="mt-6 text-gray-600 max-w-lg">
            We don’t just sell products—we create seamless experiences, hassle-free applications, and trusted solutions that enhance everyday life. Stronger bonds, better results, lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
