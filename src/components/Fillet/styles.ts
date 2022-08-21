import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7
})`
    background-color: ${({ theme }) => theme.colors.detailsLight};
    width: ${RFValue(70)}px;
    border-radius: 4px ;
    height:  ${RFValue(20)}px;
    align-items: center;

    padding-top: 2px;
    margin-left: 4px;
    margin-right: 6px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.interBold};
    color:  ${({ theme }) => theme.colors.primaryColor};
`;