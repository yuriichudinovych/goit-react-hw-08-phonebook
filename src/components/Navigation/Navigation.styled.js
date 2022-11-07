import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  &::after {
    display: block;
    content: '';
    height: 2px;
    width: 100%;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const AppNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;
