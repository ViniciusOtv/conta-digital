import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7
})`
    width: ${RFValue(89)}px;
    height: ${RFValue(96)}px;

    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    background-color: ${({theme }) => theme.colors.background};

    border-radius: 7px;
`;

export const Name = styled.Text`
    margin-top: 5px;
    
    text-align: center;
    font-family:  ${({theme }) => theme.fonts.interRegular};
    color: ${({theme }) => theme.colors.titleColor};
    font-size: ${RFValue(14)}px;
`;