import Axios from "../../utils/axios"
import {convertObjectToParams} from "../../utils/helpers"

// const {convertObjectToPArams} = helpers

API_ENDPOINT_PRODUCT = .env.NEXT_API_ENDPOINT + "/product"

export default class ProductService {
    static async getProduct(params : any){
        try{
            const res = await Axios.get(API_ENDPOINT_PRODUCT + convertObjectToParams(params))
            return res.data
        }catch(e){
            console.log(e)
        }
    }
}