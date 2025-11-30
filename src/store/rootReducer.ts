
import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../services/api/apiSlice';
import authReducer from '../features/auth/store/authSlice';
import themeReducer from '../theme/themeSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  theme: themeReducer,
});

export default rootReducer;
