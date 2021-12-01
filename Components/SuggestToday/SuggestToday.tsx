import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import fetchAPI from '../../lib/products'
import {useState, useEffect} from 'react'

import ProductItem from './ProductItem/ProductItem'
import styles from './SuggestToday.module.scss'
import QuestionModel from '../../models/suggestProducts'
// import products from '../../lib/products'



export interface product{
    name: string,
    images: string[],
    sold:string,
}



const SuggestToday = () => {

    const [products, setProducts] = useState([])
    const [isLoad,setIsLoad] = useState(false)
    const [count,setCount] = useState(1)
    

    const getDatas = async ()=>{
        setIsLoad(true)
            let datas = await fetchAPI(count)
            if(datas){
                datas = QuestionModel.getListArray(datas)
                setProducts([...products,...datas])
                setIsLoad(false)
            }
    }

    useEffect(()=>{
        getDatas()
    },[count])

    const handleSeeMore =()=>{
        setCount(prev=>prev+1)
    }

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
                {isLoad && <div className={styles["lds-circle"]}><div></div></div>}
            <button className={styles["suggest__product-btn"]} onClick={handleSeeMore}>Xem thêm</button>
            </div>
        </div>
    )
}

export default SuggestToday
