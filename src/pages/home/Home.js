import { Div, H1 } from './Home.styled';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    <Div>
      <H1>
        Phonebook welcome page
        {/* <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span> */}
      </H1>
    </Div>
  );
}
