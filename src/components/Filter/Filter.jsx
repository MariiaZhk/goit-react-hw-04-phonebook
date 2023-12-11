import { Input, Label } from 'components/Form/Form.styled';

export const Filter = ({ filter, handleSetSearch }) => {
  return (
    <Label htmlFor="filter">
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleSetSearch}
        required
      />
    </Label>
  );
};
