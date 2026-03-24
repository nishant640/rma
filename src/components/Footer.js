import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-brand">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Real Madrid crest"
            />
          </div>

          <p className="footer-desc">
            The ultimate unofficial fan page for
            <br />
            Madridistas worldwide.
          </p>
        </div>

        {/* COMMUNITY */}
        <div className="footer-column">
          <h3>COMMUNITY</h3>
          <p>JOIN FORUMS</p>
          <p>FAN POLLS</p>
          <p>MATCH</p>
          <p>THREADS</p>
          <p>COMMUNITY</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <p>LATEST NEWS</p>
          <p>MATCHES</p>
          <p>PLAYERS</p>
          <p>OFFICIAL SHOP</p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <p className="footer-copy">
            © 2026 Real Madrid Fan Community.
            <br />
            <strong>Unofficial fan page.</strong>
          </p>

          <p className="footer-small">
            This website is not affiliated with Real Madrid C.F.
            <br />
            All trademarks belong to their respective owners.
          </p>

          <p className="footer-hala">¡HALA MADRID!</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;