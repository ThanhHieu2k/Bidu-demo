import React from 'react'
import  {Formik, Form , useField} from 'formik'
import styles from './CustomInput.module.scss'



const TextInput = ({ ...props }:any) => {
    const [field, options] = useField(props);
    return (
    <>
        <input  {...field} {...props}  />
        {options.touched && options.error ? (
            <div className={styles["form__group-error"]}>{options.error}</div>
        ) : null}
    </>
    );
};

const Checkbox = ({ children, ...props }:any) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className={styles["checkbox-error"]}>{meta.error}</div>
            ) : null}
        </div>
    );
};

const MySelect = ({ label, ...props }:any) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export {TextInput,Checkbox,MySelect}
