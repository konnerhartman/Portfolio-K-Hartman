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
      gif: 'Kota-Bear-Woodworks.gif'
    },
    {
      name: 'Back-End Employee Tracker',
      description:
        "This is a command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL. I built this app to gain valuable knowledge and experience with back-end coding, using SQL, Node.js, and NPM Inquirer. This app solves the problem of strugling to view and understand employes roles. While building this, I learned how to use SQL and how to connect it to other features like NPM and Node.JS. There is no deployed page for this app.",
      link: 'https://youtu.be/Tyaef5QoG08',
      repo: 'https://github.com/konnerhartman/Employee-Tracker',
      gif: 'Employee_Tracker_SQL.gif'
    },
    {
      name: 'Team Profile Generator',
      description:
        'This app allows the user to develop a team profile page with three options of employees (manager, engineer, and intern). It was built using OOP (object orrianted programming) and Node.JS. My motivation to build this app was to allow the user to quickly and easily create a team page of all their employees. I built this app to gain knowledge, experience, and practice with back-end web development using OOP and Node. This app solves the problem of having to build an entire teams page from scratch. An empolyeer can simple answer questions from a prompt and have their team page generated. While building this app I learned about OOP, NPM Tests, and Node.JS',
      link: 'https://www.youtube.com/watch?v=dgEncg6hH9Y',
      repo: 'https://github.com/konnerhartman/Team-Profile-Generator',
      gif: 'Fetch_A_Buzz.gif'
    },
    {
      name: "Buggy's Tech Blog",
      description:
        "This app is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
      link: 'https://buggys-blog.herokuapp.com/',
      repo: 'https://github.com/konnerhartman/Tech-Blog',
      gif: 'BuggysBlog.gif'
    },
    {
      name: 'C.A.P.E.S.',
      description:
        "You’re what some would call a “regular person.” You don’t have super powers, and you need a hand. Maybe your cat is stuck in a tree. Perhaps you’ve got a clogged toilet… or worse… THANOS HAS APPEARED ON YOUR PLANET AND IS EXECUTING A PLAN TO DESTROY YOUR WORLD. If this is you… then you need CAPES. Capes is an app used to summon the superhero (or superheroes) of your choosing. Login (or register), describe your emergency, and select the superheroes best suited for your needs. This project was built using the MERN stack by the proud team members listed in the contributors section.",
      link: 'https://capes-app.herokuapp.com/',
      repo: 'https://github.com/konnerhartman/CAPES',
      gif: 'C.A.P.E.S..gif'
    },
    {
      name: 'Fetch A Buzz',
      description:
        'Fetch A Buzz is an app created as a class project by myself and two other classmates. This app allows the user to select certain cocktails and see the movie that made the drink famous. To achieve this we utilized Materialize (CSS framework), JQuery, and two APIs: OMDB and TheCocktailDB. My roll in this project was a wide spread of tasks, ranging from front end design, JavaScript functionality, to team managing within GitHub and making sure any branch issues were resolved correctly, the main branch remained clean, and each member stayed on task by using the KANBAN board on GitHub.',
      link: 'https://konnerhartman.github.io/Fetch-A-Buzz/',
      repo: 'https://github.com/konnerhartman/Fetch-A-Buzz',
      gif: 'Fetch_A_Buzz.gif'
    },
    
  ]);

  console.log('projects seeded');

  process.exit();
});
