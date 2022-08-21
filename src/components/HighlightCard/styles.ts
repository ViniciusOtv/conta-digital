import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: ${RFValue(328)}px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.background};
    padding-top: 18px;
    padding-bottom: ${RFValue(42)}px;
    margin: ${RFValue(24)}px;;
    position: absolute;
    margin-top: ${RFValue(88)}px;
    height: ${RFValue(220)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding-left: 8px;
    padding-right: 8px;

`;

export const Amount = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.interExtraBold};
    color: ${({ theme }) => theme.colors.detailsBlue};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.detailsBlue};
    font-size: ${RFValue(24)}px;
`;

export const EyesButton = styled(BorderlessButton)`
`;

export const FilletCollection = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;
