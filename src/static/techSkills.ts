import SkillProps from '../types/skillProps';

const techSkills: SkillProps[] = [
  {
    title: 'Frontend',
    level: 'high',
    techs: [
      { name: 'HTML', image: '/technologies/html.jpg', level: 'high' },
      { name: 'CSS', image: '/technologies/css.jpg', level: 'high' },
      { name: 'JavaScript', image: '/technologies/js.jpg', level: 'high' },
      { name: 'ReactJS', image: '/technologies/reactjs.jpg', level: 'high' },
      { name: 'NextJS', image: '/technologies/nextjs.jpg', level: 'high' },
      { name: 'VueJS', image: '/technologies/vuejs.jpg', level: 'high' },
      { name: 'Redux', image: '/technologies/redux.jpg', level: 'mid' },
      { name: 'NuxtJS', image: '/technologies/nuxtjs.jpg', level: 'mid' },
      { name: 'Sass', image: '/technologies/sass.jpg', level: 'mid' },
      { name: 'Bootstrap', image: '/technologies/bootstrap.jpg', level: 'low' },
      { name: 'JQuery', image: '/technologies/jquery.jpg', level: 'low' },
    ]
  },
  {
    title: 'Backend',
    level: 'mid',
    techs: [
      { name: 'NodeJS', image: '/technologies/nodejs.jpg', level: 'high' },
      { name: 'Flask', image: '/technologies/flask.jpg', level: 'high' },
      { name: 'PHP', image: '/technologies/php.jpg', level: 'mid' },
      { name: 'Python', image: '/technologies/python.jpg', level: 'mid' },
      { name: 'Graphql', image: '/technologies/graphql.jpg', level: 'mid' },
      { name: 'Laravel', image: '/technologies/laravel.jpg', level: 'low' },
    ]
  },
  {
    title: 'Design',
    level: 'mid',
    techs: [
      { name: 'Figma', image: '/technologies/figma.jpg', level: 'high' },
      { name: 'Inkscape', image: '/technologies/inkscape.jpg', level: 'mid' },
      { name: 'Adobe XD', image: '/technologies/xd.jpg', level: 'low' },
      { name: 'Gimp', image: '/technologies/gimp.jpg', level: 'low' },
    ]
  },
  {
    title: 'Mobile',
    level: 'low',
    techs: [
      { name: 'Flutter', image: '/technologies/flutter.jpg', level: 'mid' },
      { name: 'React Native', image: '/technologies/react-native.jpg', level: 'mid' },
      { name: 'Native Script', image: '/technologies/native-script.jpg', level: 'mid' },
    ]
  },
  {
    title: 'Banco de Dados',
    level: 'mid',
    techs: [
      { name: 'MongoDB', image: '/technologies/mongodb.jpg', level: 'high' },
      { name: 'MySQL', image: '/technologies/mysql.jpg', level: 'mid' },
      { name: 'PostgreSQL', image: '/technologies/postgresql.jpg', level: 'low' },
    ]
  },
];

export default techSkills;
