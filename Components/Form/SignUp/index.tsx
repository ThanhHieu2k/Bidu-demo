/* eslint-disable @next/next/no-img-element */
import { Formik, Form, useField, FastField } from "formik";
import styles from "./SignUp.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import InputField from "../../CustomField/InputField";
import * as Yup from "yup";

const SignUpForm = ({ handleClose, isLogin }: any) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  let initialValues = {
    email: "",
    password: "",
  };
  !isLogin &&
    (initialValues = Object.assign(initialValues, {
      name: "",
      password2: "",
      phoneNumber: "",
    }));
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Bắt buộc")
      .min(5, "Must greater than 5 characters")
      .max(30, "Must less than 30 characters"),
    email: Yup.string().required("Bắt buộc"),
    password: Yup.string().required("Bắt buộc"),
    password2: Yup.string()
      .required("Bắt buộc")
      .oneOf([Yup.ref("password"), null], "Không trùng"),
  });
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__overlay"]} />
      <div className={styles["modal__body"]}>
        <div className={styles["modal__body-left"]}>
          <Image
            src="/images/left-login.png"
            className="modal__body-left-img"
            width={317}
            height={508}
            alt=""
          />
        </div>
        <div className={styles["modal__body-right"]}>
          <div className={styles["modal__body-close"]} onClick={handleClose}>
            <img
              src="/images/close.png"
              alt=""
              className={styles["modal__body-close-img"]}
            />
          </div>
          <h3 className={styles["modal__body-title"]}>
            {isLogin ? "Đăng Nhập" : "Đăng Ký"}
          </h3>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => console.log("a")}
          >
            {({ isSubmitting, handleSubmit }) => {
              return (
                <div className={styles["modal__body-form"]}>
                  {!isLogin && (
                    <FastField
                      name="name"
                      type="text"
                      component={InputField}
                      className={styles["modal__body-form-input"]}
                      placeholder="Họ và tên"
                    />
                  )}

                  <FastField
                    name="email"
                    type="email"
                    component={InputField}
                    className={styles["modal__body-form-input"]}
                    placeholder="Email"
                  />

                  <FastField
                    name="password"
                    type="password"
                    component={InputField}
                    className={styles["modal__body-form-input"]}
                    placeholder="Mật khẩu"
                  />

                  {!isLogin && (
                    <FastField
                      type="password"
                      name="password2"
                      component={InputField}
                      className={styles["modal__body-form-input"]}
                      placeholder="Nhập lại mật khẩu"
                    />
                  )}

                  {!isLogin && (
                    <div className={styles["modal__body-form-group-phone"]}>
                      <PhoneInput
                        international
                        initialValueFormat="national"
                        defaultCountry="VN"
                        value={phoneNumber}
                        placeholder="Enter phone number"
                        onChange={() => setPhoneNumber}
                        error={
                          phoneNumber
                            ? isValidPhoneNumber(phoneNumber)
                              ? undefined
                              : "Invalid phone number"
                            : "Phone number required"
                        }
                      />
                    </div>
                  )}
                  {!isLogin && (
                    <div className={styles["modal__body-form-group"]}>
                      <input
                        type="checkbox"
                        className={styles["modal__body-form-checkbox"]}
                        name="confirm"
                      />

                      <span className={styles["modal__body-form-policy"]}>
                        Tôi đồng ý với
                        <a
                          href="#"
                          className={styles["modal__body-form-policy-link"]}
                        >
                          {" "}
                          Các Điều khoản Hệ thống
                        </a>{" "}
                        và
                        <a
                          href="#"
                          className={styles["modal__body-form-policy-link"]}
                        >
                          {" "}
                          Chính Sách Bảo Mật
                        </a>{" "}
                        của Bidu App.
                      </span>
                    </div>
                  )}
                  <button
                    className={styles["modal__body-form-submit"]}
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isLogin ? "Đăng Nhập" : "Đăng Ký"}
                  </button>
                  {isLogin && (
                    <div className={styles["modal__body-form-otherLogin"]}>
                      <div
                        className={styles["modal__body-form-otherLogin-title"]}
                      >
                        Đăng nhập với tài khoản khác
                      </div>
                      <div
                        className={styles["modal__body-form-otherLogin-image"]}
                      >
                        <Image
                          src="/images/auth/google.svg"
                          width="24"
                          height="24"
                          alt="google svg"
                        />
                        <Image
                          src="/images/auth/facebook.svg"
                          width="24"
                          height="24"
                          alt="facebook svg"
                        />
                        <Image
                          src="/images/auth/zalo.svg"
                          width="24"
                          height="24"
                          alt="zalo svg"
                        />

                        <Image
                          src="/images/auth/apple.svg"
                          width="24"
                          height="24"
                          alt="apple svg"
                        />
                      </div>
                      <span
                        className={
                          styles["modal__body-form-otherLogin-forgotPass"]
                        }
                      >
                        Quên mật khẩu ??
                      </span>{" "}
                      <br />
                      <span>Không có tài khoản?</span>
                      <span
                        className={styles["modal__body-form-otherLogin-signup"]}
                      >
                        {" "}
                        Đăng ký
                      </span>
                    </div>
                  )}
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
