import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { Carousel } from "antd";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./banner.module.scss";

import Loadder from "../Loadder";

const Banner = ({ categories }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  function renderSlick() {
    return categories.map((objectImageItem, objectImageIndex) => {
      return (
        <div className={styles.main__slick_list_item}>
          <img
            className={styles.main__slick_list_item_img}
            key={objectImageIndex}
            src={objectImageItem?.avatar}
            alt="Image"
          />
          <h4>{objectImageItem?.name}</h4>
        </div>
      );
    });
  }

  const setting = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 12,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerPadding: "15px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dotPosition = {
    margin: "0px",
  };

  const contentStyle = {
    dots: true,
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    infinite: true,
    easing: "linear",
    speed: 300,
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__carousel}>
        <Carousel swipeToSlide draggable  {...contentStyle}>
          <div className={styles.main__carousel_item}>
            <img
              // className={styles.contentStyle}
              src="https://commerce.bidu.com.vn//uploads/1637072496395_image_337085.jpg"
              alt="Ảnh Banner 1"
            />

            <div className={styles.main__carousel_item_content}>
              <h3>TẢI NGAY !</h3>
              <div className={styles.main__carousel_item_content_image}>
                <img
                  src="https://www.bidu.com.vn/images/header/app_store_black.png"
                  alt=""
                />
                <img
                  src="https://www.bidu.com.vn/images/header/google_play_black.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.main__carousel_item}>
            <img
              src="https://commerce.bidu.com.vn//uploads/1637072128836_image_308519.jpg"
              alt="Ảnh Banner 2"
            />
            <div className={styles.main__carousel_item_content}>
              <h3>TẢI NGAY !</h3>
              <div className={styles.main__carousel_item_content_image}>
                <img
                  src="https://www.bidu.com.vn/images/header/app_store_black.png"
                  alt=""
                />
                <img
                  src="https://www.bidu.com.vn/images/header/google_play_black.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={styles.main__carousel_item}>
            <img
              src="https://commerce.bidu.com.vn//uploads/1637071707755_image_682457.jpg"
              alt="Ảnh Banner 3"
            />
            <div className={styles.main__carousel_item_content}>
              <h3>TẢI NGAY</h3>
              <div className={styles.main__carousel_item_content_image}>
                <img
                  src="https://www.bidu.com.vn/images/header/app_store_black.png"
                  alt=""
                />
                <img
                  src="https://www.bidu.com.vn/images/header/google_play_black.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={styles.main__carousel_item}>
            <img
              src="https://commerce.bidu.com.vn//uploads/1637069644337_image_55823.jpg"
              alt="Ảnh Banner 4"
            />
            <div className={styles.main__carousel_item_content}>
              <h3>TẢI NGAY !</h3>
              <div className={styles.main__carousel_item_content_image}>
                <img
                  src="https://www.bidu.com.vn/images/header/app_store_black.png"
                  alt=""
                />
                <img
                  src="https://www.bidu.com.vn/images/header/google_play_black.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles.main__slick}>
        <div className={styles.main__slick_list}>
          <div className={styles["main__slick_list_arrow_prev"]}>
            <img
              src="https://www.bidu.com.vn/images/icon/category_back.svg"
              alt="Arrow Prev"
            />
          </div>
          {isLoading ? (
            <Loadder />
          ) : (
            <Slider {...setting} className={styles.main__slick_list_slider}>
              {renderSlick()}
            </Slider>
          )}

          <div className={styles["main__slick_list_arrow_next"]}>
            <img
              src="https://www.bidu.com.vn/images/icon/category_next.svg"
              alt="Arrow Next"
            />
          </div>
        </div>
      </div>

      <div className={styles.main__banner}>
        <div className={styles.main__banner_list}>
          <div className={styles.main__banner_list_item}>
            <Image
              className={styles.main__banner_list_item_img}
              alt="Image Wrapper"
              src={`/images/Frame3.png`}
              width={435}
              height={110}
            />
          </div>

          <div className={styles.main__banner_list_item}>
            <Image
              className={styles.main__banner_list_item_img}
              alt="Image Wrapper"
              src={`/images/Frame2.png`}
              width={435}
              height={110}
            />
          </div>

          <div className={styles.main__banner_list_item}>
            <Image
              className={styles.main__banner_list_item_img}
              alt="Image Wrapper"
              src={`/images/Frame1.png`}
              width={435}
              height={110}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
