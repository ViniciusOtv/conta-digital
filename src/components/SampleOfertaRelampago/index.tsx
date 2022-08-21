import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Footer, GestureHandler, Header, Icon, RootView, TextNameLink, Title } from './styles';
import { CardOfertaRelampago } from '../Card/CardOfertaRelampago';

import {
  ScrollView
} from 'react-native-gesture-handler';


interface Props extends RectButtonProps {
  title: string
  nameLink: string;
}

export function SampleOfertaRelampago({
  title,
  nameLink,
  ...rest
}: Props) {
  return (
    <RootView>
      <Container style={styles.shadow}>
        <Header>
          <Title>
            {title}
          </Title>
        </Header>

      <ScrollView 
            style={styles.scrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}>

          <CardOfertaRelampago></CardOfertaRelampago>
          <CardOfertaRelampago></CardOfertaRelampago>
          <CardOfertaRelampago></CardOfertaRelampago>
          <CardOfertaRelampago></CardOfertaRelampago>
          <CardOfertaRelampago></CardOfertaRelampago>

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
    </RootView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 20,
    shadowColor: '#000000',
  },
  shadowCard: {
    elevation: 4,
    shadowColor: '#000000',
  }, 
  scrollView: {
    flex: 1,
}
});
