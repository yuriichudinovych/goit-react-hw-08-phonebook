import { useEffect } from 'react';

import { Navigation } from '../Navigation/Navigation';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser } from 'redux/auth/auth-operation';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Register = lazy(() => import('../../pages/Register/Register'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Login = lazy(() => import('../../pages/Login/Login'));
const NotFoundPage = lazy(() =>
  import('../..//pages/NotFoundPage/NotFoundPage')
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Navigation />}>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
