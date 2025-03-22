import { gql } from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Movie {
    id: ID!
    name: String!
    yearPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

export { typeDefs };
