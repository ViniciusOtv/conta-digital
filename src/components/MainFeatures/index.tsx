import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import PixSvg from '../../assets/pix.svg';
import BarCodeSvg from '../../assets/barcode.svg';
import SmartPhoneSvg from '../../assets/smartphone.svg';

import {
  Container,
  Header,
  Icon,
  TextNameLink,
  Title,
  Content,
  Footer,
  GestureHandler
} from './styles';
import { FeatureCard } from '../FeatureCard';

interface Props extends RectButtonProps {
  title: string
  nameLink: string;
}

export function MainFeatures({
  title,
  nameLink,
  ...rest
}: Props) {
  return (
    <Container style={styles.shadow}>
      <Header>
        <Title>
          {title}
        </Title>
      </Header>

      <Content>
        <FeatureCard name="Pix" icon={SmartPhoneSvg} />
        <FeatureCard name="Pagar com QR code" icon={PixSvg} />
        <FeatureCard name="Recarga" icon={BarCodeSvg} />
        <FeatureCard name="Pix" icon={SmartPhoneSvg} />
        <FeatureCard name="Pix" icon={PixSvg} />
        <FeatureCard name="Pix" icon={PixSvg} />
      </Content>

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
  shadow: {
    elevation: 20,
    shadowColor: '#000000',
  },
  shadowCard: {
    elevation: 4,
    shadowColor: '#000000',
  }
});
