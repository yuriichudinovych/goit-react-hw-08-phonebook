import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operation';
import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;

    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(user);
    dispatch(register(user));
    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        name
        <input name="name" type="name" />
      </Label>
      <Label>
        email
        <input name="email" type="email" />
      </Label>
      <Label>
        password
        <input name="password" type="password" />
      </Label>
      <button type="submit">sign up</button>
    </Form>
  );
};
