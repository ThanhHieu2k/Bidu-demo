import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import formValidation from "../../validations/validation";
import styles from "./login.module.scss";

const LoginModal = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  function handleSubmit() {}

  return (
    <div className={`${styles.login__modal}`}>
      <div className={styles.login__modal_form}>
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
              <div className={styles.login__modal_form_field}>
                <Field
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  placeholder="Email"
                />

                {errors.userEmail && touched.userEmail ? (
                  <p className={styles.login__modal_form_field_error}>
                    {errors.userEmail}
                  </p>
                ) : null}
              </div>

              <div className={styles.login__modal_form_field}>
                <Field
                  name="userPassword"
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                />

                {errors.userPassword && touched.userPassword ? (
                  <>
                    <p className={styles.login__modal_form_field_error}>
                      {errors.userPassword}
                    </p>
                  </>
                ) : (
                  <img
                    src={
                      isShowPassword ? `/images/eye.svg` : `images/eyeshow.png`
                    }
                    alt="Eye Password"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                )}
              </div>

              <button className={styles.login__modal_form_button} type="submit">
                Đăng nhập
              </button>

              <div className={styles.login__modal_form_social}>
                <h3>Đăng nhập với tài khoản khác</h3>

                <div className={styles.login__modal_form_social_list}>
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

              <div className={styles.login__modal_form_forgot}>
                <p>Quên mật khẩu??</p>
              </div>

              <div className={styles.login__modal_form_signup}>
                <p>Không có tài khoản?</p>
                <p className={styles.login__modal_form_signup_promo}>Đăng ký</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginModal;
