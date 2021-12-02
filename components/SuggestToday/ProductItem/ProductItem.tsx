import Link from 'next/link'
import Image from 'next/image'
import styles from './ProductItem.module.scss'

import { product } from '../SuggestToday'

export interface ProductItemProps{
    product: product;
}


const ProductItem = ({product}:ProductItemProps) => {
    return (
        <div className={styles["collumn-2"]}>
            <Link href="/">
                <a className={styles["suggest__product-item"]}>
                    <div className={styles["suggest__product-item-img"]}>
                        <div className={styles["suggest__product-item-img--main"]}>
                            <Image
                                src={product.image}
                                width={181.33}
                                height={181.33}
                                alt='product image'
                            />
                        </div>
                        <div className={styles["suggest__product-item-img--sub"]}>
                            <Image
                                src="/images/products/tick.png"
                                width={20}
                                height={28.33}
                                alt='product tick'
                            />
                        </div>
                    </div>
                    <p className={styles["suggest__product-item-name"]}>{product.name}</p>
                    <span className={styles["suggest__product-item-price"]}>{product.price}</span>
                    <div className={styles["suggest__product-item-origin"]}>
                        <span className={styles["suggest__product-item-origin--icon"]}>
                            <Image
                                src="/images/location.png"
                                width={8}
                                height={10}
                                alt='product location'
                            />    
                        </span>
                        <span className={styles["suggest__product-item-origin--name"]}>{product.origin}</span>
                    </div>
                    <div className={styles["suggest__product-item-sold"]}>{product.sold}</div>
                </a>
            </Link>
            
        </div>
    )
}

export default ProductItem
