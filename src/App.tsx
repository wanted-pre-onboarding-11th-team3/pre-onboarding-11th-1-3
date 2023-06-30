import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import RedirectRoute from 'routes/RedirectRoute';

function App() {
  return (
    <>
      <GlobalStyle />
      <RedirectRoute>
        <Outlet />
      </RedirectRoute>
    </>
  );
}

export default App;
