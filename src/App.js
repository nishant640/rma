import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import FeatureCards from "./components/FeatureCards";
import PlayerSpotlight from "./components/PlayerSpotlight";
import Legendary from "./components/Legendary";
import ShopSection from "./components/ShopSection";
import WatchContact from "./components/WatchContact";
import LVBanner from "./components/LVBanner";
import FinalBanner from "./components/FinalBanner";
import Footer from "./components/Footer";

import NewsPage from "./pages/NewsPage";

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
      <LVBanner />
      <FinalBanner />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;