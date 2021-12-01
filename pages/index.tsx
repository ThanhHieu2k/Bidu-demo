import TopSection from "../components/TopSection";
import { topProductList, topSellerList, latedProductList } from "../data";
import Layout from "../components/Layout/Layout";
import SuggestToday from "../components/SuggestToday/SuggestToday";
import { Banner } from "../components/Banner";
import axios from "axios";

const Home = (props: any) => {
  return (
    <div>
      <Layout>
        <div className="main">
          <Banner />
          <TopSection
            topProductList={props.topProduct}
            topSellerList={props.topSeller}
            latedProductList={props.newestProduct}
          />
          <SuggestToday />
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(
    `https://commerce.bidu.com.vn/api/v2/mobile/home`
  );
  const data = await res.data;
  const topProduct = await data.data.top_product;
  const topSeller = await data.data.top_shop;
  const newestProduct = await data.data.newest_product;
  // Pass data to the page via props
  return {
    props: {
      topProduct: topProduct || null,
      topSeller: topSeller || null,
      newestProduct: newestProduct.slice(0, 4) || null,
    },
  };
}

export default Home;
