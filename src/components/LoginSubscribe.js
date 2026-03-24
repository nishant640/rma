import React from "react";
import "./LoginSubscribe.css";

function LoginSubscribe() {
  return (
    <section className="login-subscribe-wrap">
      <div className="login-subscribe-box">
        <h2>NEVER MISS AN UPDATE</h2>
        <p>
          Subscribe to our newsletter and get the latest Real Madrid news
          delivered straight to your inbox.
        </p>

        <form className="login-subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default LoginSubscribe;