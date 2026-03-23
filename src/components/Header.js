import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="topbar">
        <div className="top-inner">
          <div className="top-left">
            <button className="nav-toggle" type="button">☰</button>
            <img className="mini-badge" src="/images/mini.png" alt="mini badge" />
          </div>

          <div className="top-center">
            <Link className="brand" to="/">
              <img className="brand-logo" src="/images/logo.png" alt="Real Madrid" />
            </Link>
          </div>

          <div className="top-right">
            <img className="sponsor" src="/images/adidas.png" alt="Adidas" />
            <img className="sponsor" src="/images/emirates.png" alt="Emirates" />
          </div>
        </div>
      </header>

      <nav className="navrow">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;