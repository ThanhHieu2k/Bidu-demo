import * as React from "react";
import styles from "./CardLatedProduct.module.scss";
import { Product } from "../../../data";

export interface CardLatedProductProps {
  product: Product;
}

export function CardLatedProduct({ product }: CardLatedProductProps) {
  return (
    <div className={styles.card}>
      <div>
        <img src="https://commerce.bidu.com.vn//uploads/images/products/1637995536088_image_730688.jpg" />
      </div>
      <div className={styles.card__body}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{product.price}</div>
        <div className={styles.location}>{product.location}</div>
        <div className={styles.sold}>Đã bán {product.sold}</div>
      </div>
    </div>
  );
}
