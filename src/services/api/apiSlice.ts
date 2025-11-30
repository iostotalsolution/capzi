
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.capzi.com/', // Replace with your API base URL
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['User', 'Profile'], // Define tags for caching
  endpoints: (builder) => ({}), // Endpoints will be injected from other files
});
