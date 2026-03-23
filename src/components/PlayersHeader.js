import "./PlayersHeader.css";

function PlayersHeader() {
  return (
    <>
      <header className="players-topbar">
        <div className="players-top-inner">
          <div className="players-top-left">
            <button
              className="players-nav-toggle"
              type="button"
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            <img
              className="players-mini-badge"
              src="/images/mini.png"
              alt="Real Madrid badge"
            />
          </div>

          <div className="players-top-center">
            <a className="players-brand" href="/">
              <img
                className="players-brand-logo"
                src="/images/logo.png"
                alt="Real Madrid"
              />
            </a>
          </div>

          <div className="players-top-right">
            <a
              className="players-sponsor-link"
              href="https://www.adidas.co.uk/football"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="players-sponsor players-adidas"
                src="/images/adidas.png"
                alt="Adidas"
              />
            </a>

            <a
              className="players-sponsor-link"
              href="https://www.emirates.com/us/english/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="players-sponsor players-emirates"
                src="/images/emirates.png"
                alt="Emirates"
              />
            </a>
          </div>
        </div>
      </header>

      <nav className="players-navrow">
        <ul className="players-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/news">News</a></li>
          <li><a className="active" href="/players">Players</a></li>
          <li><a href="/matches">Matches</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default PlayersHeader;