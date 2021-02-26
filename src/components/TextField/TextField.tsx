import { FieldHookConfig, useField } from 'formik';
import React from 'react';


type BaseTextFieldProps = FieldHookConfig<string> & {
  label: string;
};

interface TextFieldProps {
  label: string;
  id?: string;
  type: string | undefined;
  placeholder?: string;
  name: string | undefined;
}

const TextField: React.FC<TextFieldProps> = props => (
  <>
    <label htmlFor={props.id || props.name} className="visually-hidden">{props.label}</label>
    <input className="login__input form__input" {...props} />
  </>
);

const BaseTextField: React.FC<BaseTextFieldProps> = props => {
  const [field, meta] = useField(props);
  const {label, name, type } = props;
  return (
    <>
      <TextField
        {...field}
        {...props}
        label={label}
        name={name}
        type={type}
      />

      {meta.touched && meta.error ? (
        <div className="form__input-error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default BaseTextField;
