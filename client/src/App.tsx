import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Reg from './components/Reg/Reg';
import Header from './components/Header/Header';
import Terms from './components/Terms/Terms';
import User from './components/User/User';
import Main from './components/Main/Main';
import { checkUser } from './store/slices/authAction';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { RootState } from './store/store';

const App = () => {
   const dispatch = useAppDispatch();
   const stateApp = useAppSelector((state: RootState) => state);

   useEffect(() => {
      if (localStorage.getItem('token')) {
         dispatch(checkUser());
      }
   }, []);

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='auth' element={<Auth />} />
               <Route path='reg' element={<Reg />} />
               <Route path='/' element={<Header />}>
                  <Route path='home' element={<Main />} />
                  <Route path='terms' element={<Terms />} />
                  <Route path='user' element={<User />} />
                  <Route path='/' element={<Navigate to='auth' />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
};

// {stateApp.auth.isAuth ? (
//    <>
//       <Route path='/' element={<Header />}>
//          <Route path='home' element={<Main />} />
//          <Route path='terms' element={<Terms />} />
//          <Route path='user' element={<User />} />
//          <Route path='/' element={<Navigate to='home' />} />
//       </Route>
//    </>
// ) : (
//    <>
//       <Route path='/' element={<Navigate to='auth' />} />
//       <Route path='auth' element={<Auth />} />
//       <Route path='reg' element={<Reg />} />
//    </>
// )}

export default App;
