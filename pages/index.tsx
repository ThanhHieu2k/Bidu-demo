import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios from "axios";


import Layout from "../components/Layout/Layout";
import SuggestToday from "../components/SuggestToday/SuggestToday";
import Banner from "../components/Banner";

import CategoryAPI from "../services/CategoryAPI";
import CategoryModel from "../models/categoryModel";

const Home = ({ categories }) => {
  return (
    <div>
      <>
        <Layout>
          <div className="main">
            <Banner categories={categories} />
            <SuggestToday />
          </div>
        </Layout>
      </>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await CategoryAPI.getCategory();
    let categories = CategoryModel.getListArray(res.data.data);
    return {
      props: {
        categories: categories,
      },
    };
  } catch (error) {
    return { error };
  }
};

export default Home;
