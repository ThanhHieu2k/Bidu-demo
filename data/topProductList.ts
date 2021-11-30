import productImg from "../assets/product.png";

export interface Product {
  id: number;
  name: string;
  price: string;
  location: string;
  img: StaticImageData;
  sold: number;
}
export const topProductList: Product[] = [
  {
    id: 1,
    name: "Áo khoác blazer dáng rộng ...",
    price: "102.000 d",
    location: "Viet Nam",
    img: productImg,
    sold: 12,
  },
  {
    id: 2,
    name: "Bộ đồ thể thao crotop màu đen",
    price: "102.000 d",
    location: "Viet Nam",
    img: productImg,
    sold: 30,
  },
  {
    id: 3,
    name: "Heels Ladies Shoes Buckle",
    price: "102.000 d",
    location: "Viet Nam",
    img: productImg,
    sold: 47,
  },
  {
    id: 4,
    name: "Kính mắt gọng kim loại ",
    price: "102.000 d",
    location: "Viet Nam",
    img: productImg,
    sold: 91,
  },
  {
    id: 5,
    name: "PIZAMA LỤA HÀN",
    price: "102.000 d",
    location: "Viet Nam",
    img: productImg,
    sold: 51,
  },
];
