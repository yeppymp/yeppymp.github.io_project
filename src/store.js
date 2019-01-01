import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: {
      frontend: [
        { name: 'HTML', percentage: '100%' },
        { name: 'CSS', percentage: '90%' },
        { name: 'Javascript', percentage: '90%' },
        { name: 'VueJS', percentage: '85%' },
        { name: 'AngularJS', percentage: '40%' },
      ],
      backend: [
        { name: 'NodeJS', percentage: '80%' },
        { name: 'PHP', percentage: '70%' },
        { name: 'Laravel', percentage: '80%' },
      ],
      android: [
        { name: 'Ionic', percentage: '75%' },
        { name: 'Java', percentage: '15%' },
        { name: 'Kotlin', percentage: '60%' },
      ],
      design: [
        { name: 'User Interface', percentage: '90%' },
        { name: 'User Experience', percentage: '50%' },
        { name: 'Graphic Design', percentage: '70%' },
        { name: 'Adobe Photoshop', percentage: '90%' },
        { name: 'Adobe XD (Experience Design)', percentage: '90%' },
        { name: 'Adobe Illustator', percentage: '75%' },
        { name: 'Corel Draw', percentage: '70%' },
        { name: 'Gravit Designer', percentage: '90%' },
      ],
    },
    abouts: {
      greeting: 'Hi, i’m Yeppy, Software Developer from Tangerang, Indonesia.',
      desc: [
        'Currently I am a colleger majoring in Technical Information at Mercubuana Unversity, I also work as a freelancer Web Developer, Mobile Developer, and UI Designer',
        'I really like programming, because it requires me to focus, discipline, team work, and many other positive things from the programming that I get.',
      ],
    },
    experiences: {
      schools: [
        {
          name: 'Elementary School',
          title: 'SD Negeri 2 Cikalahang',
          years: '2006 - 2012',
          desc: 'This elementary school is located in the village of Cikalahang, not far from my house, so it does not require a vehicle when I leave school or go home from school',
        },
        {
          name: 'Junior High School',
          title: 'SMP Negeri 1 Dukupuntang',
          years: '2012 - 2015',
          desc: 'The school is not far from my house, but at that time I was allowed to ride a motorcycle, so I went to school by motorcycle',
        },
        {
          name: 'Senior High School',
          title: 'SMK Negeri 1 Kota Cirebon',
          years: '2015 - 2018',
          desc: 'In this school I majored in software engineering that i like',
        },
        {
          name: 'Bachelor Degree',
          title: 'Mercubuana University',
          years: '2018 - Now',
          desc: 'In this uniersity I majored in Technical Information continued from senior highschool',
        },
      ],
      archievements: [
        {
          title: 'Graphic Design Competition',
          years: '2016, 3rd',
          desc: 'Since entering high school, my hobby is designing and editing photos using Adobe Photoshop, and Adobe Illustrator',
        },
        {
          title: 'Web Contest - DINAMIK 12 UPI, Bandung',
          years: '2016, Finalist - 4th',
          desc: 'After knowing what it is programming world, my hobbies make website display design, and follow the DYNAMIC web competition with my team',
        },
        {
          title: 'Web Design Competition',
          years: '2017, 2nd',
          desc: 'Continuing my hobby in web programming, I followed this competition to add to the soul of my competition',
        },
        {
          title: 'Web Design Contest - VOCOMFEST 2018 UGM, Yogyakarta',
          years: '2018, 5th',
          desc: 'My role as Frontend Developer, I followed this competition to evaluate how far I am as a frontend developer',
        },
      ],
    },
    services: [
      { icon: 'icon-screen-smartphone', color: '#f306a0', title: 'Android Development' },
      { icon: 'fa fa-code', color: '#d8be10', title: 'Web Development' },
      { icon: 'fa fa-code', color: '#d8be10', title: 'Clean Code' },
      { icon: 'icon-support', color: '#0fd28a', title: 'UI Designer' },
      { icon: 'fa fa-html5', color: '#f97400', title: 'HTML5 Design' },
      { icon: 'icon-bulb', color: '#08a6f3', title: 'CSS3 Design' },
    ],
  },
});
