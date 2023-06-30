import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getLocalStorage } from 'utils/storage';

interface Props {
  children: React.ReactNode;
}

const RedirectRoute = ({ children }: Props) => {
  const location = useLocation().pathname;
  const accessToken = getLocalStorage('accessToken');
  if (accessToken && (location === '/signup' || location === '/signin')) {
    alert('로그인 상태입니다!');
    return <Navigate to="/todo" replace />;
  }
  if (!accessToken && location === '/todo') {
    alert('로그인이 필요해요!');
    return <Navigate to="/signin" replace />;
  }
  return <>{children}</>;
};

export default RedirectRoute;
