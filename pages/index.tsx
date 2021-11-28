import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import TopSection from "../components/TopSection";
import { topProductList, topSellerList, latedProductList } from "../data";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TopSection
        topProductList={topProductList}
        topSellerList={topSellerList}
        latedProductList={latedProductList}
      />
    </div>
  );
};

export default Home;
