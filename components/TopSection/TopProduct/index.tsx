import * as React from "react";
import { Button, Col } from "reactstrap";
import { Product } from "../../../pages";
import CardProduct from "../../CardProduct";

import styles from "./TopProduct.module.scss";

export interface TopProductProps {
  listProduct: Product[];
}

export function TopProduct(props: TopProductProps) {
  const { listProduct } = props;
  console.log(listProduct);
  return (
    <Col lg="3" className={styles.top__product}>
      <div className={styles.head}>
        <span>TOP SẢN PHẨM</span>
      </div>
      <div className={styles.body}>
        {listProduct.map((product) => {
          return <CardProduct product={product} key={product.id} />;
        })}
      </div>
    </Col>
  );
}
