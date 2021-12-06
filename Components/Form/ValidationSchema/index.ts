import * as Yup from "yup";
export const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Require name")
    .min(5, "Must greater than 5 characters")
    .max(30, "Must less than 30 characters"),
  phoneNumber: Yup.string()
    .required("Require phone number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid Phone number"
    ),
  address: Yup.string().required("Require address"),
  dateOfBirth: Yup.string().required("Require Date of birth"),
  email: Yup.string().email("Email only").required("Require Email"),
});
