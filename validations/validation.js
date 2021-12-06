import * as Yup from "yup";

//  Regex Phone Number
const phoneRegExp = /((09|03|07|08|05)+([0-9]{8})\b)/g;

const formValidation = Yup.object().shape({
  userName: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Bắt Buộc!"),

  userPhoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Bắt Buộc!"),

  userEmail: Yup.string().email("Sai định dạng!").required("Bắt Buộc!"),

  userPassword: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .max(12, "Không được dài hơn 12 ký tự")
    .required("Bắt Buộc!"),

  userConfirmPwd: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .oneOf([Yup.ref("userPassword"), null], "Mật khẩu không trùng khớp")
    .required("Bắt Buộc!"),
});

export default formValidation;
