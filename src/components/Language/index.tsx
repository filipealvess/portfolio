import React from 'react';
import LanguageProps from '../../types/languageProps';
import { Container, Point, Points, Texts } from './styles';

interface Props {
  lang: LanguageProps;
}

export default function Language({ lang }: Props) {
  return (
    <Container>
      <Texts>
        <h5>{lang.name}</h5>
        <p>{lang.level}</p>
      </Texts>

      <Points>
        <Point isActive={lang.points >= 1} />
        <Point isActive={lang.points >= 2} />
        <Point isActive={lang.points >= 3} />
        <Point isActive={lang.points >= 4} />
        <Point isActive={lang.points === 5} />
      </Points>
    </Container>
  );
}
