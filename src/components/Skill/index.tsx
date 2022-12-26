import React from 'react';
import { Book, Eye, Star } from 'react-feather';
import { useTheme } from 'styled-components';
import SkillProps from '../../types/skillProps';
import ToolImage from '../ToolImage';
import { Container, Content, Header, IconContainer, ImageContainer } from './styles';

interface Props {
  skill: SkillProps;
}

export default function Skill({ skill }: Props) {
  const theme = useTheme();
  const icons = { high: Star, mid: Book, low: Eye };
  const texts = { high: 'Experiente', mid: 'Intermediário', low: 'Iniciante' };
  const Icon = icons[skill.level];

  return (
    <Container>
      <Header>
        <h5>{skill.title}</h5>

        <IconContainer>
          <small>{texts[skill.level]}</small>
          <Icon className="icon" color={theme.primary} />
        </IconContainer>
      </Header>

      <Content>
        {skill.techs.map((tech, index) => (
          <ImageContainer key={index} level={tech.level}>
            <ToolImage
              width={40}
              height={40}
              src={tech.image}
              alt={tech.name}
              title={tech.name}
            />
          </ImageContainer>
        ))}
      </Content>
    </Container>
  );
}
