import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const auth = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
axios.defaults.baseURL = 'https://63d42dfcc52305feff5f4e6c.mockapi.io';

export const registerUser = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/register');
      auth.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'contacts/addContact',
  async (newItem, thunkAPI) => {
    try {
      const response = await axios.post('/login', newItem);
      auth.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'contacts/addContact',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/login');
      auth.unset();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'contacts/deleteContact',
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete(`/current`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
