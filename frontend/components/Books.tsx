"use client";

import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "@/graphql/queries";
import { Book } from "@/types/book";
import BookCard from "./BookCard";

const Books = () => {
  const { loading, error, data } = useQuery<{ books: Book[] }>(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books!</p>;

  return (
    <ul className="flex justify-center items-center">
      {data?.books.map((book) => (
        <BookCard title={book.title} author={book.author} key={book.id} />
      ))}
    </ul>
  );
};

export default Books;
