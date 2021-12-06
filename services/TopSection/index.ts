import Axios from "../../utils/axios";


const API_TOP_PRODUCT = process.env.NEXT_PUBLIC_API_ENDPOINT + '/v2/mobile/home'
export default class TopSectionService {
  static async getTopProduct() {
    try {
      const res = await Axios.get(API_TOP_PRODUCT);
      const data = res.data;
      return data.data.top_product;
    } catch (e) {
      throw e;
    }
  }

  static async getTopSeller() {
    try {
      const res = await Axios.get(API_TOP_PRODUCT);
      const data = res.data;
      return data.data.top_shop;
    } catch (e) {
      throw e;
    }
  }

  static async getNewestProduct() {
    try {
      const res = await Axios.get(API_TOP_PRODUCT);
      const data = res.data;
      return data.data.newest_product;
    } catch (e) {
      throw e;
    }
  }
}
