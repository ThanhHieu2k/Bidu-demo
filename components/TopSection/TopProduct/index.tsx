import * as React from "react";
import { Product } from "../../../data";
import { CardProduct } from "../../Card";

import styles from "./TopProduct.module.scss";

export interface TopProductProps {
  topProductList: Product[];
}

export function TopProduct(props: TopProductProps) {
  const { topProductList } = props;
  return (
    <div className={styles.topProduct}>
      <div className={styles.topProduct__head}>
        <span>TOP SẢN PHẨM</span>
      </div>
      <div className={styles.topProduct__body}>
        {topProductList.map((product) => {
          return (
            <CardProduct
              rank={topProductList.indexOf(product)}
              product={product}
              key={product._id}
            />
          );
        })}
      </div>
    </div>
  );
}
