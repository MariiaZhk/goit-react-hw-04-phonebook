import {
  ContactItem,
  ContactText,
  DeleteItemButton,
} from './ContactsItem.styled';

export const ContactsItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ContactItem>
      <ContactText>{name}: </ContactText>
      <ContactText>{number}</ContactText>
      <DeleteItemButton
        type="button"
        onClick={event => onDeleteContact(id, event)}
      >
        Delete
      </DeleteItemButton>
    </ContactItem>
  );
};
