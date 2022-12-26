import React from 'react';
import { useTheme } from 'styled-components';
import { Circle, Container, Level } from './styles';

export default function Levels() {
  const theme = useTheme();

  return (
    <Container>
      <Level>
        <Circle color={theme.primary} />
        <small>Experiente</small>
      </Level>

      <Level>
        <Circle color="#E7923D" />
        <small>Intermediário</small>
      </Level>

      <Level>
        <Circle color="#CECECE" />
        <small>Iniciante</small>
      </Level>
    </Container>
  );
}
