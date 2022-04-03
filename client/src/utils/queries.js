import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      name
      description
      gif
      link
      repo
    }
  }
`;
