import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const RootView = styled(GestureHandlerRootView)`
  flex: 1;  
`;

export const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    width: 93%;
    height: ${RFValue(345)}px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: 32px;
    margin:  ${RFPercentage(2)}px ${RFPercentage(2)}px;
    margin-bottom: 100px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color:   ${({ theme }) => theme.colors.lineColor};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 8px 20px; 
`;

export const GestureHandler = styled(RectButton).attrs({
    activeOpacity: 0.7
})
`
    width: 100%;
`;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 38px;
    border-top-width: 1px;
    border-top-color:   ${({ theme }) => theme.colors.lineColor};;
    padding: 8px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${RFValue(20)}px;
`;

export const TextNameLink = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.interRegular};
    color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.interSemiBold};
    color: ${({ theme }) => theme.colors.detailsBlue};
`;

export const Content = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
`;
