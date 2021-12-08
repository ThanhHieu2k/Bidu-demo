import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import axios from "axios";

// Component import place
import Layout from "../components/Layout/Layout";
import SuggestToday from "../components/SuggestToday/SuggestToday";
import Banner from "../components/Banner";
import TopProductModel from "../models/topProducts";
import TopSellerModel from "../models/topSeller";
import TopSection from "../components/TopSection";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import CategoryModel from "../models/categoryModel";
import CategoryAPI from "../services/CategoryAPI";

import ModalLayout from "../components/ModalLayout";

// Import scss place
import styles from "./modal.module.scss";

const Home = (props: any) => {
  const [isType, setIsType] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // function renderModal() {
  //   if (isModalVisible && isType === "login") {
  //     return (
  //       <Modal
  //         className={`${styles["ant-modal-content"]}`}
  //         visible={isModalVisible}
  //         onCancel={handleCancel}
  //       >
  //         <LoginModal />
  //       </Modal>
  //     );
  //   } else if (isModalVisible && isType === "register") {
  //     return (
  //       <Modal
  //         className={`${styles["ant-modal-content"]}`}
  //         visible={isModalVisible}
  //         onCancel={handleCancel}
  //       >
  //         <RegisterModal />
  //       </Modal>
  //     );
  //   }
  // }

  return (
    <div>
      <Layout
        isType={isType}
        setIsType={setIsType}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <div className="main">
          {/* {renderModal()} */}
          <ModalLayout
            isModalVisible={isModalVisible}
            onCancel={handleCancel}
            isType={isType}
          />
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

export async function getServerSideProps(params) {
  // Fetch data from external API
  try {
    const res = await axios.get(
      `https://commerce.bidu.com.vn/api/v2/mobile/home`
    );
    const data = await res.data;
    const topProduct = await TopProductModel.getListArray(
      data.data.top_product
    );
    const topSeller = await TopSellerModel.getListArray(data.data.top_shop);
    const newestProduct = await TopProductModel.getListArray(
      data.data.newest_product
    );

    const result = await CategoryAPI.getCategory(params);
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
  } catch (error) {
    return { error };
  }
}

export default Home;
