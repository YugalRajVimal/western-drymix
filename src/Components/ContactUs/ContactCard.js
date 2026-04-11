import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";


// ================= CONTACT CARD =================
export function ContactCard() {
  // Theme colors
  const gold = "#fdca00";
  const blue = "#0393da";

  return (
    <section className="pt-16 pb-8" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-semibold font-serif mb-10"
          style={{ color: blue }}
        >
          Contacts
        </h2>

        <div
          className="rounded-3xl p-8 flex items-center gap-8 shadow-xl max-w-2xl"
          style={{
            background: "#fffbea",
            border: `2px solid ${gold}`,
          }}
        >
          {/* Icon */}
          {/* <div className="relative w-32 h-32 flex items-center justify-center">
            <div
              className="absolute w-24 h-40 rotate-12 rounded-xl"
              style={{ background: gold, opacity: 0.85 }}
            />
            <FiMapPin className="relative text-5xl" style={{ color: blue }} />
          </div> */}

          {/* Content */}
          <div className="text-sm space-y-3" style={{ color: blue }}>
            <p className="font-semibold" style={{ color: blue }}>
              WESTERN DRYMIX
            </p>
            <p>Matsya Industrial Area, Alwar,</p>
            <p>Rajasthan, 301001, India</p>
            <p>
              Email :{" "}
              <span style={{ color: gold, fontWeight: 600 }}>
                Westerndrymix@gmail.com
              </span>
            </p>
          </div>
        </div>

        <p className="mt-10" style={{ color: blue }}>
          Didn’t find what you were looking for on our site? Contact us!
        </p>
      </div>
    </section>
  );
}
