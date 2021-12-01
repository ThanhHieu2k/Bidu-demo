import * as React from "react";
import styles from "./CartProduct.module.scss";
import { Product } from "../../../data";
export interface CardProductProps {
  rank: number;
  product: Product;
}

export function CardProduct({ product, rank }: CardProductProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <img src={product.images[0]} />
        <div className={styles.rank}>{rank + 1}</div>
      </div>
      <div className={styles.card__right}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{product.before_sale_price + " ₫"}</div>
        <div className={styles.location}>
          {product.shop.country === "VN" ? "Viet Nam" : product.shop.country}
        </div>
        <div className={styles.sold}>Đã bán {product.sold}</div>
      </div>
    </div>
  );
}
