import React from "react";
import Header from "../components/Header";
import MatchesHero from "../components/MatchesHero";
import MatchesResults from "../components/MatchesResults";
import UpcomingMatches from "../components/UpcomingMatches";
import Newsletter from "../components/Newsletter";
import MatchesQuote from "../components/MatchesQuote";
import Footer from "../components/Footer";

export default function MatchesPage() {
  return (
    <div>
      <Header />
      <MatchesHero />
      <MatchesResults />
      <UpcomingMatches />
      <Newsletter />
      <MatchesQuote />
      <Footer />
    </div>
  );
}