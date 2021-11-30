import * as React from "react";
import { Product } from "../../../data";
import { CardLatedProduct } from "../../Card";
import styles from "./LatedProduct.module.scss";

export interface LatedProductProps {
  latedProductList: Product[];
}

export default function LatedProduct(props: LatedProductProps) {
  const { latedProductList } = props;
  return (
    <div className={styles.latedProduct}>
      <div className={styles.latedProduct__head}>
        <span className={styles.latedProduct__head_title}>
          Sản Phẩm Mới Nhất
        </span>
      </div>
      <div className={styles.latedProduct__body}>
        {latedProductList.map((product) => {
          return <CardLatedProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
