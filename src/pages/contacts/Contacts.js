import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getIsLoading } from 'redux/contacts/selectors';
import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsListWrapper } from 'components/ContactsList/ContactsList';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsListWrapper />
      </Container>
    </>
  );
}

/* <Container>
  <ContactForm />
  <ContactsListWrapper></ContactsListWrapper>
</Container>; */

//   <Helmet>
//     <title>Your contacts</title>
//   </Helmet>
//   <TaskEditor />
//   <div>{isLoading && 'Request in progress...'}</div>
//   <TaskList />
