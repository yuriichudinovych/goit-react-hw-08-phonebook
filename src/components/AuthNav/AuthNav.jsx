// import { NavLink } from 'react-router-dom';
import { NavLinkStyled } from 'globalStyles';
import { NavLinkRegisterStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkRegisterStyled to="/register">Register</NavLinkRegisterStyled>
      <NavLinkStyled to="/login">Log in</NavLinkStyled>
    </div>
  );
};
