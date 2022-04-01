const { Project } = require('../models');

const resolvers = {
  Query: {
    projects: async (parent, { name }) => {
      const params = {};

      return await Project.find(params);
    },
    project: async (parent, { _id }) => {
      return await Project.findById(_id);
    },
  },
};

module.exports = resolvers;
