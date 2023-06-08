import ExperienceProps from '../types/experienceProps';

const experiences: ExperienceProps[] = [
  {
    title: 'Desenvolvedor Frontend e Designer',
    subtitle: 'Vulcanet',
    cover: '/experiences/vulcanet.jpg',
    descriptions: [
      'Colaborei com design e desenvolvimento de dashboards e outras melhorias no peçaZap, produto voltado à comunicação, vendas e atendimento ao cliente via canais online de comunicação.',
      'Participei de discussões técnicas com foco em melhorias de performance e experiência do usuário, levantamento de requisitos e revisões de código.'
    ],
    start: 'Jan/2023',
    end: 'O momento',
    skills: [
      'Trabalho em equipe',
      'Frontend',
      'Proatividade',
      'Design de interfaces',
      'Entendimento do negócio',
      'Versionamento de código',
    ],
    tools: [
      { name: 'Figma', image: '/technologies/figma.jpg' },
      { name: 'ReactJS', image: '/technologies/reactjs.jpg' },
      { name: 'Redux', image: '/technologies/redux.jpg' },
      { name: 'Docker', image: '/technologies/docker.jpg' },
      { name: 'Graphql', image: '/technologies/graphql.jpg' },
    ]
  },
  {
    title: 'Desenvolvedor Fullstack',
    subtitle: 'Doity',
    cover: '/experiences/doity.jpg',
    descriptions: [
      'Realizei melhorias e correções na Plataforma de Eventos, principal produto da empresa, e na Doity Play, sistema de transmissão de eventos online.',
      'Em colaboração com o IFAL, representei a empresa em um projeto que extende a Plataforma de Eventos, tendo como objetivo recomendar configurações para os eventos, aumentando vendas e engajamento com o público.'
    ],
    start: 'Jun/2022',
    end: 'Jan/2023',
    skills: [
      'Trabalho em equipe',
      'Proatividade',
      'Entendimento do Negócio',
      'Backend',
      'Frontend',
      'Infraestrutura',
    ],
    tools: [
      { name: 'CakePHP', image: '/technologies/cakephp.jpg' },
      { name: 'PHP', image: '/technologies/php.jpg' },
      { name: 'Laravel', image: '/technologies/laravel.jpg' },
      { name: 'MySQL', image: '/technologies/mysql.jpg' },
      { name: 'Docker', image: '/technologies/docker.jpg' },
      { name: 'VueJS', image: '/technologies/vuejs.jpg' },
      { name: 'Bootstrap', image: '/technologies/bootstrap.jpg' },
      { name: 'JQuery', image: '/technologies/jquery.jpg' },
    ]
  },
  {
    title: 'Estagiário em Desenvolvimento Web',
    subtitle: 'Agência Lúmen',
    cover: '/experiences/lumen.jpg',
    descriptions: [
      'Realizei a migração do portal de notícias Real Deodorence para WordPress, que tinha sido desenvolvido inicialmente em um CMS próprio da agência.'
    ],
    start: 'Jul/2021',
    end: 'Dez/2021',
    skills: [
      'Gestão de Crises',
      'Organização',
      'Comunicação Assertiva',
      'Backend',
      'Banco de Dados',
    ],
    tools: [
      { name: 'PHP', image: '/technologies/php.jpg' },
      { name: 'WordPress', image: '/technologies/wordpress.jpg' },
      { name: 'MySQL', image: '/technologies/mysql.jpg' },
      { name: 'Bootstrap', image: '/technologies/bootstrap.jpg' },
      { name: 'JQuery', image: '/technologies/jquery.jpg' },
    ]
  },
];

export default experiences;
