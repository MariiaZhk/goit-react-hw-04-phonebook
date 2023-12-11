import styled from 'styled-components';

export const ContactsListWrap = styled.div`
  margin-top: 40px;
`;

export const ContactsListStyled = styled.ul`
  margin: 30px 0;
`;

export const Warning = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  margin-top: 50px;
  margin-bottom: 30px;
  font-style: italic;
  color: ${props => props.theme.colors.gray};
`;
