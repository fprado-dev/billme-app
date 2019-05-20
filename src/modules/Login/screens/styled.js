import styled from 'styled-components/native';
import { COLORS, FONTS } from '~/assets/styles';

export const Container = styled.View`
  background-color: ${COLORS.baseColor};
  align-items: center;
`;

export const SmallText = styled.Text`
  color: ${COLORS.lightTextColor};
  font-size: 13px;
  margin-top: 23px;
  font-family: ${FONTS.normal};
`;
