import Image from 'next/image';
import React, { useState } from 'react';
import { Moon } from 'react-feather';
import IconButton from '../IconButton';
import { Container, EasterEgg, ImageContainer } from './styles';

interface Props {
  toggleTheme: () => void;
}

export default function Header({ toggleTheme }: Props) {
  const [avatarImage, setAvatarImage] = useState('/avatar-1.png');

  function toggleAvatarImage() {
    setAvatarImage((prevState) => {
      return prevState === '/avatar-1.png'
        ? '/avatar-2.png'
        : '/avatar-1.png';
    });
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          src={avatarImage}
          alt="Filipe Alves: homem jovem com cabelo curto e sorrindo"
          fill
        />

        <EasterEgg onClick={toggleAvatarImage} />
      </ImageContainer>

      <IconButton onClick={toggleTheme}>
        <Moon />
      </IconButton>

      <h1>Filipe Alves</h1>

      <h2>Desenvolvedor e Designer</h2>
    </Container>
  );
}
