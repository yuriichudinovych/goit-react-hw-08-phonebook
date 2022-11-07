// import { NavLink } from 'react-router-dom';
import { NavLinkStyled } from 'globalStyles';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log in</NavLinkStyled>
    </div>
  );
};
