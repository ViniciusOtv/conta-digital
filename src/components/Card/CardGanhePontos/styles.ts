import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 30%;
    height: 73%;
    margin-right: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    background-color: ${({theme }) => theme.colors.background};

    border-radius: 7px;
`;

export const Image = styled.Image`
    border-radius: 7px;
    width: 100%;
    height: 69%;
`;

export const Title = styled.Text`
    font-family: ${({theme }) => theme.fonts.interRegular};
    font-size: ${RFValue(12)}px;
    color: ${({theme }) => theme.colors.primaryColor};
`;
 
export const Footer = styled.View`
    width: 100%;
    height: 40px;

    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;

    background-color: ${({theme }) => theme.colors.detailsLight};
`;
