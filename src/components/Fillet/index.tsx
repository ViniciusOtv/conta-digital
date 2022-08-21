import React from 'react';

import {
  Container, Title
} from './styles';

interface Props { 
    type: string;
}

export function Fillet({
    type
}: Props) {
  return (
    <Container>
        <Title>{type}</Title>
    </Container>
  );
}