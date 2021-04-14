import * as Yup from 'yup';

export const initialValues = {
  email: '',
};

export const RecoverSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Email inváilido')
    .required('É necessário indicar um email'),
});

export const handleSubmit = async (values, setSubmitting, history) => {
  localStorage.setItem('recoveredEmail', values.email);
  history.push('/login');
  setSubmitting(false);
};
