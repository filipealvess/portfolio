export type Level = 'low' | 'mid' | 'high';

type Tech = {
  name: string;
  image: string;
  level: Level;
}

interface SkillProps {
  title: string;
  level: Level;
  techs: Tech[];
}

export default SkillProps;
