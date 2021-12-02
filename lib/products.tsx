import axios from 'axios'


const fetchAPI:any =async(params:any)=>{  
    try{

        const {data}=await axios.get(`https://commerce.bidu.com.vn/api/v1/web/home/suggest-products?limit=24&page=${params.paginate}&isFetchMore=true%27`);   
        return data.data
    }catch(err){
        console.log(err)
    }
}



export default fetchAPI;