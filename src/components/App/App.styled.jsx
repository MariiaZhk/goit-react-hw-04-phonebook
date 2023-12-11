import styled from 'styled-components';

export const Title = styled.h1`
  margin: 30px 0;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin-bottom: 30px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.extraBold};
  text-align: center;
`;
