import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// export const Container = styled.ScrollView.attrs({
//   showsVerticalScrollIndicator: false,
//   bounces: true

// })`
//   flex: 1;
//   background-color: ${({ theme }) => theme.colors.background};
// `;

// export const Header = styled(LinearGradient).attrs({
//   colors: ['#F56700', '#fff'],
//   start: { x: 0, y: -0.1 },
//   end: { x: 0, y: 1 },
// })
//   ` 
//   flex: 1;
//   height: ${RFValue(270)}px;
//   margin-bottom: ${RFValue(50)}px;
// `;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.detailsLight};
`;

export const Header = styled.View` 
  flex-direction: column;
  justify-content: space-between;
  
  height: ${RFValue(400)}px;
  width: 100%;
  margin-bottom: ${RFValue(50)}px;

  background-color: ${({ theme }) => theme.colors.primaryColor};
  position: absolute;
`;

export const HeaderTopWrapper = styled.View`
    width: 100%;
    height: 100px;

    padding:  24px;
    margin-top: ${getStatusBarHeight() + RFValue(0)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CardWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
    flex-direction: row;
    width: 100%;

    position: absolute;
    height: 15%;
    padding:  12px;
    margin-top: ${getStatusBarHeight() + RFValue(100)}px;
    flex-direction: row;

    color: ${({ theme }) => theme.colors.detailsBlue};
`;


export const Amount = styled.Text`
    /* margin: ${RFValue(60)}px ${RFValue(20)}px; */

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.interExtraBold};
    color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(24)}px;
`;

export const EyesButton = styled(BorderlessButton)`
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.interBold};
`;

// export const Content = styled.View`
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;

//     width: 100%;
//     padding-top: ${RFValue(20)}px; 


//     background-color: ${({ theme }) => theme.colors.background};
// `;

export const RootView = styled(GestureHandlerRootView)`
  flex: 1;  
`;


export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  bounces: true
})`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    width: 100%;


    padding-top: ${RFValue(20)}px; 
    
    background-color: ${({ theme }) => theme.colors.background};
`;

// export const Content = styled.View`
//     flex: 1;
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;

//     width: 100%;


//     padding-top: ${RFValue(20)}px; 
    
//     background-color: ${({ theme }) => theme.colors.background};
// `;

