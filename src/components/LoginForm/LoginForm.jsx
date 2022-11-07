import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operation';

import { Form, Label } from './LoginForm.styled';
import { Button } from '../../globalStyles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;

    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    dispatch(login(user));
    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input name="email" type="email" />
      </Label>
      <Label>
        Password
        <input name="password" type="password" />
      </Label>
      <Button type="submit">log in</Button>
    </Form>
  );
};
