import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/contacts/api';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.sigupUser(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logOut();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    if (auth.token === null) {
      return rejectWithValue();
    }
    console.log('asdfjdlaskfjalsdfjasdlfjsdafl');
    const result = await api.getCurrentUser(auth.token);
    return result;
  }
);
