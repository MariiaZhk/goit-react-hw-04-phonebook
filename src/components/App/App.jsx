import { Component } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Section } from '../SectionStyled/Section.styled';
import { Subtitle, Title } from './App.styled';
import { ContactsListWrap } from 'components/ContactsList/ContactsList.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const startContacts = JSON.parse(
      window.localStorage.getItem('CONTACTS_DATA')
    );
    // console.log(startContacts);
    if (startContacts?.length) {
      this.setState({ contacts: [...startContacts] });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'CONTACTS_DATA',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  createContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleSetSearch = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredData = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <Section>
        <Title>Phonebook</Title>
        <Form
          contacts={this.state.contacts}
          createContact={this.createContact}
        ></Form>
        <ContactsListWrap>
          <Subtitle>Contacts</Subtitle>
          <Filter
            filter={this.state.filter}
            handleSetSearch={this.handleSetSearch}
          ></Filter>
          <ContactsList
            contacts={this.state.contacts}
            getFilteredData={this.getFilteredData}
            onDeleteContact={this.onDeleteContact}
          ></ContactsList>
        </ContactsListWrap>
      </Section>
    );
  }
}
