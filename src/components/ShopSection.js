import "./ShopSection.css";

function ShopSection() {
  return (
    <section className="shop-section">
      <h2 className="shop-title">SHOP REAL MADRID</h2>

      <a
        className="shop-card"
        href="https://shop.realmadrid.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="shop-card-inner">
          <img
            className="shop-logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Real Madrid Logo"
          />
          <div className="shop-text">
            <span>Official Store</span>
          </div>
        </div>
      </a>

      <h2 className="shop-title">STREAM REAL MADRID</h2>

      <a
        className="shop-card"
        href="https://play.realmadrid.com/home?itm_campaign=rmcom-menuheader_all_acceso_ott_en&language=en-US"
        target="_blank"
        rel="noreferrer"
      >
        <div className="shop-card-inner">
          <img
            className="shop-logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Real Madrid Logo"
          />
          <div className="shop-text">
            <span>RM PLAY</span>
          </div>
        </div>
      </a>
    </section>
  );
}

export default ShopSection;