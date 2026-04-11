export function OurValues() {
  // Theme colors
  const gold = "#fdca00";
  const blue = "#0393da";

  return (
    <section
      className="py-16"
      style={{ backgroundColor: blue }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-semibold mb-6 font-serif"
          style={{
            color: gold,
            textShadow: "1px 3px 10px #0007, 0 2px 0 #fff4"
          }}
        >
          <span className="font-serif">Our Team, Our Strength</span>
        </h2>
        <p
          className="text-xl md:text-2xl mb-8 font-medium"
          style={{
            color: "#fff"
          }}
        >
          We believe in empowering talent, fostering innovation, and creating&nbsp;

            an environment where learning, collaboration, and excellence thrive.

        </p>
        <p
          className="text-lg md:text-xl font-normal"
          style={{ color: "#fff" }}
        >
          Your growth fuels <br className="block md:hidden" />
          <span
            className="font-semibold"
            style={{ color: gold }}
          >
            our success.
          </span>
        </p>
      </div>
    </section>
  );
}