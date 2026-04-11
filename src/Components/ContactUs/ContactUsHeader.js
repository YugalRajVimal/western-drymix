// ================= CONTACT US HEADER =================
export function ContactUsHeader() {
  // Theme colors
  const gold = "#fdca00";
  const blue = "#0393da";

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

      {/* Overlay with blue tint */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(120deg, ${blue}bb 0%, #0005 60%)`,
          mixBlendMode: 'multiply'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1
          className="font-serif font-semibold text-5xl md:text-6xl"
          style={{
            color: gold,
            textShadow: `0 3px 16px #000c, 0 2px 0 #fff8`,
          }}
        >
          Contact Us
        </h1>
      </div>

      {/* Breadcrumb */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ background: blue }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex items-center gap-3">
          <span style={{ color: gold, fontWeight: 500, textShadow: "0 2px 8px #0008" }}>
            HOME
          </span>
          <span style={{ color: "#fff", fontWeight: 400 }}>|</span>
          <span 
          className="text-white"
            style={{

              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            CONTACT US
          </span>
        </div>
      </div>
    </section>
  );
}