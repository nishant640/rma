import "./NewsHeader.css";

function NewsHeader() {
  return (
    <>
      <header className="news-topbar">
        <div className="news-top-inner">
          <div className="news-top-left">
            <button
              className="news-nav-toggle"
              type="button"
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            <img
              className="news-mini-badge"
              src="/images/mini.png"
              alt="Real Madrid badge"
            />
          </div>

          <div className="news-top-center">
            <a className="news-brand" href="/">
              <img
                className="news-brand-logo"
                src="/images/logo.png"
                alt="Real Madrid"
              />
            </a>
          </div>

          <div className="news-top-right">
            <a
              href="https://www.adidas.co.uk/football"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="news-sponsor adidas-logo"
                src="/images/adidas.png"
                alt="Adidas"
              />
            </a>

            <a
              href="https://www.emirates.com/us/english/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="news-sponsor emirates-logo"
                src="/images/emirates.png"
                alt="Emirates"
              />
            </a>
          </div>
        </div>
      </header>

      <nav className="news-navrow">
        <ul className="news-nav-links">
          <li><a href="/">Home</a></li>
          <li><a className="active" href="/news">News</a></li>
          <li><a href="/players">Players</a></li>
          <li><a href="/matches">Matches</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default NewsHeader;