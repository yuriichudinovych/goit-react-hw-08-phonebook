import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operation';
import { Form, Label, Input, Button } from 'globalStyles';

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
        <Input name="name" type="name" required />
      </Label>
      <Label>
        email
        <Input name="email" type="email" required />
      </Label>
      <Label>
        password
        <Input name="password" type="password" required />
      </Label>
      <Button type="submit">sign up</Button>
    </Form>
  );
};
