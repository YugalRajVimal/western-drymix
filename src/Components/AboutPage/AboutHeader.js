// ================= ABOUT US HEADER =================
export function AboutUsHeader() {
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
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1
          className="text-5xl md:text-6xl font-semibold font-serif"
          style={{ color: gold, textShadow: "2px 2px 12px #0008" }}
        >
          WESTERN DRYMIX
        </h1>
      </div>

      {/* Breadcrumb */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ background: blue }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex items-center gap-3">
          <span style={{ color: gold, fontWeight: 600 }}>HOME</span>
          <span className="text-white/70">|</span>
          <span
            style={{ color: "#fff", fontWeight: 600, letterSpacing: 1 }}
          >
            WESTERN DRYMIX
          </span>
        </div>
      </div>
    </section>
  );
}