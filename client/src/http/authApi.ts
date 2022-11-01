import axios, { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { IUser } from '../models/IUser';

export const API_URL = 'http://localhost:6123/api';

// Для автоматического добавления cookie ==> withCredentials: true
const $api = axios.create({ withCredentials: true, baseURL: API_URL });

$api.interceptors.request.use((config: AxiosRequestConfig) => {
   if (!config.headers) {
      config.headers = {};
   } else {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
   }
   return config;
});

$api.interceptors.response.use(
   (config) => {
      return config;
   },
   async (error) => {
      const originalRequest = error.config;
      console.log('error.response.status');
      if (
         error.response.status === 401 &&
         error.config &&
         !error.config._isRetry
      ) {
         originalRequest._isRetry = true;
         try {
            const response = await axios.get<AuthResponse>(
               `${API_URL}/refresh`,
               { withCredentials: true }
            );
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
         } catch (e) {
            console.log('НЕ АВТОРИЗОВАН');
         }
      }
      throw error;
   }
);

//

export const login = async (
   email: string,
   password: string
): Promise<AuthResponse> => {
   const response = await $api.post('/login', {
      email: email,
      password: password,
   });
   console.log('login', response);
   localStorage.setItem('token', response.data.token);
   return response.data;
};

export const registration = async (
   email: string,
   password: string
): Promise<AuthResponse> => {
   const response = await $api.post('/registration', {
      email: email,
      password: password,
   });
   console.log('registration', response);
   localStorage.setItem('token', response.data.token);
   return response.data;
};

export const checkAuth = async (): Promise<AuthResponse> => {
   const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
   });
   console.log('check', response);
   localStorage.setItem('token', response.data.accessToken);
   return response.data;
};

export const logout = async (): Promise<AuthResponse> => {
   const response = await $api.post('/logout');
   console.log('logout', response);
   localStorage.removeItem('token');
   return response.data;
};

export const fetchUser = (email: string): Promise<AxiosResponse<IUser>> => {
   return $api.post<IUser>('/user', { email: email });
};

export default $api;
