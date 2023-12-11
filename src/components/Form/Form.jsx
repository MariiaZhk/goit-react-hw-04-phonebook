import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormStyled, Input, Label } from 'components/Form/Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };
    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`Contact name ${name} already exists!`);
      this.setState({
        name: '',
        number: '',
      });
      return;
    }
    this.props.createContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            id="number"
            value={this.state.number}
            required
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    );
  }
}
