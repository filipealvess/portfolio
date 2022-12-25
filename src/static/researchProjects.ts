import ExperienceProps from '../types/ExperienceProps';

const researchProjects: ExperienceProps[] = [
  {
    title: 'Desenvolvedor Frontend e Designer',
    subtitle: 'Projeto SALA',
    cover: '/experiences/sala.jpg',
    descriptions: [
      'Redesenhei, liderei, documentei e ajudei na construção das páginas do site do projeto.',
      'Também fiz papel de consultor técnico, discutindo, testando e buscando melhorias para as soluções apresentadas pelo projeto.'
    ],
    start: 'Jul/2022',
    end: 'O momento',
    skills: [
      'Liderança',
      'Documentação de Processos',
      'Solução de Problemas Complexos',
      'Sanar Conflitos',
      'Frontend',
      'Design',
      'Levantamento de Requisitos',
    ],
    tools: [
      { name: 'NextJS', image: '/technologies/nextjs.jpg' },
      { name: 'Firebase', image: '/technologies/firebase.jpg' },
      { name: 'Figma', image: '/technologies/figma.jpg' },
    ]
  },
  {
    title: 'Desenvolvedor Fullstack e Designer',
    subtitle: 'Plataforma Ciberfísica para Irrigação Inteligente',
    cover: '/experiences/pc2i.jpg',
    descriptions: [
      'Participei do desenho e desenvolvimento do aplicativo multiplataforma do projeto.',
      'Fui o principal responsável pela construção do backend/plataforma, núcleo do projeto.',
      'Lidei também com mensageria, arquitetura de software, modelagem de banco de dados e experiência do usuário.'
    ],
    start: 'Jun/2021',
    end: 'O momento',
    skills: [
      'Liderança de Times',
      'Solução de Problemas Complexos',
      'Sanar Conflitos',
      'Backend',
      'Design',
      'Levantamento de Requisitos',
      'Arquitetura de Software'
    ],
    tools: [
      { name: 'Flutter', image: '/technologies/flutter.jpg' },
      { name: 'Figma', image: '/technologies/figma.jpg' },
      { name: 'Python', image: '/technologies/python.jpg' },
      { name: 'Flask', image: '/technologies/flask.jpg' },
      { name: 'MongoDB', image: '/technologies/mongodb.jpg' },
    ]
  }
];

export default researchProjects;
