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
        <img src={product.images[0]} />
      </div>
      <div className={styles.card__body}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{product.before_sale_price}</div>
        <div className={styles.location}>
          {product.shop.country === "VN" ? "Viet Nam" : product.shop.country}
        </div>
        <div className={styles.sold}>Đã bán {product.sold}</div>
      </div>
    </div>
  );
}
