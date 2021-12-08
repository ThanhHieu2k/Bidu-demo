import React, { useState, ReactNode } from "react";
import Image from "next/image";
import RegisterModal from "../RegisterModal";
import LoginModal from "../LoginModal";

import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
import { Modal, Button } from "antd";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import styles from "./modallayout.module.scss";

export interface Props {
  props: ReactNode;
  isModalVisible: ReactNode;
  onCancel: ReactNode;
  isType: ReactNode;
}

const ModalLayout = ({ isModalVisible, onCancel, isType }: Props) => {
  const [value, setValue] = useState(null);

  function renderModal() {
    if (isModalVisible && isType === "login") {
      return <LoginModal />;
    } else if (isModalVisible && isType === "register") {
      return <RegisterModal />;
    }
  }

  return (
    <Modal visible={isModalVisible} onCancel={onCancel}>
      <div className={`${styles.main}`}>
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
            <h3 className={styles.main__layout_right_title}>
              {isType === "login" ? "Đăng nhập" : "Đăng ký"}
            </h3>
            {renderModal()}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLayout;
