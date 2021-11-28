import * as React from "react";
import styles from "./CartProduct.module.scss";
import { Product } from "../../../data";
export interface CardProductProps {
  product: Product;
}

export function CardProduct({ product }: CardProductProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <img src="https://commerce.bidu.com.vn//uploads/images/products/1636558504857_image_605917.jpeg" />
        <div className={styles.rank}>{product.id}</div>
      </div>
      <div className={styles.card__right}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{product.price}</div>
        <div className={styles.location}>{product.location}</div>
        <div className={styles.sold}>Đã bán {product.sold}</div>
      </div>
    </div>
  );
}
