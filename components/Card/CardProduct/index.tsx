import * as React from "react";
import styles from "./CartProduct.module.scss";
import { Product } from "../../../data";
import { ITopProduct } from "../../../models/topProducts";
export interface CardProductProps {
  rank: number;
  product: ITopProduct;
}

export function CardProduct({ product, rank }: CardProductProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <img src={product.img} />
        <div className={styles.rank}>{rank + 1}</div>
      </div>
      <div className={styles.card__right}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{product.price + " ₫"}</div>
        <div className={styles.location}>
          {product.location === "VN" ? "Viet Nam" : product.location}
        </div>
        <div className={styles.sold}>Đã bán {product.sold}</div>
      </div>
    </div>
  );
}
