import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Todo from 'pages/Todo';
import { getLocalStorage } from 'utils/storage';

const token = getLocalStorage('accessToken');
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: token ? <Navigate to="/todo" /> : <Home />,
      },
      { path: '/signin', element: token ? <Navigate to="/todo" /> : <Login /> },
      {
        path: '/signup',
        element: token ? <Navigate to="/todo" /> : <Signup />,
      },
      { path: '/todo', element: !token ? <Navigate to="/signin" /> : <Todo /> },
    ],
  },
]);

export default router;
