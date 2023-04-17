import PropTypes from 'prop-types';
import { ContainerBox, ContainerTitle } from './Container.styled';

export const Container = ({ children }) => {
  return (
    <ContainerBox>
      <ContainerTitle>Phonebook</ContainerTitle>
      {children}
    </ContainerBox>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};
