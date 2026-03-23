import "./Header.css";

function Header() {
  return (
    <>
      <header className="topbar">
        <div className="top-inner">

          <div className="top-left">
            <button className="nav-toggle">☰</button>
            <img className="mini-badge" src="/images/mini.png" alt="mini badge" />
          </div>

          <div className="top-center">
            <a className="brand" href="#">
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
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Players</a></li>
          <li><a href="#">Matches</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;