import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    
    width: 93%;
    height: 15%;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.background};
    
    margin: 2px 14px;

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
    height: 40px;
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

export const Content = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 16 }
})`    
    width: 100%; 
    height: 100%;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
`;