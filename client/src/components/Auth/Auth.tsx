import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser } from '../../store/slices/authAction';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
   const dispatch = useAppDispatch();
   const stateApp = useAppSelector((state: RootState) => state);

   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   const navigate = useNavigate();

   return (
      <>
         <div className='authentication'>
            <div className='authentication-form'>
               <div className='header-text'>
                  <h1>Sign In</h1>
                  <p>Login to your account</p>
               </div>
               <div>
                  <h3>Email</h3>
                  <input
                     type='text'
                     placeholder='Email'
                     value={email}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                  />
               </div>
               <div>
                  <h3>Password</h3>
                  <input
                     type='password'
                     placeholder='Password'
                     value={password}
                     onChange={(e) => {
                        setPassword(e.target.value);
                     }}
                  />
               </div>
               <button
                  className='Link'
                  onClick={async () => {
                     await dispatch(loginUser(email, password));
                  }}
               >
                  Sign In
               </button>
               <Link className='SignUp' to={'/reg'}>
                  Sign up
               </Link>
            </div>
         </div>
      </>
   );
}
