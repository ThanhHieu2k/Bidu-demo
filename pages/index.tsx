import TopSection from "../components/TopSection";
import { topProductList, topSellerList, latedProductList } from "../data";
import Layout from "../components/Layout/Layout";
import SuggestToday from "../components/SuggestToday/SuggestToday";
import { Banner } from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="main">
          <Banner />
          <TopSection
            topProductList={topProductList}
            topSellerList={topSellerList}
            latedProductList={latedProductList}
          />
          <SuggestToday />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
