import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operation';
import { getUser } from '../../redux/auth/auth-selectors';
import { UserMenuWrapper, UserMail } from './UserMenu.styled';
import { Button } from 'globalStyles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(getUser);

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuWrapper>
      <UserMail>{email}</UserMail>
      <Button onClick={handleClick}>logout</Button>
    </UserMenuWrapper>
  );
};
