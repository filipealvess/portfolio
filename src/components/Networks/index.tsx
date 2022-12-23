import React from 'react';
import { GitHub, Instagram, Linkedin, Mail } from 'react-feather';
import { useTheme } from 'styled-components';
import IconButton from '../IconButton';
import { Container } from './styles';

export default function Networks() {
  const theme = useTheme();

  return (
    <Container>
      <IconButton href="https://github.com/filipealvess" color={theme.primary}>
        <GitHub />
      </IconButton>

      <IconButton href="https://instagram.com/filipealvess.eu" color={theme.primary}>
        <Instagram />
      </IconButton>

      <IconButton href="https://linkedin.com/in/filipe-alvess" color={theme.primary}>
        <Linkedin />
      </IconButton>

      <IconButton href="mailto:filipe.alvesdsouza@gmail.com" color={theme.primary}>
        <Mail />
      </IconButton>
    </Container>
  );
}
