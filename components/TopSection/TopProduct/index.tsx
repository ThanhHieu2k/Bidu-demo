import * as React from "react";
import { ITopProduct } from "../../../models/topProducts";
import { CardProduct } from "../../Card";

import styles from "./TopProduct.module.scss";

export interface TopProductProps {
  topProductList: ITopProduct[];
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
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
