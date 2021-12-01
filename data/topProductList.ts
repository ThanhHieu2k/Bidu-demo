import axios from "axios";
export interface Product {
  _id: any;
  name: string;
  before_sale_price: number;
  location: string;
  img: StaticImageData;
  sold: number;
}

