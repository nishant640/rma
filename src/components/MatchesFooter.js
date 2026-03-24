import React from "react";
import "./MatchesFooter.css";

export default function MatchesFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img className="footer-logo" src="/images/logo.png" alt="Realmadrid" />
          <p className="footer-desc">The ultimate unofficial fan page for Madridistas worldwide.</p>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">COMMUNITY</h3>
          <ul className="footer-list">
            <li>JOIN FORUMS</li>
            <li>FAN POLLS</li>
            <li>MATCH</li>
            <li>THREADS</li>
            <li>COMMUNITY</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">QUICK LINKS</h3>
          <ul className="footer-list">
            <li>LATEST NEWS</li>
            <li>MATCHES</li>
            <li>PLAYERS</li>
            <li>OFFICIAL SHOP</li>
          </ul>
        </div>

        <div className="footer-right">
          <p className="copyright">
            © 2026 Real Madrid Fan Community.<br />
            Unofficial fan page.
          </p>

          <p className="legal">
            This website is not affiliated with Real Madrid C.F. All trademarks belong to their respective owners.
          </p>

          <p className="hala">¡HALA MADRID!</p>
        </div>
      </div>
    </footer>
  );
}