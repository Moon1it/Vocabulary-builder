import { checkAuth, login, logout, registration } from '../../http/authApi';
import { AuthResponse } from '../../models/response/AuthResponse';
import { AppDispatch } from '../store';
import {
   checkReducer,
   loginReducer,
   logoutReducer,
   registerReducer,
} from './authSlice';

export const loginUser = (email: string, password: string) => {
   return async (dispatch: AppDispatch) => {
      try {
         const data: AuthResponse = await login(email, password);

         console.log('res', data);
         dispatch(
            loginReducer({
               id: data.user.id,
               email: data.user.email,
               role: data.user.role,
               isAuth: data.user.isAuth,
            })
         );
      } catch (e) {
         console.log('error', e);
      }
   };
};

export const registerUser = (email: string, password: string) => {
   return async (dispatch: AppDispatch) => {
      try {
         const data: AuthResponse = await registration(email, password);
         dispatch(
            registerReducer({
               id: data.user.id,
               email: data.user.email,
               role: data.user.role,
               isAuth: data.user.isAuth,
            })
         );
      } catch (e) {
         console.log('error', e);
      }
   };
};

export const checkUser = () => {
   return async (dispatch: AppDispatch) => {
      try {
         const data: AuthResponse = await checkAuth();
         dispatch(
            checkReducer({
               id: data.user.id,
               email: data.user.email,
               role: data.user.role,
               isAuth: data.user.isAuth,
            })
         );
      } catch (e) {
         console.log('error', e);
      }
   };
};

export const logoutUser = () => {
   return async (dispatch: AppDispatch) => {
      try {
         const response = await logout();
         console.log('logout', response);
         dispatch(logoutReducer());
      } catch (e) {
         console.log('error', e);
      }
   };
};
