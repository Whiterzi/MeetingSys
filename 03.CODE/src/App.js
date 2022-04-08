import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';

import Login from './pages/Login/Login.component';
// import IdentityVerify from './pages/IdentityVerify/IdentityVerify';
import GeneralParameters from './components/GeneralParamters';


import './App.css';
import { Toast } from 'primereact/toast';
import MainPage from './pages/ＭainPage/MainPage.component';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import AccountManage from './pages/AccountManage/AccountManage';

const App = () => {
  console.log('start App', process.env.NODE_ENV);

  const toast = useRef();
  GeneralParameters.env = process.env;
  GeneralParameters.toast = toast;
  GeneralParameters.history = useNavigate();

  return (
    <>
        <Toast ref={toast} />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<MainPage />} />
          <Route path='/historypage' element={<HistoryPage />} />
          <Route path='/accountmanage' element={<AccountManage />}/>
        </Routes>
    </>
  );
}

export default App;
