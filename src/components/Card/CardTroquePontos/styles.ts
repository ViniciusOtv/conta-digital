import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.View`
    width: ${RFValue(130)}px;
    height: ${RFValue(190)}px;
  
    justify-content: center;
    align-items: center;
     
    margin-top: 12px;
    margin-bottom: 10px;
    
    border-radius: 7px;

    margin-right: 16px;  
    background-color: ${({ theme }) => theme.colors.background};
  `;

export const StyleReactButton = styled(RectButton).attrs({
    activeOpacity: 0.7
})
    `
    width: 100%;
    height: 100%;
   
  `;

export const Name = styled.Text`
      margin-top: 10px;
      
      text-align: center;
      font-family:  ${({ theme }) => theme.fonts.interRegular};
      color: ${({ theme }) => theme.colors.titleColor};
      font-size: ${RFValue(12)}px;
  `;

export const Image = styled.Image`
    width:100%;
    height: ${RFValue(100)}px;
    margin-top: ${RFValue(16)}px;
`;

export const GradientImage = styled(LinearGradient).attrs({
    colors: ['#ECEDEF', '#fff'],
    start: { x: 0, y: -0.1 },
    end: { x: 0, y: 1 },
})
    ` 
    width:100%;
    height: ${RFValue(100)}px;
    margin-bottom:  ${RFValue(16)}px;
`;

export const Value = styled.Text`
    font-family: ${({ theme }) => theme.fonts.interRegular};
    font-size: ${RFValue(14)}px;
    text-align: center;
    margin-top: 10px;

    color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Footer = styled.View`
    width: 100%;
    height: 40px;

    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
`;