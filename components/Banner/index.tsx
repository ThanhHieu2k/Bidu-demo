import Head from "next/head";
import Image from "next/image";
import { Carousel } from "antd";
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Frame1 from "../../public/images/Frame1.png";
import Frame2 from "../../public/images/Frame2.png";
import Frame3 from "../../public/images/Frame3.png";
import carousel4 from "../../public/images/carousel4.png";

import styles from "./banner.module.scss";

import "./mixin.module.scss";

export const Banner = () => {
  const objectImage = [
    {
      id: 1,
      url: "https://commerce.bidu.com.vn//uploads/1629954500898_image_307060.png",
      name: "Túi",
    },
    {
      id: 2,
      url: "https://commerce.bidu.com.vn//uploads/1629954320037_image_768625.png",
      name: "Áo",
    },
    {
      id: 3,
      url: "https://commerce.bidu.com.vn//uploads/1629954363982_image_914596.png",
      name: "Váy Liền/SET",
    },
    {
      id: 4,
      url: "https://commerce.bidu.com.vn//uploads/1629954389642_image_870825.png",
      name: "Quần",
    },
    {
      id: 5,
      url: "https://commerce.bidu.com.vn//uploads/1629954416725_image_793364.png",
      name: "Chân Váy",
    },
    {
      id: 6,
      url: "https://commerce.bidu.com.vn//uploads/1629954525093_image_973898.png",
      name: "Giày",
    },
    {
      id: 7,
      url: "https://commerce.bidu.com.vn//uploads/1629954610516_image_478970.png",
      name: "Trang Sức",
    },
    {
      id: 8,
      url: "https://commerce.bidu.com.vn//uploads/1629954653272_image_163046.png",
      name: "Đồ mặc nhà",
    },
    {
      id: 9,
      url: "https://commerce.bidu.com.vn//uploads/1629954685487_image_524647.png",
      name: "Đồ Lót",
    },
    {
      id: 10,
      url: "https://commerce.bidu.com.vn//uploads/1629954710650_image_815180.png",
      name: "Đồ bơi",
    },
    {
      id: 11,
      url: "https://commerce.bidu.com.vn//uploads/1629954814737_image_161132.png",
      name: "Đồ tập",
    },
    {
      id: 12,
      url: "https://commerce.bidu.com.vn//uploads/1629960267208_image_972168.png",
      name: "Phụ kiện",
    },
    {
      id: 13,
      url: "https://commerce.bidu.com.vn//uploads/1629970920650_image_454802.png",
      name: "Sắc đẹp",
    },
    {
      id: 14,
      url: "https://commerce.bidu.com.vn//uploads/1631804138365_image_36519.png",
      name: "Áo khoác",
    },
    {
      id: 15,
      url: "https://commerce-test.bidu.com.vn//uploads/1631884946235_image_438169.png",
      name: "quốc tế",
    },
  ];

  function renderSlick() {
    return objectImage.map((objectImageItem, objectImageIndex) => {
      return (
        <div className={styles.main__slick_list_item}>
          <img
            className={styles.main__slick_list_item_img}
            key={objectImageIndex}
            src={objectImageItem.url}
            alt=""
          />
          <h4>{objectImageItem.name}</h4>
        </div>
      );
    });
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 12,
    slidesToShow: 10,
    slidesToScroll: 3,
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
        <Carousel
          // effect="fade"
          swipeToSlide
          draggable
          autoplay
          {...contentStyle}
        >
          <div className={styles.main__carousel_item}>
            <img
              // className={styles.contentStyle}
              src="https://commerce.bidu.com.vn//uploads/1637072496395_image_337085.jpg"
              alt="Ảnh Banner 1"
            />

            <div className={styles.main__carousel_item_content}>
              <div className={styles.main__carousel_item_content_image}>
                <h3>TẢI NGAY</h3>
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
              <div className={styles.main__carousel_item_content_image}>
                <h3>TẢI NGAY</h3>
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
              <div className={styles.main__carousel_item_content_image}>
                <h3>TẢI NGAY</h3>
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
              <div className={styles.main__carousel_item_content_image}>
                <h3>TẢI NGAY</h3>
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
          <Slider {...settings} className={styles.main__slick_list_slider}>
            {renderSlick()}
          </Slider>
        </div>
      </div>

      <div className={styles.main__banner}>
        <div className={styles.main__banner_list}>
          <div className={styles.main__banner_list_item}>
            <Image
              className={styles.main__banner_list_item_img}
              alt="Image Wrapper"
              src={Frame3}
            />
          </div>

          <div className={styles.main__banner_list_item}>
            <Image
              className={styles.main__banner_list_item_img}
              alt="Image Wrapper"
              src={Frame2}
            />
          </div>

          <div className={styles.main__banner_list_item}>
            <Image
              className={styles.main__banner_list_item_img}
              alt="Image Wrapper"
              src={Frame1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
