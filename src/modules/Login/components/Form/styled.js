import styled from 'styled-components/native';
import { FONTS, COLORS } from '~/assets/styles';

export const Container = styled.View`
  margin-top: 50px;
  width: 85%;
`;

export const LinkText = styled.Text`
  font-family: ${FONTS.normal};
  color: ${COLORS.detailsColor};
  font-size: 10px;
  text-decoration: underline;
  text-decoration-line: underline;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
