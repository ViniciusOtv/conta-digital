import { StyleSheet } from 'react-native';
import React from 'react';

import {
  Container,
  Header,
  Amount,
  EyesButton,
  Icon,
  FilletCollection
} from './styles';
import { Fillet } from '../Fillet';
import { Functionalities } from '../Functionalities';

interface Props {
  pointsValue: string;
  realValue: string;
}


export function HighlightCard({
  pointsValue: pointsValue,
  realValue

}: Props) {
  return (
    <Container style={styles.shadow}>
      <Header>
        <Amount>
          {`DZ ${pointsValue} 
+ R$ ${realValue}`}
        </Amount>
        <EyesButton>
          <Icon name="eye" />
        </EyesButton>
      </Header>

      <FilletCollection>
        <Fillet type="Depositar" />
        <Fillet type="Transferir" />
        <Fillet type="Sacar" />
        <Fillet type="Cartão" />
      </FilletCollection>

      <Functionalities
        name="Extrato de Pontos"
        icon="dolar"
        isHighlightCard={true}
      />

    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 20,
    shadowColor: '#000000',
  }
});
