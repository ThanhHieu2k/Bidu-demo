import * as React from "react";
import { Product } from "../../../data";
import { CardProduct } from "../../Card";

import styles from "./TopProduct.module.scss";

export interface TopProductProps {
  topProductList: Product[];
}

export function TopProduct(props: TopProductProps) {
  const { topProductList } = props;
  console.log(topProductList);
  return (
    <div className={styles.topProduct}>
      <div className={styles.topProduct__head}>
        <span>TOP SẢN PHẨM</span>
      </div>
      <div className={styles.topProduct__body}>
        {topProductList.map((product) => {
          return <CardProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
