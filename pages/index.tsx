import React from 'react';
import Experience from '../src/components/Experience';
import Header from '../src/components/Header';
import Networks from '../src/components/Networks';
import Section from '../src/components/Section';
import education from '../src/static/education';
import experiences from '../src/static/experiences';
import researchProjects from '../src/static/researchProjects';

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

      <Section title="Experiência Profissional">
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </Section>

      <Section title="Projetos de Pesquisa">
        {researchProjects.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </Section>

      <Section title="Formação Acadêmica">
        {education.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </Section>
    </>
  );
}
