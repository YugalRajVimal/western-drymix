
// ================= CONTACT FORM =================
export function ContactForm() {
  // Theme Colors
  const gold = "#fdca00";
  const blue = "#0393da";

  return (
    <section className="bg-white pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-semibold font-serif"
          style={{
            color: blue,
          }}
        >
          Contact Western Drymix
        </h2>

        <p className="mt-4 max-w-4xl" style={{ color: blue }}>
          At Western Drymix, we specialize in delivering high-performance drymix solutions for modern construction. Please fill out the form below—our team will get back to you promptly.
        </p>

        <form className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm" style={{ color: blue }}>
              How can we help you?*
            </label>
            <textarea
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              rows={3}
              placeholder="Let us know your requirement or question..."
            />
          </div>

          <div>
            <label className="text-sm" style={{ color: blue }}>
              Company Name*
            </label>
            <input
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="text-sm" style={{ color: blue }}>
              Your Activity / Profession
            </label>
            <input
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              placeholder="(e.g. Builder, Contractor, Architect, etc.)"
            />
          </div>

          <div>
            <label className="text-sm" style={{ color: blue }}>
              City*
            </label>
            <input
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              placeholder="Enter your city"
            />
          </div>

          <div>
            <label className="text-sm" style={{ color: blue }}>
              Country/Location*
            </label>
            <input
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              placeholder="India"
              value="India"
              readOnly
            />
          </div>

          <div>
            <label className="text-sm" style={{ color: blue }}>
              Phone Number*
            </label>
            <input
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              placeholder="Your contact number"
            />
          </div>

          <div>
            <label className="text-sm" style={{ color: blue }}>
              Full Name*
            </label>
            <input
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm" style={{ color: blue }}>
              Email Address*
            </label>
            <input
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              placeholder="you@email.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm" style={{ color: blue }}>
              Your Message*
            </label>
            <textarea
              className="w-full mt-2 p-3 rounded-xl border"
              style={{
                borderColor: blue,
                backgroundColor: "#fffbea",
                color: "#222",
              }}
              rows={4}
              placeholder="Share more details about your inquiry or your requirements"
            />
          </div>

          <div className="md:col-span-2 text-sm space-y-3" style={{ color: blue }}>
            <label className="flex gap-2 items-start">
              <input type="checkbox" style={{ accentColor: gold }} />
              <span>
                I give consent to Western Drymix to process my submitted information so they can respond to my inquiry.
              </span>
            </label>

            <label className="flex gap-2 items-start">
              <input type="checkbox" style={{ accentColor: gold }} />
              <span>
                I agree to receive updates and industry notifications from Western Drymix.
              </span>
            </label>
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button
              className="px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
              style={{
                background: blue,
                color: gold,
                boxShadow: `0 4px 18px #0393da33, 0 1px 0 #fdca0066`,
                border: `2px solid ${gold}`,
                letterSpacing: "0.5px",
              }}
            >
              Submit
            </button>
            <p className="mt-2 text-xs" style={{ color: blue, fontStyle: "italic" }}>
              Quality is not an act, it’s a habit. Excellence is built daily.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}