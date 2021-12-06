import Axios from "../../utils/axios"
import {convertObjectToParams} from "../../utils/helpers"

// const {convertObjectToPArams} = helpers

const API_ENDPOINT_PRODUCT = process.env.NEXT_PUBLIC_API_ENDPOINT + '/v1/web/home/suggest-products'

export default class ProductService {
    static async getProduct(params : any){
        try{
            const res = await Axios.get(API_ENDPOINT_PRODUCT + convertObjectToParams(params))
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // console.log(API_ENDPOINT_PRODUCT + convertObjectToParams(params))
            return res.data
        }catch(e){
            console.log(e)
        }
    }
}

// + "/v1/web/home/suggest-products"