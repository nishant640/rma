import { useState } from "react";
import Header from "../components/Header";
import NewsHero from "../components/NewsHero";
import NewsMain from "../components/NewsMain";
import NewsAdd from "../components/NewsAdd";
import NewsSubscribe from "../components/NewsSubscribe";
import NewsQuote from "../components/NewsQuote";
import Footer from "../components/Footer";

function NewsPage() {
  const [refreshNews, setRefreshNews] = useState(0);

  const handleNewsPosted = () => {
    setRefreshNews((prev) => prev + 1);
  };

  return (
    <div>
      <Header />
      <NewsHero />
      <NewsMain refreshNews={refreshNews} />
      <NewsAdd onNewsPosted={handleNewsPosted} />
      <NewsSubscribe />
      <NewsQuote />
      <Footer />
    </div>
  );
}

export default NewsPage;