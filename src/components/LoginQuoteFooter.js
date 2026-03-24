import React from "react";
import "./LoginQuoteFooter.css";

function LoginQuoteFooter() {
  return (
    <div>
      {/* QUOTE SECTION */}
      <section className="login-quote-section">
        <h1>HALA MADRID Y NADA MÁS.</h1>
        <p>The pride. The history. The greatest club in the world.</p>
      </section>

      {/* FOOTER */}
      <footer className="login-footer">
        <div className="footer-col logo-col">
          <img className="footer-logo" src="/images/logo.png" alt="Realmadrid" />
          <p>The ultimate unofficial fan page for Madridistas worldwide.</p>
        </div>

        <div className="footer-col">
          <h3>COMMUNITY</h3>
          <p>JOIN FORUMS</p>
          <p>FAN POLLS</p>
          <p>MATCH</p>
          <p>THREADS</p>
          <p>COMMUNITY</p>
        </div>

        <div className="footer-col">
          <h3>QUICK LINKS</h3>
          <p>LATEST NEWS</p>
          <p>MATCHES</p>
          <p>PLAYERS</p>
          <p>OFFICIAL SHOP</p>
        </div>

        <div className="footer-col">
          <p>© 2026 Real Madrid Fan Community. Unofficial fan page.</p>
          <p>
            This website is not affiliated with Real Madrid C.F. All trademarks
            belong to their respective owners.
          </p>
          <p>¡HALA MADRID!</p>
        </div>
      </footer>
    </div>
  );
}

export default LoginQuoteFooter;