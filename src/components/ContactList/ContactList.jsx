import PropTypes from 'prop-types';

import { StyledContactList } from './ContactList.styled';
import { Button } from 'globalStyles';

import { getFilteredContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onRemoveContacts = id => {
    const action = removeContact(id);
    dispatch(action);
  };
  return (
    <>
      <StyledContactList>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>{`${name}: ${number}`}</p>
              <Button onClick={() => onRemoveContacts(id)}>delete</Button>
            </li>
          );
        })}
      </StyledContactList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
