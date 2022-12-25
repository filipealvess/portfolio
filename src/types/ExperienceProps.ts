type Tool = {
  name: string;
  image: string;
};

interface ExperienceProps {
  title: string;
  subtitle: string;
  cover: string;
  descriptions: string[];
  start: string;
  end: string;
  skills: string[];
  tools: Tool[]
}

export default ExperienceProps;
