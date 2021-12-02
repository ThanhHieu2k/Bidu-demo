/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { ISeller } from "../../../models/topSeller";
import styles from "./CardSeller.module.scss";

export interface CardSellerProps {
  item: ISeller;
}

export function CardSeller(props: CardSellerProps) {
  const { item } = props;
  return (
    <div className={styles.card}>
      <div className={styles.card__rank}>{item.rank}</div>
      <img src={item.img} alt="shop avt" />
      <br />
      <span className={styles.card__name}>{item.name}</span>
      <span className={styles.card__status}>New</span> <br />
      <img
        src="https://www.bidu.com.vn/images/icons/shop-heart.svg"
        className={styles.img_like}
      />
      <span className={styles.card_rate}>{" " + item.rate}</span>
      <span className={styles.card__sold}>
        {" | " + item.follow} lượt theo dõi
      </span>
      <div className={styles.card__button}>
        {"Xem shop "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </div>
    </div>
  );
}
