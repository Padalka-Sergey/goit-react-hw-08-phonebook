import * as phoneContactsAPI from 'services/phoneContacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// First, create the thunk
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // создатель payload + правильная обработка ошибок
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phoneContactsAPI.fetchContacts();
      return contacts;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (items, { rejectWithValue }) => {
    try {
      const response = await phoneContactsAPI.addContact(items);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await phoneContactsAPI.deleteContact(id);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
