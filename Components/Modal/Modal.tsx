import  {Formik, Form , useField} from 'formik'
import styles from './Modal.module.scss'
import React from 'react'
import Image from 'next/image'
import * as Yup from 'yup';
import { useState } from 'react';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {TextInput,Checkbox} from '../CustomInput/index'

// define component input



const Modal = ({handleClose, isLogin,handleSubmit,handleTrans}:any) => {

    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
    let initialValues: any = {
        email:'',
        password:''
    };
    !isLogin&&(initialValues=Object.assign(initialValues,{fullName:'',rePassword:'',phoneNumber:'',confirm:''}))


    const [value,setValue] = useState()

    let validationSchema = Yup.object({  
        email: Yup.string()
          .email('Invalid ')
          .required('Bắt buộc'),
        password: Yup.string()
          .max(16, 'Quá dài')
          .min(6,'Quá ngắn')
          .required('Bắt buộc'),
    })

    !isLogin&&(validationSchema = Yup.object({
        fullName: Yup.string()
          .max(24, 'Quá dài')
          .required('Bắt buộc'),
        password: Yup.string()
          .max(16, 'Quá dài')
          .min(6,'Quá ngắn')
          .required('Bắt buộc'),
        rePassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp")
            .required('Bắt buộc'),
        email: Yup.string()
          .email('Invalid ')
          .required('Bắt buộc'),
        phoneNumber: Yup.string()
        .required('Bắt buộc')
        .matches(phoneRegExp, 'Invalid'),
        confirm:Yup.boolean()
            .required('Đồng ý với các điều khoản để tiếp tục'),
    }))

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
                    />
                </div>

                <div className={styles["modal__body-right"]}>
                    <div className={styles["modal__body-close"]} onClick={handleClose}>
                        <img src="/images/close.png" alt="" className={styles["modal__body-close-img"]} />
                    </div>
                    <h3 className={styles["modal__body-title"]}>{isLogin ? 'Đăng nhập':'Đăng Ký' }</h3>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className={styles["modal__body-form"]}>

                            {!isLogin&&<div className={styles["modal__body-form-group"]}>
                                <TextInput
                                    className = {styles["modal__body-form-input"]}
                                    name="fullName"
                                    type="text"
                                    placeholder="Họ và tên*"
                                />
                            </div>}
                            <div className={styles["modal__body-form-group"]}  >
                                <TextInput
                                    className = {styles["modal__body-form-input"]}    
                                    name="email"
                                    type="email"
                                    placeholder="Email*"
                                />
                            </div>

                            <div className={styles["modal__body-form-group"]}>
                                <TextInput
                                    className = {styles["modal__body-form-input"]}
                                    name="password"
                                    type="password"
                                    placeholder="Mật khẩu*"
                                />
                            </div>

                            {!isLogin&&<div className={styles["modal__body-form-group"]}>
                                <TextInput
                                    className = {styles["modal__body-form-input"]}
                                    name="rePassword"
                                    type="password"
                                    placeholder="Nhập lại mật khẩu*"
                                />
                            </div>}

                            {!isLogin&&<div className={styles["modal__body-form-group-phone"]}>
                        
                                <div className={styles["PhoneInputCountry"]}>
                                    <PhoneInput
                                        international
                                        initialValueFormat="national"
                                        defaultCountry="VN"
                                        value={value}
                                        placeholder="Số điện thoại*"
                                        onChange={setValue}     
                                        name="phoneNumber"                             
                                    />
                                    
                                </div>
                                <TextInput
                                    className = {styles["modal__body-form-input" ]}
                                    name="phoneNumber"
                                    type="tel"
                                    placeholder="Số điện thoại*"
                                />
                            </div>}

                            {!isLogin&&<div className={styles["modal__body-form-group"]}>
                            {/* <input type="checkbox" className={styles["modal__body-form-checkbox"]} name="confirm" /> */}
                            <Checkbox 
                                className={styles["modal__body-form-checkbox"]}
                                name='confirm'
                                type="checkbox"
                            >
                                <span className={styles["modal__body-form-policy"]}>
                                    Tôi đồng ý với 
                                    <a href="#" className={styles["modal__body-form-policy-link"]}> Các Điều khoản Hệ thống</a> và
                                    <a href="#" className={styles["modal__body-form-policy-link"]}> Chính Sách Bảo Mật</a>  của Bidu App.
                                </span>

                            </Checkbox>
                            
                        </div>}
                            <button className={styles["modal__body-form-submit"]}  type="submit">{isLogin ? 'Đăng nhập':'Đăng Ký' }</button>
                        </Form>          
                    </Formik>

                    {isLogin&& <div className={styles["modal__body-form-login"]}>
                        <div className={styles["sign-in-social-text"]}>Đăng nhập với tài khoản khác</div>
                        <div className={styles["form__login-menu"]}>
                            <div className={styles["form__login-menu-img"]}>
                                <img src="/images/google.svg" />
                            </div>
                            <div className={styles["form__login-menu-img"]}>
                                <img src="/images/facebook.svg" />
                            </div><div className={styles["form__login-menu-img"]}>
                                <img src="/images/zalo.svg" />
                            </div>
                            <div className={styles["form__login-menu-img"]}>
                                <img src="/images/apple.svg" />
                            </div>
                        </div>
                        <div className={styles["forget-password-text"]}>Quên mật khẩu??</div>
                        <div className={styles["signup-promo-text"]}>Không có tài khoản? <span onClick={handleTrans}>Đăng ký</span></div>
                    </div>}
                                    
                </div>
            </div>
        </div>
    )
}

