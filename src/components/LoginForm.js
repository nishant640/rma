import React from "react";
import "./LoginForm.css";

<section
  className="login-form-wrap"
  style={{ backgroundImage: "url(/images/background.png)" }}
></section>

export default function LoginForm() {
  return (
    <section className="login-form-wrap">
      <div className="login-form-inner">
        <h2>LOGIN</h2>

        <div className="login-field">
          <label>USERNAME</label>
          <input type="text" />
        </div>

        <div className="login-field">
          <label>PASSWORD</label>
          <input type="password" />
        </div>

        <a className="forgot-link" href="#">
          Forgot Password? 
          
          LOGIN/SIGNUP
        </a>
      </div>
    </section>
  );
}