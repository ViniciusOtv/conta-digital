import React from 'react';
import { StyleSheet } from 'react-native';

import {
  Container,
  Footer,
  Image,
  Title
} from './styles';

import americanas from '../../../assets/americanas.png';

export function CardGanhePontos() {
  return (
    <Container style={styles.shadow}>
      <Image
        source={americanas}
      />
      <Footer>
        <Title>
          2 a cada 1 real
         </Title>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowColor: '#000000',
  }
});
