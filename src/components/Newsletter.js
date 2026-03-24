import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>NEVER MISS AN UPDATE</h2>
      <p>
        Subscribe to our newsletter and get the latest Real Madrid news delivered straight to your inbox.
      </p>

      <div className="newsletter-box">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}