import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import formValidation from '../../validations/validation';
import styles from "./login.module.scss";

const LoginModal = () => {
  function handleSubmit() {}

  return (
    <div className={`${styles.main} ${styles.register__modal}`}>
      <div className={styles.main__layout}>
        <div className={styles.main__layout_left}>
          <Image
            src={`/images/background.svg`}
            alt="Logo"
            width={249}
            height={484}
          />
        </div>

        <div className={styles.main__layout_right}>
          <div className={styles.main__layout_right_form}>
            <h3 className={styles.main__layout_right_form_title}>Đăng nhập</h3>
            <Formik
              initialValues={{
                userEmail: "",
                userPassword: "",
              }}
              validationSchema={formValidation}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className={styles.main__layout_right_form_field}>
                    <Field
                      id="userEmail"
                      name="userEmail"
                      type="email"
                      placeholder="Email"
                    />

                    {errors.userEmail && touched.userEmail ? (
                      <p className={styles.main__layout_right_form_field_error}>
                        {errors.userEmail}
                      </p>
                    ) : null}
                  </div>

                  <div className={styles.main__layout_right_form_field}>
                    <Field
                      name="userPassword"
                      type="text"
                      placeholder="Mật khẩu"
                    />
                    {errors.userPassword && touched.userPassword ? (
                      <p className={styles.main__layout_right_form_field_error}>
                        {errors.userPassword}
                      </p>
                    ) : null}
                  </div>

                  <button
                    className={styles.main__layout_right_form_button}
                    type="submit"
                  >
                    Đăng nhập
                  </button>

                  <div className={styles.main__layout_right_form_social}>
                    <h3>Đăng nhập với tài khoản khác</h3>

                    <div className={styles.main__layout_right_form_social_list}>
                      <img
                        src="https://www.bidu.com.vn/images/auth/google.svg"
                        alt=""
                      />
                      <img
                        src="https://www.bidu.com.vn/images/auth/facebook.svg"
                        alt=""
                      />
                      <img
                        src="https://www.bidu.com.vn/images/auth/zalo.svg"
                        alt=""
                      />
                      <img
                        src="https://www.bidu.com.vn/images/auth/apple.svg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className={styles.main__layout_right_form_forgot}>
                    <p>Quên mật khẩu??</p>
                  </div>

                  <div className={styles.main__layout_right_form_signup}>
                    <p>Không có tài khoản?</p>
                    <p className={styles.main__layout_right_form_signup_promo}>
                      Đăng ký
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
