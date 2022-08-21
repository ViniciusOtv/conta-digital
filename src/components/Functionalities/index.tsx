import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  HighlighContainer,
  HighlighGroup,
  Header,
  HighlighHeader,
  HighlighButton,
  HighlighHeaderRight,
  HighlighFooter,
  HighlighButtonFooter,
  VerticalLine,
  TitleFooter,
  Title,
  HighlighTitle,
  CircleDetails,
  Icon,
  Footer
} from './styles';


import Pix from 'C:/Users/sd.client/source/repos/conta-digital/src/assets/pix.svg';

interface Props {
  name: string
  icon: string
  isHighlightCard: boolean
}

export function Functionalities({
  name,
  icon,
  isHighlightCard,
}: Props) {

  function iconDefinition(iconName: string) {
    if (iconName === 'Pix'){
      return <Pix/>
    }
    else{
      return <Icon name="chevron-right" />
    }
  }
  return (
    <>
      {

        isHighlightCard === true
        ?
          <HighlighContainer>

            <HighlighGroup>

              <HighlighHeader>
                <HighlighButton onPress={() => { }}>

                  <CircleDetails>
                    <Icon name="dollar-sign" />
                  </CircleDetails>

                  <HighlighTitle>
                    {name}
                  </HighlighTitle>

                  <VerticalLine />
                </HighlighButton>
              </HighlighHeader>

              <HighlighHeaderRight>
                <HighlighButton onPress={() => { }}>
                  <CircleDetails>
                    <Icon name="dollar-sign" />
                  </CircleDetails>

                  <HighlighTitle>
                    Extrato em Reais
                      </HighlighTitle>
                </HighlighButton>
              </HighlighHeaderRight>
            </HighlighGroup>

            <HighlighFooter>
              <HighlighButtonFooter onPress={() => { }}>
                <TitleFooter>
                  Converter Pontos em Reais
                </TitleFooter>

                <Icon name="chevron-right" />
              </HighlighButtonFooter>
            </HighlighFooter>
          </HighlighContainer>
          
          :

          <Container>
            <Header>
              {iconDefinition(icon)}
            </Header>
            
              
            <Footer>
              <Title>
                {name}
              </Title>
            </Footer>

          </Container>
      }
    </>
  );
}