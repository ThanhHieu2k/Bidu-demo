import { TopProduct } from "./TopProduct";
import { TopSeller } from "./TopSeller";
import * as React from "react";
import { Col, Row } from "reactstrap";
import LatedProduct from "./LatedProduct";
import TopSectionService from "../../services/TopSection";
import TopProductModel from "../../models/topProducts";
import TopSellerModel from "../../models/topSeller";

export default function TopSection() {
  const [topProduct, setTopProduct] = React.useState([]);
  const [topSeller, setTopSeller] = React.useState([]);
  const [newestProduct, setNewestProduct] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      setTopProduct(
        TopProductModel.getListArray(await TopSectionService.getTopProduct())
      );

      setTopSeller(
        TopSellerModel.getListArray(await TopSectionService.getTopSeller())
      );

      setNewestProduct(
        TopProductModel.getListArray(await TopSectionService.getNewestProduct())
      );
    }

    fetchData();
  }, []);

  return (
    <div className="grid">
      <Row>
        <Col lg="3">
          <TopProduct topProductList={topProduct} />
        </Col>
        <Col lg="9">
          <>
            <TopSeller topSellerList={topSeller} />
            <LatedProduct latedProductList={newestProduct} />
          </>
        </Col>
      </Row>
    </div>
  );
}
