export function FeatureSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
            className="w-full h-[400px] object-cover"
            alt="Team collaboration"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 text-white max-w-6xl">
            <span className="border border-white/60 rounded-full px-4 py-1 text-xs w-fit mb-4 tracking-wider font-semibold bg-white/10">
              OUR TEAM, OUR STRENGTH
            </span>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              We believe in empowering talent, fostering innovation,<br className="hidden md:inline" /> and creating endless opportunities.
            </h3>

            <p className="mt-2 text-white/80 text-base md:text-lg leading-relaxed">
              Whether you’re starting your journey or taking the next big step in your career, we offer an environment where learning, collaboration, and excellence thrive.
            </p>
            <p className="mt-2 text-white/90 text-lg md:text-xl font-semibold italic">
              Your growth fuels <span className="text-green-400 not-italic">our success.</span>
            </p>
            <p className="mt-2 text-white/80 text-base md:text-lg">
              Join us and be part of something extraordinary.
            </p>

            <button className="mt-4 bg-green-500 hover:bg-green-600 px-7 py-3 rounded-full w-fit font-semibold text-base shadow-md transition">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}