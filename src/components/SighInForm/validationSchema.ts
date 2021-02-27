import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Wrong format')
    .required('Field is required'),
  password: Yup
    .string()
    .min(6, 'Password is too short')
    .max(20, 'Password is too long')
    .required('Field is required'),
});

export { validationSchema };
