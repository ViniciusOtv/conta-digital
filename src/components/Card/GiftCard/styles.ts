import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7
})`
    width: ${RFValue(96)}px;
    height: ${RFValue(76)}px;

    justify-content: center;
    align-items: center;
    /* margin-bottom: 10px; */
    margin-right: 16px;

    background-color: ${({theme }) => theme.colors.background};
    border-radius: 7px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;


