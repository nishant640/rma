import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <h1 className="hero-title"></h1>
      </div>
    </section>
  );
}

export default Hero;