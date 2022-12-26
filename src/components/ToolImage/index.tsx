import { ImageProps } from 'next/image';
import React from 'react';
import { Container } from './styles';

export default function ToolImage(props: ImageProps) {
  return (
    <Container {...props} />
  );
}
