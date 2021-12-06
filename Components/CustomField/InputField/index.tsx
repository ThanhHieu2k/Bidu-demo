import { ErrorMessage } from "formik";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import styles from "./InputField.module.scss";
export default function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;

  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        className={styles.Input}
        col="4"
        id={name}
        placeholder={placeholder}
        type={type}
        {...field}
        invalid={showError}
        valid={showError ? true : false}
      />
      <ErrorMessage
        name={name}
        component={FormFeedback}
        className={styles.error}
      />
    </FormGroup>
  );
}
