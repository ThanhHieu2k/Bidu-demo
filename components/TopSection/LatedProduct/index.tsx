import Slider from "react-slick";
import * as React from "react";
``;
import { ITopProduct } from "../../../models/topProducts";
import { CardLatedProduct } from "../../Card";
import styles from "./LatedProduct.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export interface LatedProductProps {
  latedProductList: ITopProduct[];
}

export default function LatedProduct(props: LatedProductProps) {
  const { latedProductList } = props;
  const PrevArrow = ({ onClick }: any) => {
    return (
      <div className={styles.arrowPrev} onClick={onClick}>
        <img
          src="https://www.bidu.com.vn/images/icon/category_back.svg"
          alt="Arrow Prev"
        />
      </div>
    );
  };
  const NextArrow = ({ onClick }: any) => {
    return (
      <div className={styles.arrowNext} onClick={onClick}>
        <img
          src="https://www.bidu.com.vn/images/icon/category_next.svg"
          alt="Arrow Next"
        />
      </div>
    );
  };
  const setting = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className={styles.latedProduct}>
      <div className={styles.latedProduct__head}>
        <span className={styles.latedProduct__head_title}>
          Sản Phẩm Mới Nhất
        </span>
      </div>
      <div className={styles.latedProduct__body}>
        <div className={styles.slider}>
          <Slider {...setting} className={styles.slider__content}>
            {latedProductList.map((product) => {
              return <CardLatedProduct product={product} key={product.id} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
