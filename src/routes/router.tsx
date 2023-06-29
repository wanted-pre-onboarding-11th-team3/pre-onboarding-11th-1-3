import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Todo from 'pages/Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      { path: '/signin', element: <Login /> },
      {
        path: '/signup',
        element: <Signup />,
      },
      { path: '/todo', element: <Todo /> },
    ],
  },
]);

export default router;
