import Image from "next/image";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import SignUpForm from "../../Form/SignUp";

export interface HeaderProps {}

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={styles["header-container"]}>
      {show && <SignUpForm isLogin={isLogin} handleClose={handleClose} />}
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
            <div>
              <span
                className={styles["header-right__content"]}
                onClick={() => {
                  setIsLogin(false);
                  setShow(true);
                }}
              >
                Đăng ký
              </span>
            </div>
            <div>
              <span
                className={styles["header-right__content"]}
                onClick={() => {
                  setIsLogin(true);
                  setShow(true);
                }}
              >
                Đăng nhập
              </span>
            </div>
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
export default Header;
