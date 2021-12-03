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

const Home = (props: any) => {
  // console.log(process.env.API_ENDPOINT_SUGGEST )
  // console.log(process.env);

  return (
    <div>
      <Layout>
        <div className="main">
          <Banner categories={props.categories} />
          <TopSection />
          <SuggestToday />
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const result = await CategoryAPI.getCategory();
    let categories = CategoryModel.getListArray(result.data.data);
    // Pass data to the page via props
    return {
      props: {
        categories: categories,
      },
    };
  } catch (error) {
    return { error };
  }
}

export default Home;
