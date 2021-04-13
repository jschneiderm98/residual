import * as Yup from 'yup';

export const initialValues = {
  nome: '',
  matricula: '',
  email: '',
  senha: '',
};

export const SignupSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Email inváilido')
    .required('É necessário indicar um email'),
  senha: Yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 dígitos')
    .required('É necessário criar uma senha'),
  matricula: Yup.string().required(),
  nome: Yup.string().required(),
});

export const handleSubmit = async (values, setSubmitting, history) => {
  localStorage.setItem('email', values.email);
  localStorage.setItem('senha', values.senha);
  localStorage.setItem('matricula', values.matricula);
  localStorage.setItem('nome', values.name);
  history.push('/login');
  setSubmitting(false);
};
