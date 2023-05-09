// import * as phoneContactsAPI from 'services/phoneContacts-api';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setAuthHeader } from '../auth/operations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (items, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', items);

      // setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await phoneContactsAPI.deleteContact(id);
//       return response;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (items, { rejectWithValue }) => {
//     try {
//       const response = await phoneContactsAPI.addContact(items);
//       return response;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
// =============================
// First, create the thunk
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
// создатель payload + правильная обработка ошибок
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await phoneContactsAPI.fetchContacts();
//       return contacts;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
