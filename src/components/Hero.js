import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  {
    image: `${process.env.PUBLIC_URL}/images/hero.png`,
    position: "center 5%",
    size: "cover",
  },
  {
    image: `${process.env.PUBLIC_URL}/images/hero2.png`,
    position: "center 20%",
    size: "cover",
  },
  {
    image: `${process.env.PUBLIC_URL}/images/hero3.png`,
    position: "center center",
    size: "110% auto",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.position,
            backgroundSize: slide.size,
          }}
        />
      ))}

      <div className="hero-overlay"></div>
    </section>
  );
}

export default Hero;