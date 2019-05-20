import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '~/assets/styles';

export const Container = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: ${COLORS.detailsColor};
  flex-direction: row;
  padding-bottom: 15px;
  width: 100%;
  margin-bottom: 40px;
`;

export const WrapperIconText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Icon = styled.Image``;
export const Label = styled.Text``;

export const MainInput = styled.TextInput.attrs({
  type: 'text',
  placeholderTextColor: COLORS.detailsColor,
})`
  font-size: 15px;
  color: ${COLORS.detailsColor};
  padding-left: 15px;
  font-family: ${FONTS.lite};
`;
export const ErrorMessage = styled.Text``;
