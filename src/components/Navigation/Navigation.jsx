import { UserNav } from '../UserNav/UserNav';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsloggedIn } from '../../redux/auth/auth-selectors';

import { Header, AppNavigation } from './Navigation.styled';
import { SectionContainer, MainContainer } from 'globalStyles';
export const Navigation = () => {
  const isloggedIn = useSelector(getIsloggedIn);
  return (
    <MainContainer>
      <Header>
        <SectionContainer>
          <AppNavigation>
            {isloggedIn && <UserNav />}
            {isloggedIn ? <UserMenu /> : <AuthNav />}
          </AppNavigation>
        </SectionContainer>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};
