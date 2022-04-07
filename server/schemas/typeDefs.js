const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Project {
    _id: ID
    name: String
    description: String
    gif: String
    link: String
    repo: String
  }

  type Query {
    projects(name: String): [Project]
    project(_id: ID!): Project
  }


`;

module.exports = typeDefs;
