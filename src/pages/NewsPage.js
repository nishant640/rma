import NewsHeader from "../components/NewsHeader";
import NewsHero from "../components/NewsHero";
import NewsMain from "../components/NewsMain";
import NewsSubscribe from "../components/NewsSubscribe";
import NewsQuote from "../components/NewsQuote";
import Footer from "../components/Footer";

function NewsPage() {
  return (
    <div>
      <NewsHeader />
      <NewsHero />
      <NewsMain />
      <NewsSubscribe />
      <NewsQuote />
      <Footer />
    </div>
  );
}

export default NewsPage;