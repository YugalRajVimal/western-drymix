
// ================= CONTACT FORM =================
export function ContactForm() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Contact Western Drymix
        </h2>

        <p className="mt-4 text-gray-700 max-w-4xl">
          At Western Drymix, we specialize in delivering high-performance drymix solutions for modern construction. Please fill out the form below—our team will get back to you promptly.
        </p>


        <form className="mt-10 grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm">How can we help you?*</label>
            <textarea className="w-full mt-2 p-3 rounded-xl border bg-gray-100" rows={3} placeholder="Let us know your requirement or question..." />
          </div>

          <div>
            <label className="text-sm">Company Name*</label>
            <input className="w-full mt-2 p-3 rounded-xl border bg-gray-100" placeholder="Enter your company name" />
          </div>

          <div>
            <label className="text-sm">Your Activity / Profession</label>
            <input className="w-full mt-2 p-3 rounded-xl border bg-gray-100" placeholder="(e.g. Builder, Contractor, Architect, etc.)" />
          </div>

          <div>
            <label className="text-sm">City*</label>
            <input className="w-full mt-2 p-3 rounded-xl border bg-gray-100" placeholder="Enter your city" />
          </div>

          <div>
            <label className="text-sm">Country/Location*</label>
            <input className="w-full mt-2 p-3 rounded-xl border bg-gray-100" placeholder="India" value="India" readOnly />
          </div>

          <div>
            <label className="text-sm">Phone Number*</label>
            <input className="w-full mt-2 p-3 rounded-xl border bg-gray-100" placeholder="Your contact number" />
          </div>

          <div>
            <label className="text-sm">Full Name*</label>
            <input className="w-full mt-2 p-3 rounded-xl border bg-gray-100" placeholder="Your full name" />
          </div>

          <div>
            <label className="text-sm">Email Address*</label>
            <input className="w-full mt-2 p-3 rounded-xl border bg-gray-100" placeholder="you@email.com" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm">Your Message*</label>
            <textarea className="w-full mt-2 p-3 rounded-xl border bg-gray-100" rows={4} placeholder="Share more details about your inquiry or your requirements" />
          </div>

          <div className="md:col-span-2 text-sm text-gray-600 space-y-3">
            <label className="flex gap-2 items-start">
              <input type="checkbox" />
              <span>
                I give consent to Western Drymix to process my submitted information so they can respond to my inquiry.
              </span>
            </label>

            <label className="flex gap-2 items-start">
              <input type="checkbox" />
              <span>
                I agree to receive updates and industry notifications from Western Drymix.
              </span>
            </label>
          </div>

          <div className="md:col-span-2 text-center mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow">
              Submit
            </button>
            <p className="mt-2 text-xs text-gray-400">
              Quality is not an act, it’s a habit. Excellence is built daily.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}