import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";


// ================= CONTACT CARD =================
export function ContactCard() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          Contacts
        </h2>

        <div className="bg-white rounded-3xl p-8 flex items-center gap-8 shadow-xl max-w-2xl">
          {/* Icon */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute w-24 h-40 bg-yellow-400 rotate-12 rounded-xl" />
            <FiMapPin className="relative text-5xl text-black" />
          </div>

          {/* Content */}
          <div className="text-gray-800 text-sm space-y-3">
            <p className="font-semibold">
WESTERN DRYMIX
            </p>
            <p>
            Matsya Industrial Area, Alwar,
            
            </p>
            <p>
            Rajasthan, 301001, India
            </p>
            <p>
              Email : <span className="text-green-600">Westerndrymix@gmail.com</span>
            </p>
          </div>
        </div>

        <p className="mt-10 text-gray-700">
          Didn’t find what you were looking for on our site? Contact us!
        </p>
      </div>
    </section>
  );
}


