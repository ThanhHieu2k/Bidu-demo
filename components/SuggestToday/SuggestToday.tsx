import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import ProductItem from './ProductItem/ProductItem'
import styles from './SuggestToday.module.scss'

// import products from '../../lib/products'



export interface product{
    name: string,
    image: string,
    price:string,
    origin:string,
    sold:string,
}




const SuggestToday = () => {

    const products=[
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-1.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 4 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-2.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 3 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-3.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 2 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-4.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 1 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-5.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-6.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-7.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-8.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-9.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-10.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-11.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-2.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-7.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-12.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-11.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-10.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-8.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-9.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-7.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-1.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-12.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-3.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-4.png',
        },
        {
            name:'Áo thun nữ cotton cho ngày hè, 5 màu',
            price:'380.000 ₫',
            origin:'Việt Nam',
            sold:'Đã bán 120',
            image:'/images/products/product-10.png',
        },

    ]
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
                    {products.map(product=><ProductItem  product={product}/>)}
                </div>
            <button className={styles["suggest__product-btn"]}>Xem thêm</button>
            </div>
        </div>
    )
}

export default SuggestToday
