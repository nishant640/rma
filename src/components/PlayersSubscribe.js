import "./PlayersSubscribe.css";

export default function PlayersSubscribe() {
  return (
    <section className="players-subscribe">
      <div className="players-subscribe-inner">
        <h2>NEVER MISS AN UPDATE</h2>
        <p>
          Subscribe to our newsletter and get the latest Real Madrid news
          delivered straight to your inbox.
        </p>

        <div className="players-subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}