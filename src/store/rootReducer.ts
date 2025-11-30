
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@features/auth/authSlice';
import networkReducer from '@features/network/networkSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  network: networkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
