import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import { Modal, Button } from "antd";

import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import formValidation from "../../validations/validation";
import styles from "./register.module.scss";

const RegisterModal = () => {
  function handleSubmit() {}

  const {
    formState: { errors },
    control,
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isShowConfirmPwd, setIsShowConfirmPwd] = useState(false);

  const [value, setValue] = useState(null);
  console.log("value: ", value);

  return (
    <div className={` ${styles.register__modal}`}>
      <div className={styles.register__modal_form}>
        <Formik
          initialValues={{
            userName: "",
            userEmail: "",
            userPassword: "",
            userPhoneNumber: "",
            userConfirmPwd: "",
          }}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styles.register__modal_form_field}>
                <Field name="userName" placeholder="Họ và tên" />
                {errors.userName && touched.userName ? (
                  <p className={styles.register__modal_form_field_error}>
                    {errors.userName}
                  </p>
                ) : null}
              </div>

              <div className={styles.register__modal_form_field}>
                <Field
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  placeholder="Email"
                />

                {errors.userEmail && touched.userEmail ? (
                  <>
                    <p className={styles.register__modal_form_field_error}>
                      {errors.userEmail}
                    </p>
                  </>
                ) : null}
              </div>

              <div className={styles.register__modal_form_field}>
                <Field
                  name="userPassword"
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                />
                {errors.userPassword && touched.userPassword ? (
                  <p className={styles.register__modal_form_field_error}>
                    {errors.userPassword}
                  </p>
                ) : (
                  <img
                    className={styles.register__modal_form_field_img}
                    src={
                      isShowPassword ? `/images/eye.svg` : `images/eyeshow.png`
                    }
                    alt="Eye Password"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  />
                )}
              </div>

              <div className={styles.register__modal_form_field}>
                <Field
                  id="userConfirmPwd"
                  name="userConfirmPwd"
                  type={isShowConfirmPwd ? "text" : "password"}
                  placeholder="Xác nhận mật khẩu"
                />
                {errors.userConfirmPwd && touched.userConfirmPwd ? (
                  <p className={styles.register__modal_form_field_error}>
                    {errors.userConfirmPwd}
                  </p>
                ) : (
                  <img
                    className={styles.register__modal_form_field_img}
                    src={
                      isShowConfirmPwd
                        ? `/images/eye.svg`
                        : `images/eyeshow.png`
                    }
                    alt="Eye Password"
                    onClick={() => setIsShowConfirmPwd(!isShowConfirmPwd)}
                  />
                )}
              </div>

              <div className={styles.register__modal_form_field}>
                <Controller
                  name="userPhoneNumber"
                  control={control}
                  rules={{
                    validate: (value) => isValidPhoneNumber(value),
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      initialValueFormat="national"
                      international={true}
                      name="userPhoneNumber"
                      value={value}
                      onChange={setValue}
                      defaultCountry="VN"
                    />
                  )}
                />
                {isValidPhoneNumber ? (
                  <p className={styles.register__modal_form_field_error}>
                    Bắt Buộc!
                  </p>
                ) : null}
              </div>

              <div className={styles.register__modal_form_subtitle}>
                <span>
                  Tôi đồng ý với
                  <span className={styles.register__modal_form_subtitle_faq}>
                    Các Điều khoản Hệ thống
                  </span>
                  và
                </span>
                <br />
                <span>
                  <span className={styles.register__modal_form_subtitle_faq}>
                    Chính Sách Bảo Mật
                  </span>
                  của Bidu App
                </span>
              </div>

              <button
                className={styles.register__modal_form_button}
                type="submit"
              >
                Đăng ký
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterModal;
