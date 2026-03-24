import React from "react";
import MatchesHeader from "../components/MatchesHeader";
import MatchesHero from "../components/MatchesHero";
import MatchesResults from "../components/MatchesResults";
import UpcomingMatches from "../components/UpcomingMatches";
import Newsletter from "../components/Newsletter";
import MatchesQuote from "../components/MatchesQuote";
import MatchesFooter from "../components/MatchesFooter";

export default function MatchesPage() {
  return (
    <div>
      <MatchesHeader />
      <MatchesHero />
      <MatchesResults />
      <UpcomingMatches />
      <Newsletter />
      <MatchesQuote />
      <MatchesFooter />
    </div>
  );
}