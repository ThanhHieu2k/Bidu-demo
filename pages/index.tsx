import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import SuggestToday from "../components/SuggestToday/SuggestToday";
import { Banner } from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="main">
          <Banner />
          <SuggestToday />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
