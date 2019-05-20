import styled from 'styled-components/native';
import { FONTS, COLORS } from '~/assets/styles';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${COLORS.detailsColor};
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-top: 40px;
  margin-bottom: ${props => (props.mb ? 23 : 0)};
`;

export const TextButton = styled.Text`
  font-family: ${FONTS.normal};
  color: ${COLORS.baseColor};
  font-size: 18px;
`;
