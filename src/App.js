import { HashRouter, Routes, Route } from "react-router-dom";

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
import PlayersPage from "./pages/PlayersPage";
import MatchesPage from "./pages/MatchesPage";
import LoginPage from "./pages/LoginPage";

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;