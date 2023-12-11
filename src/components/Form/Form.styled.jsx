import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.blue};
  border-radius: ${props => props.theme.borderRadius.buttonBorder};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.white};
  width: 200px;
  height: 60px;
  margin: 10px;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.hovers};
    color: ${props => props.theme.colors.white};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  width: 70%;
  margin: 0 auto;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px 15px;
  border-radius: ${props => props.theme.borderRadius.inputBorder};
  box-shadow: ${props => props.theme.shadows.small};
  font-size: ${props => props.theme.fontSizes.medium};
`;
