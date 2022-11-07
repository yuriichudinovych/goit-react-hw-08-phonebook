import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: white;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.bold + p.theme.colors.accent};
  /* border-radius: 5px; */
  display: block;
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    /* border-color: ${p => p.theme.colors.accent}; */
  }
`;

export const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* padding: ${p => p.theme.space[4]}px; */
  background: linear-gradient(to right, ${p => p.theme.colors.muted}, white.);
  /* background-color: ; */
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  margin: 0 auto;
  width: 450px;
`;

export const SectionContainer = styled.div`
  padding: 0 ${p => p.theme.space[3]}px;
`;

export const Form = styled.form`
  max-width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 10px 0;
  /* border-radius: 4px; */
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 500;
  display: inline-block;
  &.active {
    color: ${p => p.theme.colors.accent};
    /* background-color: ${p => p.theme.colors.secondary}; */
  }
`;
