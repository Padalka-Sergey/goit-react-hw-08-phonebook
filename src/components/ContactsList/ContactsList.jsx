import { ContactsItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getFilterContactsValue,
  getContactsValue,
  getIsLoading,
  getError,
} from 'redux/contacts/selectors';

import { fetchContacts } from 'redux/contacts/operations';

import {
  ContactsListBox,
  ContactsListTitle,
  ContactItems,
} from './ContactsList.styled';

export const ContactsListWrapper = () => {
  const contacts = useSelector(getContactsValue);
  const filterContactsState = useSelector(getFilterContactsValue);

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onFilterContacts = () => {
    const normFilter = filterContactsState.toLowerCase();
    return contacts.filter(contactEl =>
      contactEl.name.toLowerCase().includes(normFilter)
    );
  };

  return (
    contacts.length !== 0 && (
      <ContactsListBox>
        <ContactsListTitle>Contacts</ContactsListTitle>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactItems>
          {onFilterContacts().map(({ name, number, id }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
            ></ContactsItem>
          ))}
        </ContactItems>
      </ContactsListBox>
    )
  );
};
