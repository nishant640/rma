import "./PlayersFooter.css";

export default function PlayersFooter() {
  return (
    <footer className="players-footer">
      <div className="players-footer-inner">

        {/* LEFT */}
        <div className="footer-left">
          <img src="/images/logo.png" alt="Real Madrid" className="footer-logo" />
          <p className="footer-desc">
            The ultimate unofficial fan page for Madridistas worldwide.
          </p>
        </div>

        {/* COMMUNITY */}
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

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3 className="footer-title">QUICK LINKS</h3>
          <ul className="footer-list">
            <li>LATEST NEWS</li>
            <li>MATCHES</li>
            <li>PLAYERS</li>
            <li>OFFICIAL SHOP</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <p>
            © 2026 Real Madrid Fan Community.<br />
            Unofficial fan page.
          </p>

          <p>
            This website is not affiliated with Real Madrid C.F. All trademarks
            belong to their respective owners.
          </p>

          <p className="hala">¡HALA MADRID!</p>
        </div>

      </div>
    </footer>
  );
}