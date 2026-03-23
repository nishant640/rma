import Header from "../components/Header";
import Hero from "../components/Hero";
import QuoteSection from "../components/QuoteSection";
import FeatureCards from "../components/FeatureCards";
import PlayerSpotlight from "../components/PlayerSpotlight";
import Legendary from "../components/Legendary";
import ShopSection from "../components/ShopSection";
import WatchContact from "../components/WatchContact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <QuoteSection />
      <FeatureCards />
      <PlayerSpotlight />
      <Legendary />
      <ShopSection />
      <WatchContact />
      <Footer />
    </div>
  );
}

export default HomePage;