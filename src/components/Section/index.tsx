import React from 'react';
import { Container, Title } from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Section({ title, children }: Props) {
  return (
    <Container>
      <Title>{title}</Title>

      {children}
    </Container>
  );
}
