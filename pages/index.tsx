import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";

import CategoryAPI from "../services/CategoryAPI";

import Layout from "../components/Layout/Layout";
import SuggestToday from "../components/SuggestToday/SuggestToday";
import Banner from "../components/Banner";
import TopProductModel from "../models/topProducts";
import TopSellerModel from "../models/topSeller";
import TopSection from "../components/TopSection";

import CategoryModel from "../models/categoryModel";

const Home = (props:any) => {

  return (
    <div>
        <Layout>
          <div className="main">
            <Banner categories={props.categories} />
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
  try {
    const res = await axios.get(
      `https://commerce.bidu.com.vn/api/v2/mobile/home`
    );
    const data = await res.data;
    const topProduct = await TopProductModel.getListArray(data.data.top_product);
    const topSeller = await TopSellerModel.getListArray(data.data.top_shop);
    const newestProduct = await TopProductModel.getListArray(
      data.data.newest_product
    );

    const result = await CategoryAPI.getCategory();
    let categories = CategoryModel.getListArray(result.data.data);
    // Pass data to the page via props
    return {
      props: {
        topProduct: topProduct || null,
        topSeller: topSeller || null,
        newestProduct: newestProduct.slice(0, 4) || null,
        categories: categories,
      },
    };
  }catch(error) {
    return {error}
  }
 
}

// export const getStaticProps = async () => {
//   try {
//     const { data } = await CategoryAPI.getCategory();
//     let categories = CategoryModel.getListArray(data.data);
//     return {
//       props: {
//         categories: categories,
//       },
//     };
//   } catch (error) {
//     return { error };
//   }
// };

export default Home;
