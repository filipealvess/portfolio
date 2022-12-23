import React from 'react';
import Header from '../src/components/Header';
import Networks from '../src/components/Networks';

interface Props {
  toggleTheme: () => void;
}

export default function Home({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />

      <p>
        Sou <strong> técnico em informática</strong>,
        desenvolvedor <strong>frontend</strong> com conhecimento
        e experiência em desenvolvimento <strong>backend</strong>,
        <strong> mobile</strong>, <strong>banco de dados</strong> e,
        sempre que tenho a oportunidade, me arisco
        no <strong>design de interfaces</strong> :)
      </p>

      <Networks />
    </>
  );
}
