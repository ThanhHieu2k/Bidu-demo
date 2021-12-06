import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

import { modalTypeAction } from "../../../Redux/actions";

export interface HeaderProps {}

const Header = (props) => {
  const {
    isType,
    setIsType,
    shown,
    close,
    setIsShow,
    isShow,
    setIsModalVisible,
    isModalVisible,
  } = props;

  return (
    <div className={styles["header-container"]}>
      <header className={styles["header-wrap"]}>
        <div className={styles["header"] + " grid"}>
          <div className={styles["header-left"]}>
            <Link href="/">
              <a className={styles["header-left__content"]}>Trang người bán</a>
            </Link>
            <Link href="/">
              <a className={styles["header-left__content"]}>Danh mục</a>
            </Link>
          </div>
          <div className={styles["header-right"]}>
            <span className={styles["header-right__content"]}>Việt Nam</span>
            <Link href="/">
              <a
                className={styles["header-right__content"]}
                onClick={() => {
                  setIsType("register");
                  setIsModalVisible(true);
                }}
              >
                Đăng ký
              </a>
            </Link>
            <Link href="/">
              <a
                className={styles["header-right__content"]}
                onClick={() => {
                  setIsType("login");
                  setIsModalVisible(true);
                }}
              >
                Đăng nhập
              </a>
            </Link>
          </div>
        </div>
      </header>

      <div className={styles["search-wrap"]}>
        <div className={styles["search"] + "  grid"}>
          <div className={styles["search-logo"]}>
            <img
              className={styles["search-logo-navbar-icon"]}
              src="/images/navbar-icon.png"
            />
            <img
              className={styles["search-logo-repon"]}
              src="/images/logo-repon.png"
            />

            <Link href="/">
              <a>
                <div className={styles["search-logo__item"]}>
                  <Image
                    src="/images/logo-B.jpg"
                    height={36.5}
                    width={31.4}
                    alt="Your Name"
                  />
                </div>
                <div className={styles["search-logo__item"]}>
                  <Image
                    src="/images/logo-i.png"
                    height={36.5}
                    width={6.34}
                    alt="Your Name"
                    className={styles["search-logo__item"]}
                  />
                </div>

                <div className={styles["search-logo__item"]}>
                  <Image
                    src="/images/logo-D.png"
                    height={36.5}
                    width={31.4}
                    alt="Your Name"
                    className={styles["search-logo__item"]}
                  />
                </div>

                <div className={styles["search-logo__item"]}>
                  <Image
                    src="/images/logo-U.png"
                    height={28}
                    width={25.37}
                    alt="Your Name"
                    className={styles["search-logo__item"]}
                  />
                </div>
              </a>
            </Link>
            <img
              className={styles["search-logo-search-icon"]}
              src="/images/navbar-search.png"
            />
          </div>

          <div className={styles["search-main"]}>
            <input
              type="text"
              placeholder="Tìm kiếm"
              className={styles["search-main__input"]}
            />
            <span className={styles["search-main__icon"]}>
              <Image
                src="/images/search-icon.png"
                width={18}
                height={20}
                alt="Search-icon"
              />
            </span>
          </div>

          <ul className={styles["search-navbar"]}>
            <li className={styles["search-navbar__item"]}>
              <Link href="">
                <a>
                  <Image
                    src="/images/navbar-home.png"
                    width={20}
                    height={20}
                    alt=""
                  />
                </a>
              </Link>
            </li>
            <li className={styles["search-navbar__item"]}>
              <Link href="">
                <a>
                  <Image
                    src="/images/navbar-gift.png"
                    width={20}
                    height={18}
                    alt=""
                  />
                </a>
              </Link>
            </li>
            <li className={styles["search-navbar__item"]}>
              <Link href="">
                <a>
                  <Image
                    src="/images/navbar-b.png"
                    width={14.2}
                    height={18}
                    alt=""
                  />
                </a>
              </Link>
            </li>
            <li className={styles["search-navbar__item"]}>
              <Link href="">
                <a>
                  <Image
                    src="/images/navbar-bell.png"
                    width={20}
                    height={21}
                    alt=""
                  />
                </a>
              </Link>
            </li>
            <li className={styles["search-navbar__item"]}>
              <Link href="">
                <a>
                  <Image
                    src="/images/navbar-cart.png"
                    width={20}
                    height={21}
                    alt=""
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   const { isModalSelected } = state.modalTypeReducer;

//   return {
//     isModalSelected: isModalSelected,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {

//     selectTypeModal: (params) => dispatch(modalTypeAction(params)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;
