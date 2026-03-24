import "./LVBanner.css";

function LVBanner() {
  return (
    <section className="lv-banner">
      <img
        src={`${process.env.PUBLIC_URL}/images/lv.png`}
        alt="Louis Vuitton x Real Madrid"
      />
    </section>
  );
}

export default LVBanner;