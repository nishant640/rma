import "./FeatureCards.css";

function FeatureCards() {
  return (
    <section className="feature-cards">

      <div className="feature-card">
        <img
          className="feature-img"
          src={`${process.env.PUBLIC_URL}/images/latest.png`}
          alt="Latest"
        />
        <div className="feature-content">
          <h3>Latest Results</h3>
        </div>
      </div>

      <div className="feature-card">
        <img
          className="feature-img"
          src={`${process.env.PUBLIC_URL}/images/upcoming.png`}
          alt="Upcoming"
        />
        <div className="feature-content">
          <h3>Upcoming Matches</h3>
        </div>
      </div>

      <div className="feature-card">
        <img
          className="feature-img"
          src={`${process.env.PUBLIC_URL}/images/news.png`}
          alt="News"
        />
        <div className="feature-content">
          <h3>Latest News</h3>
        </div>
      </div>

    </section>
  );
}

export default FeatureCards;