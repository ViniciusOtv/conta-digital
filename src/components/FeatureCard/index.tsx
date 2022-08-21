import React from 'react';
import { SvgProps } from 'react-native-svg';
import { StyleSheet } from 'react-native';

import {
  Container, 
  Name
} from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps>
}

export function FeatureCard({
  name, 
  icon: Icon
}: Props){
  return (
    <Container style={styles.shadow}>
        <Icon width={25} height={25} />
        <Name>{name}</Name>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
    shadowColor: '#000000',
  }
});