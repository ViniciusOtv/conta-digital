import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Container,
  Image
} from './styles';

interface Props {
  image: ImageSourcePropType
}

import { ImageSourcePropType } from 'react-native';

export function GiftCard({
  image
}: Props) {
  return (
    <Container  style={styles.shadow}>
         <Image source={image} resizeMode="contain" />
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 7,
    shadowColor: '#000000',
  }
});