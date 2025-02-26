import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query Books {
    books {
      author
      title
      id
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($author: String!, $title: String!) {
    addBook(author: $author, title: $title) {
      author
      title
    }
  }
`;
