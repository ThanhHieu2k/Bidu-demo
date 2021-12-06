import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import fetchAPI from '../../lib/products'
import {useState, useEffect} from 'react'

import ProductItem from './ProductItem/ProductItem'
import styles from './SuggestToday.module.scss'
import QuestionModel from '../../models/suggestProducts'
// import products from '../../lib/products'
import ProductService from '../../services/sugproducts/index'




export interface product{
    name: string,
    images: string[],
    sold:string,
    sale_price:string,
    price_min_max:any,
    quantity: any,
}



const SuggestToday = () => {

    const [products, setProducts] = useState([])
    const [isLoad,setIsLoad] = useState(false)
    const [params, setParams] = useState({
        limit:24,
        page:1,
        isFetchMore:true,
    })
    

    const getDatas = async (params)=>{
        setIsLoad(true)
        let data = await ProductService.getProduct(params)
        if(data){
            console.log(data)
            let newData =  QuestionModel.getListArray(data.data)
            setProducts([...products,...newData])
            setIsLoad(false)
            setParams(params)
        }
    }

    useEffect(()=>{
        getDatas(params)
    },[])

    const handleSeeMore =()=>{
        // setCount(prev=>prev+1)
        getDatas({
            ...params,
            page:++params.page,
        })
    }


    // console.log(ProductService.getProduct(params))

    return (
        <div className={styles["suggest"] + ' grid'}>
            <div className={styles["suggest__heading"]}>
                <p className={styles["suggest__heading-text"]}>GỢI Ý HÔM NAY</p>
                <Link href="/">
                    <a className={styles["suggest__heading-see"]}>
                        <span className={styles["suggest__heading-see-text"]}>Xem tất cả</span>
                        <div className={styles["suggest__heading-see-icon"]}>
                            <Image
                                src="/images/suggest-arrow.png"
                                width={24}
                                height={9}
                            />
                        </div>
                    </a>
                </Link>
            </div>
            <div className={styles["suggest__product"]}>
                <div className={styles["row"]}>
                    {products.map(product=><ProductItem product={product}/>)}
                </div>
                {isLoad ? <div className={styles["lds-ellipsis"]}><div></div><div></div><div></div><div></div></div>:<button className={styles["suggest__product-btn"]} onClick={handleSeeMore}>Xem thêm</button>}
            
            </div>
        </div>
    )
}

export default SuggestToday
