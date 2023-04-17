import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsListWrapper } from 'components/ContactsList/ContactsList';

export function App() {
  return (
    <Container>
      <h1>Privet</h1>
      <ContactForm />
      <ContactsListWrapper></ContactsListWrapper>
    </Container>
  );
}
