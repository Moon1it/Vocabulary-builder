import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { registerUser } from '../../store/slices/authAction';
import { RootState } from '../../store/store';
import './Reg.css';

export default function Reg() {
   const dispatch = useAppDispatch();
   const stateApp = useAppSelector((state: RootState) => state);

   const [name, setName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   return (
      <>
         <div className='reg'>
            <div className='reg-form'>
               <div className='header-text'>
                  <h1>Sign Up</h1>
                  <p>Create a new account</p>
               </div>
               <div>
                  <h3>Name</h3>
                  <input
                     type='text'
                     placeholder='Email'
                     value={name}
                     onChange={(e) => {
                        setName(e.target.value);
                     }}
                  />
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
               <div>
                  <button
                     onClick={() => dispatch(registerUser(email, password))}
                  >
                     Sign Up
                  </button>
               </div>

               <Link className='SignIn' to={'/auth'}>
                  Sign In
               </Link>
            </div>
         </div>
      </>
   );
}
