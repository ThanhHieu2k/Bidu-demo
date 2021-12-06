import React, { useState } from "react";
import Axios from "../../utils/axios";
import { convertObjectToParams } from "../../utils/helpers";

const categoriesAPI = "/v2/mobile/categories/by-system?limit=1000%27";

// Get Category API
const API_ENDPOINT_CATEGORY = process.env.API_ENDPOINT + `${categoriesAPI}`;

class CategoryAPI {
  static async getCategory(params: any) {
    try {
      return Axios.get(API_ENDPOINT_CATEGORY + convertObjectToParams(params));
    } catch (error) {
      return { error };
    }
  }
}

export default CategoryAPI;
