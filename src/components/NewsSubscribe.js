import "./NewsSubscribe.css";

function NewsSubscribe() {
  return (
    <section className="news-subscribe-wrap">
      <div className="news-subscribe-box">
        <h2>NEVER MISS AN UPDATE</h2>
        <p>
          Subscribe to our newsletter and get the latest Real Madrid news
          delivered straight to your inbox.
        </p>

        <form className="news-subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default NewsSubscribe;