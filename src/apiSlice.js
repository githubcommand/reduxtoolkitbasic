// apiSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
// Async thunk for fetching data
export const fetchData = createAsyncThunk('api/fetchData', async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      return response.data;
    } catch (error) {
      // Handle specific errors or return a general error message
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return Promise.reject(`Server Error: ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        return Promise.reject('Network Error: No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        return Promise.reject(`Error: ${error.message}`);
      }
    }
  });
  

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
