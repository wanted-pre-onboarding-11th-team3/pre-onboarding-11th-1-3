import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
