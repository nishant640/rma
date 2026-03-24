import "./Legendary.css";

function Legendary() {
  return (
    <section className="legendary-section">
      <h2 className="legendary-title">A LEGENDARY TRACK RECORD</h2>

      <div className="legendary-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/trophy.png`}
          alt="Trophy cabinet"
          className="legendary-image left-image"
        />

        <img
          src={`${process.env.PUBLIC_URL}/images/Tcount.png`}
          alt="Trophy stats"
          className="legendary-image right-image"
        />
      </div>
    </section>
  );
}

export default Legendary;