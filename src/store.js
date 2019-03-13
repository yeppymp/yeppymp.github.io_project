import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      {
        title: 'Front-end Web Development',
        data: [
          { name: 'HTML', percentage: '100%' },
          { name: 'CSS', percentage: '97%' },
          { name: 'Boostrap', percentage: '95%' },
          { name: 'Bulma', percentage: '95%' },
          { name: 'Javascript', percentage: '90%' },
          { name: 'VueJS', percentage: '90%' },
          { name: 'AngularJS', percentage: '40%' },
        ],
      },
      {
        title: 'Back-end Web Development',
        data: [
          { name: 'NodeJS', percentage: '80%' },
          { name: 'PHP', percentage: '95%' },
          { name: 'Laravel', percentage: '90%' },
        ],
      },
      {
        title: 'Android Development',
        data: [
          { name: 'Ionic', percentage: '75%' },
          { name: 'Java', percentage: '25%' },
          { name: 'Kotlin', percentage: '75%' },
        ],
      },
      {
        title: 'Design & Tools',
        data: [
          { name: 'User Interface', percentage: '90%' },
          { name: 'User Experience', percentage: '50%' },
          { name: 'Graphic Design', percentage: '80%' },
          { name: 'Adobe Photoshop', percentage: '95%' },
          { name: 'Adobe XD (Experience Design)', percentage: '95%' },
          { name: 'Adobe Illustator', percentage: '80%' },
          { name: 'Corel Draw', percentage: '70%' },
          { name: 'Gravit Designer', percentage: '85%' },
        ],
      },
      {
        title: 'Operating Systems',
        data: [
          { name: 'Windows', percentage: '90%' },
          { name: 'Linux', percentage: '85%' },
          { name: 'Linux Ubuntu', percentage: '98%' },
        ],
      },
    ],
    abouts: {
      greeting: 'Hi, i’m Yeppy, Software Developer from Tangerang, Indonesia.',
      desc: [
        'Currently I am a colleger majoring in Computer Science at Mercubuana Unversity, I also work as a freelancer Web Developer, Mobile Developer, and UI Designer',
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
          desc: 'In this uniersity I majoring Computer Science continued from senior highschool',
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
        {
          title: 'Dicoding Challenge - Telkom Travel Apps',
          years: '2018, Winner',
          desc: 'My role as UI/UX Designer, I followed this with my classmate Riksa to create Ngetrip Mobile Application',
        },
      ],
    },
    services: [
      { icon: 'icon-screen-smartphone', color: '#f306a0', title: 'Android Development' },
      { icon: 'fa fa-code', color: '#d8be10', title: 'Web Development' },
      { icon: 'fa fa-code', color: '#d8be10', title: 'Clean Code' },
      { icon: 'icon-support', color: '#0fd28a', title: 'UI Design' },
      { icon: 'fa fa-html5', color: '#f97400', title: 'HTML5 Design' },
      { icon: 'icon-bulb', color: '#08a6f3', title: 'CSS3 Design' },
    ],
  },
});
