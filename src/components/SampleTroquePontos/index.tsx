import React from 'react';
import { CardTroquePontos } from '../Card/CardTroquePontos';
import { StyleSheet, Dimensions } from 'react-native';

import {
    ScrollView
} from 'react-native-gesture-handler';

import {
    RootView,
    Container,
    Header,
    Title,
    GestureHandler,
    Footer,
    TextNameLink,
    Icon
} from './styles';

interface Props {
    title: string
    nameLink: string;
}

export function SampleTroquePontos({
    title,
    nameLink,
}: Props) {
    return (
        <RootView>
            <Container style={styles.specificStyle}>
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
                    
                    <CardTroquePontos
                        productName={"Liquidificador Mondial Power Red L77 "}
                        productPointsValue={"10.559 Pontos"}
                    />

                    <CardTroquePontos
                        productName={"Liquidificador Mondial Power Red L77 "}
                        productPointsValue={"10.559 Pontos"}
                    />

                    <CardTroquePontos
                        productName={"Liquidificador Mondial Power Red L77 "}
                        productPointsValue={"10.559 Pontos"}
                    />
                    <CardTroquePontos
                        productName={"Liquidificador Mondial Power Red L77 "}
                        productPointsValue={"10.559 Pontos"}
                    />
                    <CardTroquePontos
                        productName={"Liquidificador Mondial Power Red L77 "}
                        productPointsValue={"10.559 Pontos"}
                    />
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
    specificStyle: {
        elevation: 20,
        shadowColor: '#000000',
        height: '100%'
    },
    scrollView: {
        flex: 1,
    }
});




  