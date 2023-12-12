import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormStyled, Input, Label } from 'components/Form/Form.styled';

export const Form = ({ createContact, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { id: nanoid(), name, number };
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact name ${name} already exists!`);
      resetForm();
      return;
    }
    createContact(newContact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          id="number"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};
