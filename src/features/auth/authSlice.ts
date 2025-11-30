
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isOnboardingCompleted: false,
    token: null,
  },
  reducers: {
    completeOnboarding: (state) => {
      state.isOnboardingCompleted = true;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { completeOnboarding, setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
