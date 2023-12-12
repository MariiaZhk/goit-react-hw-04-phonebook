import { useState, useEffect } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Section } from '../SectionStyled/Section.styled';
import { Subtitle, Title } from './App.styled';
import { ContactsListWrap } from 'components/ContactsList/ContactsList.styled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(window.localStorage.getItem('CONTACTS_DATA'));
    if (contacts?.length) {
      return contacts;
    }
    return defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('CONTACTS_DATA', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const handleSetSearch = event => {
    setFilter(event.target.value);
  };

  const getFilteredData = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <Form contacts={contacts} createContact={createContact}></Form>
      <ContactsListWrap>
        <Subtitle>Contacts</Subtitle>
        <Filter filter={filter} handleSetSearch={handleSetSearch}></Filter>
        <ContactsList
          contacts={contacts}
          getFilteredData={getFilteredData}
          onDeleteContact={onDeleteContact}
        ></ContactsList>
      </ContactsListWrap>
    </Section>
  );
};