export default Modal




// const Checkbox = ({ children, ...props }:any) => {

//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//         <div>
//             <label className="checkbox-input">
//                 <input type="checkbox" {...field} {...props} />
//                 {children}
//             </label>
//             {meta.touched && meta.error ? (
//                 <div className={styles["checkbox-error"]}>{meta.error}</div>
//             ) : null}
//         </div>
//     );
// };




// const FormCustom = ( {handleSubmit ,data } ) => {
//   const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
//   const initialValues = {
//     fullName: '',
//     address: '',
//     email: '',
//     birth: '', 
//     phoneNumber: '' 
//   }

//   const validationSchema = Yup.object({
//     fullName: Yup.string()
//       .max(24, 'Must be 24 characters or less')
//       .required('This field is required'),
//     address: Yup.string()
//       .max(30, 'Must be 30 characters or less')
//       .required('This field is required'),
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('This field is required'),
//     birth: Yup.string()
//       .required('This field is required'),
//     phoneNumber: Yup.string()
//     .required('This field is required')
//     .matches(phoneRegExp, 'Invalid Phone number '),
//   })
    

//   return (
//     <div className="form__wrap">
//       <h1>Subscribe!</h1>
    //   <Formik
    //     enableReinitialize={true}
    //     initialValues={initialValues}
    //     validationSchema={validationSchema}
    //     onSubmit={handleSubmit}
    //   >
    //     <Form className="form">
    //       <div className="form__group">
    //         <TextInput
    //           className = "form__group-input"
    //           label="Full Name"
    //           name="fullName"
    //           type="text"
    //           placeholder="VD: Huynh Thanh Hieu"
    //         />
    //       </div>
    //       <div className="form__group">
    //         <TextInput
    //           className = "form__group-input"    
    //           label="Address"
    //           name="address"
    //           type="text"
    //           placeholder="VD: Dien Tho - Dien Ban - Quang Nam"
    //         />
    //       </div>

    //       <div className="form__group">
    //         <TextInput
    //           className = "form__group-input"
    //           label="Email Address"
    //           name="email"
    //           type="email"
    //           placeholder="VD: hieuht@gmail.com"
    //         />
    //       </div>
          
    //       <div className="form__group">
    //         <TextInput
    //           className = "form__group-input"
    //           label="Phone Number"
    //           name="phoneNumber"
    //           type="text"
    //           placeholder="VD: 0899927046"
    //         />
    //       </div>

    //       <div className="form__group">
    //         <TextInput
    //           className = "form__group-input"
    //           label="Date of Birth"
    //           name="birth"
    //           type="text"
    //           placeholder="VD: 08/09/2000"
    //         />
    //       </div>
    //       <button  className = "form__group-submit" type="submit">Submit</button>
    //     </Form>
    //   </Formik>
//     </div>
//   );
// };



