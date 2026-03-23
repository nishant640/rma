import PlayersHeader from "../components/PlayersHeader";
import PlayersBanner from "../components/PlayersBanner";
import PlayersQuote from "../components/PlayersQuote";
import PlayersCards from "../components/PlayersCards";
import PlayersSubscribe from "../components/PlayersSubscribe";
import PlayersHala from "../components/PlayersHala";
import PlayersFooter from "../components/PlayersFooter";

function PlayersPage() {
  return (
    <>
      <PlayersHeader />
      <PlayersBanner />
      <PlayersQuote />
      <PlayersCards />
      <PlayersSubscribe />
      <PlayersHala />
      <PlayersFooter />
    </>
  );
}

export default PlayersPage;