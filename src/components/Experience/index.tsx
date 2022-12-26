import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import ExperienceProps from '../../types/ExperienceProps';
import {
  Container,
  Content,
  Description,
  Grid,
  Header,
  ImageContainer,
  List,
  Time,
  Titles,
  Tool
} from './styles';

interface Props {
  experience: ExperienceProps
}

export default function Experience({ experience }: Props) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [contentHeight, setContentHeight] = useState<string | null>(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef && contentRef.current) {
      const height = window.getComputedStyle(contentRef.current).height;

      setContentHeight(height);
      setIsExpanded(false);
    }
  }, [contentRef]);

  function toggle() {
    setIsExpanded(prevState => !prevState);
  }

  return (
    <Container>
      <Header onClick={toggle}>
        <ImageContainer className="image">
          <Image src={experience.cover} fill alt={experience.subtitle} />
        </ImageContainer>

        <Titles>
          <h4>{experience.title}</h4>
          <p>{experience.subtitle}</p>
        </Titles>

        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </Header>

      <Content visible={isExpanded} ref={contentRef} height={contentHeight}>
        <Time>{experience.start} - {experience.end}</Time>

        {experience.descriptions.map((description, index) => (
          <Description key={index}>{description}</Description>
        ))}

        {experience.skills.length > 0 && (
          <List>
            <h5>Habilidades adquiridas/melhoradas:</h5>

            <ul>
              {experience.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </List>
        )}

        {experience.tools.length > 0 && (
          <List>
            <h5>Ferramentas utilizadas:</h5>

            <Grid>
              {experience.tools.map((tool, index) => (
                <Tool
                  key={index}
                  width={40}
                  height={40}
                  src={tool.image}
                  alt={tool.name}
                  title={tool.name}
                />
              ))}
            </Grid>
          </List>
        )}
      </Content>
    </Container>
  );
}
