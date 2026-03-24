import Header from "../components/Header";
import NewsHero from "../components/NewsHero";
import NewsMain from "../components/NewsMain";
import NewsSubscribe from "../components/NewsSubscribe";
import NewsQuote from "../components/NewsQuote";
import Footer from "../components/Footer";

function NewsPage() {
  return (
    <div>
      <Header />
      <NewsHero />
      <NewsMain />
      <NewsSubscribe />
      <NewsQuote />
      <Footer />
    </div>
  );
}

export default NewsPage;