import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthPayload {
   id: string;
   email: string;
   role: string;
   isAuth: boolean;
}

const initialState: AuthPayload = {
   id: '',
   email: '',
   role: '',
   isAuth: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginReducer(state: AuthPayload, action: PayloadAction<AuthPayload>) {
         state.id = action.payload.id;
         state.email = action.payload.email;
         state.role = action.payload.role;
         state.isAuth = true;
      },
      registerReducer(state: AuthPayload, action: PayloadAction<AuthPayload>) {
         state.id = action.payload.id;
         state.email = action.payload.email;
         state.role = action.payload.role;
         state.isAuth = true;
      },
      checkReducer(state: AuthPayload, action: PayloadAction<AuthPayload>) {
         state.id = action.payload.id;
         state.email = action.payload.email;
         state.role = action.payload.role;
         state.isAuth = true;
      },
      logoutReducer(state: AuthPayload) {
         state.id = '';
         state.email = '';
         state.role = '';
         state.isAuth = false;
      },
   },
   extraReducers: {},
});

export const { loginReducer, registerReducer, checkReducer, logoutReducer } =
   authSlice.actions;

export default authSlice.reducer;
