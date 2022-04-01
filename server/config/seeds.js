const db = require('./connection');
const { Projects } = require('../models');

db.once('open', async () => {
  await Projects.deleteMany();

  const projects = await Projects.insertMany([
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
