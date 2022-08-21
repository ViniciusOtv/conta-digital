import React from 'react';
import { SvgProps } from 'react-native-svg';
import { StyleSheet } from 'react-native';

import {
    Container, Name
} from './styles';

interface Props {
    name: string;
    icon: React.FC<SvgProps>
}

export function RoundedCard({
    name,
    icon: Icon
}: Props) {
    return (
        <Container style={styles.shadow}>
            <Icon width={18} height={18} />
            <Name>{name}</Name>
        </Container>
    );
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 11,
        shadowColor: '#000000',
    }
});