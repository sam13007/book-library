"use client";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "@/graphql/queries";
import { Book } from "@/types/book";

export default function Home() {
  const { loading, error, data } = useQuery<{ books: Book[] }>(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books!</p>;

  return (
    <div>
      <h1>Book Library</h1>
      <ul>
        {data?.books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
