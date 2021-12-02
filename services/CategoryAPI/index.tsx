import React, { useState } from "react";
import axios from "axios";

import Banner from "../../components/Banner";

import CategoryModel from "../../models/categoryModel";

const categories =
  "https://commerce.bidu.com.vn/api/v2/mobile/categories/by-system?limit=1000%27";

class CategoryAPI {
  static getCategory() {
    return axios.get(categories, {});
  }
}

export default CategoryAPI;
