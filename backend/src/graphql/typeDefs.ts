import { gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    id: ID!
    author: String!
    title: String!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(author: String!, title: String!): Book
    deleteBook(id: ID!): String
  }
`;

export default typeDefs;
