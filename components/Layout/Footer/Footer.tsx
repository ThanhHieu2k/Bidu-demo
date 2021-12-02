import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

import React from 'react'

const Footer = () => {
    return (
        <div className={styles["footer-container"]}>
            <div className={styles["contact-wrap"]}>
                <div className={styles["contact"] + ' grid'}>
                    <div className={styles["contact__item"]}>
                        <h3 className={styles["contact__item-heading"]}>CHĂM SÓC KHÁCH HÀNG</h3>
                        <ul className={styles["contact__item-select"]}>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Hướng dẫn mua hàng</a>
                                </Link>
                            </li>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Hướng dẫn bán hàng</a>
                                </Link>
                                            
                            </li>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Hướng dẫn đổi trả hàng</a>
                                </Link>
                                                                                
                            </li>
                        </ul>
                    </div>
                    <div className={styles['contact__item']}>
                        <h3 className={styles["contact__item-heading"]}>VỀ BIDU</h3>
                        <ul className={styles["contact__item-select"]}>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Giới thiệu</a>
                                </Link>
                                                                                    
                            </li>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Tuyển dụng</a>
                                </Link>
                                                                                   
                            </li>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Quy chế hoạt động</a>
                                </Link>
                                                                                  
                            </li>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Chính sách giải quyết khiếu nại</a>
                                </Link>
                                                                                                            
                            </li>
                            <li className={styles["contact__item-option"]}>
                                <Link href="/">
                                    <a >Chính sách bảo mật</a>
                                </Link>                                                                                 
                            </li>
                        </ul>
                    </div>
                    <div className={styles['contact__item']}>
                        <h3 className={styles["contact__item-heading"]}>THANH TOÁN</h3>
                        <div className={styles["contact__pays-selects"]}>
                            <Link href="/">
                                <a className={styles["contact__pays-option"]}>                                
                                        <Image
                                            src="/images/pay-vnpay.png"
                                            width={39}
                                            height={29}
                                            alt='VN Pay'
                                        />                  
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={styles["contact__pays-option"]}>
                                    <Image
                                        src="/images/pay-momo.png"
                                        width={29}
                                        height={29}
                                        alt='momo'
                                    />
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={styles["contact__pays-option"]}>
                                    <Image
                                        src="/images/pay-cash.png"
                                        width={39}
                                        height={29}
                                        alt='Cash'                          
                                    />                                 
                                </a>
                            </Link>

                        </div>
                    </div>

                    <div className={styles['contact__item']}>
                        <h3 className={styles["contact__item-heading"]}>KẾT NỐI VỚI CHÚNG TÔI</h3>
                        <div className={styles["contact__item-social"]}>
                            <Link href="/">
                                <a className={styles["contact__item-social--facebook" ]}>
                                    <Image
                                        src="/images/facebook.png"
                                        width={7.2}
                                        height={16.2}
                                        alt='momo'
                                    />
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={styles["contact__item-social--intargram"]}>
                                    <Image
                                        src="/images/instagram.png"
                                        width={18}
                                        height={18}
                                        alt='momo'
                                    />
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={styles["contact__item-social--twiter"]}>
                                    <Image
                                        src="/images/twitter.png"
                                        width={15.8}
                                        height={13.5}
                                        alt='momo'
                                    />
                                </a>
                            </Link>
                        </div>
                        <h3 className={styles["contact__item-heading"]}>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h3>
                        <div className={styles["contact__item-dowload"]}>
                            <Link href="/">
                                <a className={styles["contact__item-appstore"]}>
                                    <Image
                                        src="/images/appstore.png"
                                        width={110}
                                        height={30}
                                        alt='app store'
                                    />
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={styles["contact__item-chplay"]}>
                                    <Image
                                        src="/images/chplay.png"
                                        width={125}
                                        height={30}
                                        alt='CH Play'
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["footer"]}>
                <p className={styles["footer__name"]}>Công ty TNHH MJ ART GROUP</p>
                <span className={styles["footer__address"]}>Địa chỉ: Tầng 7, số 50 Bạch Đằng, Phường Hải Châu I, Quận Hải Châu, Thành phố Đà Nẵng, Việt Nam. Số điện thoại: 02363.933.340 - Email: support@mjart.com
                Mã số doanh nghiệp: 0401908254 do Sở Kế hoạch &amp; Đầu tư TP Đà Nẵng cấp lần đầu ngày 26/06/2018
                </span>
                <p className={styles["footer__copyright"]}>© 2020 - Bản quyền thuộc về Công ty TNHH MJ ART GROUP</p>
            </div>
            
        </div>
    )
}

export default Footer
