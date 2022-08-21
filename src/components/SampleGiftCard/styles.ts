import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(183)}px;
  
  margin-top: 32px;
  padding-top: 20px;

  margin-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.Image`
    margin-top: 10px;
    width:100%;
`;

export const WrapperTitle = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    width: 100%;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.interSemiBold};
    font-size: ${RFValue(14)}px;
    
    margin-left: 18px;
    margin-right: 18px;

    align-items: center;

    color: ${({ theme }) => theme.colors.detailsBlue};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${RFValue(22)}px;

    margin-right: 20px;
`;

export const Content = styled.View`
 flex: 1;
 flex-direction: row;
 width: 100%;
 height: 124px;
 
 margin-top: 130px;

 position: absolute;
`;
