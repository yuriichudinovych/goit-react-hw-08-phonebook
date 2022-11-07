import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operation';

import { Form, Label, Input } from 'globalStyles';
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
        <Input name="email" type="email" required />
      </Label>
      <Label>
        Password
        <Input name="password" type="password" required />
      </Label>
      <Button type="submit">log in</Button>
    </Form>
  );
};
