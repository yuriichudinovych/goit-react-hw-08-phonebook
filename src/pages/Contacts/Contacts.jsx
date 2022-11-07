import { useEffect } from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import { UserMenu } from 'components/UserMenu/UserMenu';

import { Title, SecondTitle } from './Contacts.styled';
import { Section, SectionContainer } from 'globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

const Contacts = () => {
  const { items, isLoading } = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <SectionContainer>
          <Title>Phonebook</Title>
          <ContactForm />
        </SectionContainer>
      </Section>
      <Section>
        <SectionContainer>
          <SecondTitle>Contacts</SecondTitle>
          {items.length > 0 && (
            <>
              <Filter />
              <ContactList />
            </>
          )}
          {!isLoading && items.length === 0 && <p>Contacts are not find.</p>}
          {isLoading && <p>...is loading</p>}
        </SectionContainer>
      </Section>
    </>
  );
};

export default Contacts;
