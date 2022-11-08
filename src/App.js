import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navfake } from './atoms';
import { Navbar } from './components/';

import GlobalStyle from './GlobalStyle';

import { HomePage, LogInPage, RegisterPage } from './pages';

function App() {
  const nav = useRef();
  const [navheight, setNavheight] = useState(0);
  useEffect(() => {
    setNavheight(nav?.current?.offsetHeight);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar ref={nav} />
      <Navfake height={navheight} />
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='signup' element={<RegisterPage />} />
          <Route path='login' element={<LogInPage />} />
          <Route path='home' element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
