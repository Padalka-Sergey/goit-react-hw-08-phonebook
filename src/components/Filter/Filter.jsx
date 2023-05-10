import { Label, Input, P } from './Filter.styled';

import { showContacts } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterHandler = evt => {
    const { value } = evt.currentTarget;
    dispatch(showContacts(value));
  };
  return (
    <Label>
      <P>Find contacts by name</P>
      <Input type="text" name="filter" onChange={onFilterHandler} />
    </Label>
  );
};
