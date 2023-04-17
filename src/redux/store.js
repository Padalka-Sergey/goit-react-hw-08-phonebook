import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    persons: contactsSlice.reducer,
    filterContacts: filterSlice.reducer,
  },
});
