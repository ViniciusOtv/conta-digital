import React, { useState, useRef, useMemo, useEffect } from 'react';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { MainFeatures } from '../../components/MainFeatures';
import { api } from '../../services/api';


import PixSvg from '../../assets/pix.svg';
import BarCodeSvg from '../../assets/barcode.svg';
import SmartPhoneSvg from '../../assets/smartphone.svg';
import {
  Container,
  Content,
  RootView,
  Header,
  HeaderTopWrapper,
  CardWrapper,
  Amount,
  EyesButton,
  Icon
} from './styles';
import { SampleGanhePontos } from '../../components/SampleGanhePontos';
import { RoundedCard } from '../../components/Card/RoundedCard';
import { Button, StatusBar } from 'react-native';
import { SampleTroquePontos } from '../../components/SampleTroquePontos';
import { SampleGiftCard } from '../../components/SampleGiftCard';
import { SampleOfertaRelampago } from '../../components/SampleOfertaRelampago';

export function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["60%", "83%"], []);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products?Sort=&_page=1&_pageSize=10');
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <RootView>
      <Container>

        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          
          <HeaderTopWrapper>
            <Amount>
              {`PS 2.255
+ R$ 65,00`}
            </Amount>
            <EyesButton>
              <Icon name="eye" />
            </EyesButton>
          </HeaderTopWrapper>
        </Header>

        <CardWrapper>
          <RoundedCard name="Pix" icon={PixSvg} />
          <RoundedCard name="Recarregar" icon={SmartPhoneSvg} />
          <RoundedCard name="Pagar com QR Code" icon={BarCodeSvg} />
          <RoundedCard name="Pix" icon={SmartPhoneSvg} />
          <RoundedCard name="Pix" icon={SmartPhoneSvg} />
        </CardWrapper>

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
        >
          <BottomSheetScrollView >
            <Content>

              <MainFeatures
                title=""
                nameLink="Ver Mais"
              />

              <SampleGanhePontos
                title="Ganhe Pontos"
                nameLink="Ver Mais"
              />

              <SampleTroquePontos
                title="Troque Seus Pontos"
                nameLink="ver mais"
              />

              <SampleGiftCard />

              <SampleOfertaRelampago
                title="Oferta Relâmpago"
                nameLink="ver mais"
              />

            </Content>
          </BottomSheetScrollView >
        </BottomSheet>
      </Container>
    </RootView>
  );
}
