const db = require('./connection');
const { Project } = require('../models');

db.once('open', async () => {
  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
      name: 'Kota Bear Woodworks',
      description:
        'This web app was built for a small business that produces handmade goods in DFW, Texas. It was built using the MERN stack (MongoBD, Express, React, Node). It also utilizes Bootstrap and EmailJS.',
      link: 'https://kotabearwoodworks.herokuapp.com/',
      repo: 'https://github.com/konnerhartman/KotaBearWoodworks',
      gif: 'TEST GIF'
    },
    {
      name: 'Back-End Employee Tracker',
      description:
        "This is a command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL. I built this app to gain valuable knowledge and experience with back-end coding, using SQL, Node.js, and NPM Inquirer. This app solves the problem of strugling to view and understand employes roles. While building this, I learned how to use SQL and how to connect it to other features like NPM and Node.JS. There is no deployed page for this app.",
      link: 'https://youtu.be/Tyaef5QoG08',
      repo: 'https://github.com/konnerhartman/Employee-Tracker',
      gif: 'TEST GIF'
    },
    {
      name: "Buggy's Tech Blog",
      description:
        "This app is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
      link: 'https://buggys-blog.herokuapp.com/',
      repo: 'https://github.com/konnerhartman/Tech-Blog',
      gif: 'TEST GIF'
    },
    {
      name: 'Fetch A Buzz',
      description:
        'Fetch A Buzz is an app created as a class project by myself and two other classmates. This app allows the user to select certain cocktails and see the movie that made the drink famous. To achieve this we utilized Materialize (CSS framework), JQuery, and two APIs: OMDB and TheCocktailDB. My roll in this project was a wide spread of tasks, ranging from front end design, JavaScript functionality, to team managing within GitHub and making sure any branch issues were resolved correctly, the main branch remained clean, and each member stayed on task by using the KANBAN board on GitHub.',
      link: 'https://konnerhartman.github.io/Fetch-A-Buzz/',
      repo: 'https://github.com/konnerhartman/Fetch-A-Buzz',
      gif: 'TEST GIF'
    },
    
  ]);

  console.log('projects seeded');

  process.exit();
});
