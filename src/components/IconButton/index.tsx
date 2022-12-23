import React from 'react';
import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  color?: string;
}

export default function IconButton({ children, color, href, onClick }: Props) {
  return (
    <Container
      as={href ? 'a' : 'button'}
      color={color}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
