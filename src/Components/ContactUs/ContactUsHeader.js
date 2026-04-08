// ================= CONTACT US HEADER =================
export function ContactUsHeader() {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1400&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-6xl font-semibold">
          Contact Us
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="absolute bottom-0 left-0 w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex items-center gap-3">
          <span className="text-gray-600">HOME</span>
          <span className="text-gray-400">|</span>
          <span className="text-green-600 font-medium">
            CONTACT US
          </span>
        </div>
      </div>
    </section>
  );
}