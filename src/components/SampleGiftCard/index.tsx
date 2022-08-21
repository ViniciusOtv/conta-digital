import React from 'react';

import {
    Container,
    WrapperTitle,
    Title,
    Icon,
    Image,
    Content
} from './styles';

import gift from '../../assets/gift.png';
import { GiftCard } from '../Card/GiftCard';
import { ScrollView } from 'react-native-gesture-handler';


import uber from '../../assets/uber.png';
import ifood from '../../assets/ifood.png';
import rapper from '../../assets/rappi.png';

export function SampleGiftCard() {
    return (
        <Container>
            <WrapperTitle>
                <Title>
                   Gift Card
                </Title>
                <Icon name="chevron-right" />
            </WrapperTitle>
            <Image
                source={gift}
                resizeMode="contain"
            />
            <Content>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 8 }}
                >
                    <GiftCard image={uber} />
                    <GiftCard image={ifood} />
                    <GiftCard image={rapper} />
                    <GiftCard image={uber} />
                    <GiftCard image={ifood} />
                    <GiftCard image={rapper} />
                    
                </ScrollView>
            </Content>

        </Container>
    );
}