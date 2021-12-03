import * as React from "react";
import styles from "./CardLatedProduct.module.scss";
import { ITopProduct } from "../../../models/topProducts";

export interface CardLatedProductProps {
  product: ITopProduct;
}

export function CardLatedProduct({ product }: CardLatedProductProps) {
  return (
    <div className={styles.card}>
      <div>
        <img src={product.img} />
      </div>
      <div className={styles.card__body}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>
          {Number(product.price).toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </div>
        <div className={styles.location}>
          {product.location === "VN" ? "Viet Nam" : product.location}
        </div>
        <div className={styles.sold}>Đã bán {product.sold}</div>
      </div>
    </div>
  );
}
