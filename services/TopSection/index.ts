import Axios from "../../utils/axios";

export default class TopSectionService {
  static async getTopProduct() {
    try {
      const res = await Axios.get(process.env.API_ENDPOINT);
      const data = res.data;
      return data.data.top_product;
    } catch (e) {
      throw e;
    }
  }

  static async getTopSeller() {
    try {
      const res = await Axios.get(process.env.API_ENDPOINT);
      const data = res.data;
      return data.data.top_shop;
    } catch (e) {
      throw e;
    }
  }

  static async getNewestProduct() {
    try {
      const res = await Axios.get(process.env.API_ENDPOINT);
      const data = res.data;
      return data.data.newest_product;
    } catch (e) {
      throw e;
    }
  }
}
