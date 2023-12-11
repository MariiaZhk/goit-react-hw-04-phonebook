import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListStyled, Warning } from './ContactsList.styled';

export const ContactsList = ({ getFilteredData, onDeleteContact }) => {
  const filteredContacts = getFilteredData();
  return (
    <>
      {filteredContacts.length === 0 ? (
        <Warning>There aren't contacts that match your search query...</Warning>
      ) : (
        <ContactsListStyled>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ContactsListStyled>
      )}
    </>
  );
};
