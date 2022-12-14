import React from 'react';
import Experience from '../src/components/Experience';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Language from '../src/components/Language';
import Levels from '../src/components/Levels';
import Networks from '../src/components/Networks';
import Section from '../src/components/Section';
import Skill from '../src/components/Skill';
import education from '../src/static/education';
import experiences from '../src/static/experiences';
import languages from '../src/static/languages';
import researchProjects from '../src/static/researchProjects';
import techSkills from '../src/static/techSkills';

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

      <Section title="Habilidades Técnicas">
        <Levels />

        {techSkills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </Section>

      <Section title="Formação Acadêmica">
        {education.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </Section>

      <Section title="Idiomas">
        {languages.map((lang, index) => (
          <Language key={index} lang={lang} />
        ))}
      </Section>

      <Footer />
    </>
  );
}
