import React from 'react';
import { StyleSheet } from 'react-native';

import {
    Container,
    StyleReactButton,
    Image,
    GradientImage,
    Name,
    Value,
    Footer
} from './styles';

interface Props {
    productName: string;
    image?: string;
    productPointsValue: string;
    offerPointsValue?: string;
    productDescription?: string;
}

import liquidificador from '../../../assets/liquidificador.png';

export function CardTroquePontos({
    productName,
    productPointsValue: productPointsValue
}: Props) {
    return (
        <Container style={styles.shadow}>
            <StyleReactButton>
                <GradientImage>
                    <Image
                        source={liquidificador}
                        resizeMode="contain"
                    />
                </GradientImage>

                <Name>{productName}</Name>
                <Value>
                    {productPointsValue}
                </Value>
                <Footer>
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
