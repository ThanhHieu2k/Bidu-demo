import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import fetchAPI from '../../lib/products'
import {useState, useEffect} from 'react'

import ProductItem from './ProductItem/ProductItem'
import styles from './SuggestToday.module.scss'
import QuestionModel from '../../models/suggestProducts'
// import products from '../../lib/products'
// import 
import ProductService from '../../services/product/index'



export interface product{
    name: string,
    images: string[],
    sold:string,
    sale_price:string,
}



const SuggestToday = () => {

    const [products, setProducts] = useState([])
    const [isLoad,setIsLoad] = useState(false)
    // const [count,setCount] = useState(1)
    const [params, setParams] = useState({
        paginate : 1,
        skip: 0,
    })

    const getDatas = async (_params)=>{
        setIsLoad(true)
        let data = await ProductService.getProduct(_params)
        if(data){
            data = QuestionModel.getListArray(data)
            setProducts([...products,...data])
            setIsLoad(false)
            setParams(_params)
        }
    }

    useEffect(()=>{
        getDatas(params)
    },[])

    // const handleSeeMore =()=>{
    //     setCount(prev=>prev+1)
    // }

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
                {isLoad ? <div className={styles["lds-ellipsis"]}><div></div><div></div><div></div><div></div></div>:<button className={styles["suggest__product-btn"]} onClick={()=>getDatas({
                    ...params,
                    paginate : 2
                })}>Xem thêm</button>}
            
            </div>
        </div>
    )
}

export default SuggestToday
