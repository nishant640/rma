import Header from "../components/Header";
import PlayersBanner from "../components/PlayersBanner";
import PlayersQuote from "../components/PlayersQuote";
import PlayersCards from "../components/PlayersCards";
import PlayersSubscribe from "../components/PlayersSubscribe";
import PlayersHala from "../components/PlayersHala";
import Footer from "../components/Footer";

function PlayersPage() {
  return (
    <>
      <Header />
      <PlayersBanner />
      <PlayersQuote />
      <PlayersCards />
      <PlayersSubscribe />
      <PlayersHala />
      <Footer />
    </>
  );
}

export default PlayersPage;