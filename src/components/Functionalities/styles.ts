import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    width: ${RFValue(96)}px;
    height: ${RFValue(96)}px;

    background-color: yellowgreen;

`;

export const HighlighContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    
    background-color: ${({ theme }) => theme.colors.background};
`;

export const HighlighGroup = styled.View`
    flex-direction: row;
`;

export const Header = styled.View`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 100%;

    background-color:  ${({ theme }) => theme.colors.primaryColor};
`;

export const HighlighHeader = styled.View`
    border-top-left-radius: 7px;
    border-bottom-width: 1px;
    border-bottom-color:  white;

    width: 50%;
    height: ${RFValue(40)}px;
    margin-left: 4px;
    background-color: ${({ theme }) => theme.colors.detailsBlue};
`;

export const HighlighButton = styled(RectButton).attrs({
    activeOpacity: 0.7
})`
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const HighlighHeaderRight = styled.View`
    border-top-right-radius: 7px;
    border-bottom-width: 1px;
    border-bottom-color:  white;

    width: 46%;
    height: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.detailsBlue};
`;

export const HighlighFooter = styled.View`
    height: ${RFValue(25)}px;
    
    margin-left: 4px;
    margin-right: 8px;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    background-color: ${({ theme }) => theme.colors.detailsBlueLight};

`;

export const Footer = styled.View`
    width: 100%;

    background-color: red;
`;

export const HighlighButtonFooter = styled(RectButton).attrs({
    activeOpacity: 0.7
})`
    padding-top: 4px;
    padding-left: 16px;
    padding-right: 8px;
   
    padding-bottom: 4px;

    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const EffectButton = styled(RectButton).attrs({
    activeOpacity: 0.7
})``;

export const TitleFooter = styled.Text`
    font-size:  12px;
    color: ${({ theme }) => theme.colors.background};
    font-family:  ${({ theme }) =>  theme.fonts.interRegular};
`;

export const Title = styled.Text`
    font-size:  ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.titleColor};
    font-family: ${theme.fonts.interRegular};
`;

export const HighlighTitle = styled.Text`
    flex: 1;
    font-size: 9px;
    margin-top: 12px;
    margin-left: 6px;
    color: ${({ theme }) => theme.colors.background};
    font-family: ${theme.fonts.interRegular};
`;

export const VerticalLine = styled.View`                   
    border-left-width: 2px;
    height: ${RFValue(33)}px;
    border-left-color : #fff;
    align-self: stretch;
    margin-top: 4px;
    /* width: 3px; */   
`;

export const CircleDetails = styled.View`
    width: 22px;
    height: 22px;
    border-radius: ${({ theme }) => theme.radius.size}px;
    background-color: red;

    margin-left: 16px;
    margin-top: 8px;
    align-items: center;
    justify-content: center;
    background-color: #5E8AB7;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(14)}px;
`;