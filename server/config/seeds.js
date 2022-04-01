const db = require('./connection');
const { Project } = require('../models');

db.once('open', async () => {
  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
      name: 'TEST NAME',
      description:
        'TEST DESCRIPTION',
      link: 'TEST LINK',
      repo: 'TEST REPO',
      gif: 'TEST GIF'
    },
    
  ]);

  console.log('projects seeded');

  process.exit();
});
