import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    hi: String!
    allTeamMembers: [TeamMember]!
    allPosts: [Post]!
  }
  type TeamMember {
    slug: String!
    bio: String!

    name: String!
    year: Int!
    major: String!
    pronouns: String!
  }
  type Post {
    slug: String!
    content: String!

    title: String!
    description: String!
    author: TeamMember!
    tags: [String]!
  }
`;

export default typeDefs;
