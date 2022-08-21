import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7
  })`
      width: ${RFValue(70)}px;
      height: ${RFValue(70)}px;
  
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      margin-right: 8px;  
      background-color: ${({theme }) => theme.colors.background};
  
      border-radius: 16px;
  `;
  
  export const Name = styled.Text`
      margin-top: 5px;
      
      text-align: center;
      font-family:  ${({theme }) => theme.fonts.interRegular};
      color: ${({theme }) => theme.colors.titleColor};
      font-size: ${RFValue(12)}px;
  `;