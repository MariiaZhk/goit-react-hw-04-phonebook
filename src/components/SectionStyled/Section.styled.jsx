import styled from 'styled-components';

export const Section = styled.section`
  width: 36%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 40px auto;
  padding: ${props => props.theme.spacing(10)};
  border-radius: ${props => props.theme.borderRadius.wrapperBorder};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.regular};
`;
