import productImg from "../assets/product.png";

export interface Seller {
  id: number;
  name: string;
  rate: number;
  follow: number;
  img: StaticImageData;
}

export const topSellerList: Seller[] = [
  {
    id: 1,
    name: "MUTINE",
    rate: 4.9,
    follow: 120,
    img: productImg,
  },
  {
    id: 2,
    name: "OLLIE & ELLIE",
    rate: 4.9,
    follow: 120,
    img: productImg,
  },
  {
    id: 3,
    name: "Tadasana",
    rate: 4.9,
    follow: 120,
    img: productImg,
  },
  {
    id: 4,
    name: "TUILUA",
    rate: 4.9,
    follow: 120,
    img: productImg,
  },
  {
    id: 5,
    name: "Mona Store",
    rate: 4.9,
    follow: 983,
    img: productImg,
  },
];
