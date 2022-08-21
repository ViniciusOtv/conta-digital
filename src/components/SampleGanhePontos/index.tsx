import React from 'react';
import { RectButtonProps, ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Dimensions } from 'react-native';


import { CardGanhePontos } from '../Card/CardGanhePontos';
import { Container, 
  Footer,
  GestureHandler, 
  Header, 
  Title, 
  Icon, 
  TextNameLink
 } from './styles';

interface Props {
  title: string
  nameLink: string;
}

const { width, height } = Dimensions.get('window')

export function SampleGanhePontos({
  title,
  nameLink,
}: Props) {
  return (
    <Container style={styles.specificStyle} >
      <Header>
        <Title>
          {title}
        </Title>
      </Header>

      <ScrollView
         style={styles.specificStyle}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={{ paddingHorizontal: 8 }}
      >
        <CardGanhePontos />
        <CardGanhePontos />
        <CardGanhePontos />
        <CardGanhePontos />
      </ScrollView>


      <GestureHandler>
        <Footer>
          <TextNameLink>
            {nameLink}
          </TextNameLink>
          <Icon name="chevron-right" />
        </Footer>
      </GestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  specificStyle: {
    elevation: 20,
    shadowColor: '#000000',
    height: 300,
    // height: height * 0.38,
    padding: 10,
  }
});
