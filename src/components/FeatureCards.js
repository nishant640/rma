import "./FeatureCards.css";

function FeatureCards() {
  return (
    <section className="feature-cards">

      <a href="#">
        <div className="feature-card">
          <img className="feature-img" src="/images/latest.png" alt="Latest" />
          <div className="feature-content">
            <h3>Latest Results</h3>
          </div>
        </div>
      </a>

      <a href="#">
        <div className="feature-card">
          <img className="feature-img" src="/images/upcoming.png" alt="Upcoming" />
          <div className="feature-content">
            <h3>Upcoming Matches</h3>
          </div>
        </div>
      </a>

      <a href="#">
        <div className="feature-card">
          <img className="feature-img" src="/images/news.png" alt="News" />
          <div className="feature-content">
            <h3>Latest News</h3>
          </div>
        </div>
      </a>

    </section>
  );
}

export default FeatureCards;