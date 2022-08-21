import React from 'react';
import { StyleSheet } from 'react-native';

import liquidificador from '../../../assets/liquidificador.png';

import {
    Container,
    Footer,
    Image,
    GradientImage,
    Name,
    StyleReactButton,
    Value,
    Title
} from './styles';


interface Props {
    productName: string;
    image?: string;
    productPointsValue: string;
    offerPointsValue?: string;
    productDescription?: string;
}

export function CardOfertaRelampago() {
    return (
        <Container style={styles.shadow}>
            <StyleReactButton>
                <GradientImage>
                    <Image
                        source={liquidificador}
                        resizeMode="contain"
                    />
                </GradientImage>

                <Name>"Liquidificador Mondial Power Red L77 "</Name>
                <Value>
                    "10.559 Pontos"
                </Value>
                <Footer>
                    <Title>
                        Oferta acaba em 2d 06:41:05
                    </Title>
                </Footer>
            </StyleReactButton>
        </Container>
    );
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 10,
        shadowColor: '#000000',
    }
});
