import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Form, Label, Input } from './ContactForm.styled';
import { Button } from 'globalStyles';

import { addContact } from '../../redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const isDuplicate = ({ name }) => {
    const result = items.find(contact => contact.name === name);
    return result;
  };
  const onAddContacts = contact => {
    if (isDuplicate(contact)) {
      return alert(`${contact.name} - is already on the site`);
    }
    const action = addContact(contact);
    dispatch(action);
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContacts({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Cannot find fild');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">add contact</Button>
      </Form>
    </>
  );
};

export default ContactForm;
