import React, { useState } from "react";
import "./LoginHeader.css";

export default function LoginHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="top-inner">
          <div className="top-left">
            <button
              className="nav-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-controls="mainNav"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            <img className="mini-badge" src="/images/mini.png" alt="mini badge" />
          </div>

          <div className="top-center">
            <a className="brand" href="../homepage/index.html">
              <img className="brand-logo" src="/images/logo.png" alt="Real Madrid" />
            </a>
          </div>

          <div className="top-right">
            <img className="sponsor" src="/images/adidas.png" alt="Adidas" />
            <img className="sponsor" src="/images/emirates.png" alt="Emirates" />
          </div>
        </div>
      </header>

      <nav className="navrow">
        <ul className={`nav-links ${open ? "is-open" : ""}`} id="mainNav">
          <li><a href="../homepage/index.html">Home</a></li>
          <li><a href="../news/index.html">News</a></li>
          <li><a href="../players/">Players</a></li>
          <li><a href="../matches/">Matches</a></li>
          <li><a className="active" href="#">Login</a></li>
        </ul>
      </nav>
    </>
  );
}