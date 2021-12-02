import * as React from "react";
import { ISeller } from "../../../models/topSeller";
import { CardSeller } from "../../Card";

import styles from "./TopSeller.module.scss";
export interface TopSellerProps {
  topSellerList: ISeller[];
}

export function TopSeller(props: TopSellerProps) {
  const { topSellerList } = props;
  return (
    <>
      <div className={styles.topSeller}>
        <div className={styles.topSeller__head}>
          <span className={styles.content}>TOP NGƯỜI BÁN</span>
        </div>
        <div className={styles.topSeller__body}>
          {topSellerList.map((seller) => {
            return <CardSeller item={seller} key={seller.id} />;
          })}
        </div>
      </div>
    </>
  );
}
