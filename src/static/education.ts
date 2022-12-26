import ExperienceProps from '../types/experienceProps';

const education: ExperienceProps[] = [
  {
    title: 'Técnico em Informática',
    subtitle: 'Instituto Federal de Alagoas',
    cover: '/experiences/ifal.jpg',
    descriptions: [
      'Concluí o ensino médio junto ao curso técnico, tendo contato com programação, manutenção de computadores, banco de dados, redes e afins, além das disciplinas do ensino comum.',
      'Nos trabalhos em grupo, tive a oportunidade de empenhar minha criatividade e liderança, podendo extrair o máximo das habilidades de todos os membros do grupo.',
      'Pude também participar de projetos de pesquisa, estágio, trabalhos extra-curriculares, disputas esportivas, grupos de estudo e iniciar minha carreira como desenvolvedor.'
    ],
    start: 'Jan/2018',
    end: 'Mar/2022',
    skills: [],
    tools: [
      { name: 'C++', image: '/technologies/cpp.jpg' },
      { name: 'Java', image: '/technologies/java.jpg' },
      { name: 'MySQL', image: '/technologies/mysql.jpg' },
      { name: 'HTML', image: '/technologies/html.jpg' },
      { name: 'CSS', image: '/technologies/css.jpg' },
      { name: 'JavaScript', image: '/technologies/js.jpg' },
      { name: 'PHP', image: '/technologies/php.jpg' },
      { name: 'Laravel', image: '/technologies/laravel.jpg' },
      { name: 'NodeJS', image: '/technologies/nodejs.jpg' },
    ],
  }
];

export default education;
