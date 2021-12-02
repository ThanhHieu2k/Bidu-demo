import { TopProduct } from "./TopProduct";
import { TopSeller } from "./TopSeller";

import * as React from "react";
import { Product, Seller } from "../../data";
import { Container, Col, Row } from "reactstrap";
import LatedProduct from "./LatedProduct";

export interface TopSectionProps {
  topProductList: Product[];
  topSellerList: Seller[];
  latedProductList: Product[];
}

export default function TopSection(props: TopSectionProps) {
  const { topProductList, topSellerList, latedProductList } = props;
  return (
    <div className="grid">
      <Row>
        <Col lg="3">
          <TopProduct topProductList={topProductList} />
        </Col>
        <Col lg="9">
          <>
            <TopSeller topSellerList={topSellerList} />
            <LatedProduct latedProductList={latedProductList} />
          </>
        </Col>
      </Row>
    </div>
  );
}
