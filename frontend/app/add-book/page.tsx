"use client";
import { ADD_BOOK } from "@/graphql/queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [authorName, setAuthorName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [addBook] = useMutation(ADD_BOOK);
  const route = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBook({ variables: { author: authorName, title: bookTitle } });
    route.push("/");
  };
  return (
    <div>
      <h4 className="text-center mb-4 text-xl font-extrabold capitalize">
        Add New Book to your library
      </h4>

      <form
        onSubmit={handleSubmit}
        className="w-[40%] m-auto border-2 p-4 flex flex-col gap-6  items-center"
      >
        <div className="w-[280px]">
          <label htmlFor="author" className="font-extralight text-sm">
            Author Name
          </label>
          <input
            className="w-full mt-2 bg-slate-700 py-2 px-4 dark:bg-gray-700 rounded-lg focus:border-slate-500 focus:outline-slate-500  focus:outline"
            type="text"
            name="author"
            required
            onChange={(e) => setAuthorName(e.target.value)}
            value={authorName}
          />
        </div>
        <div className="w-[280px]">
          <label htmlFor="book" className="font-extralight text-sm">
            Book Name
          </label>
          <input
            className="w-full mt-2 bg-slate-700 py-2 px-4 dark:bg-gray-700 rounded-lg focus:border-slate-500 focus:outline-slate-500  focus:outline"
            type="text"
            name="book"
            required
            onChange={(e) => setBookTitle(e.target.value)}
            value={bookTitle}
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-cyan-500 shadow-md hover:shadow-cyan-500/50 rounded-lg"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <button
          className="py-2 px-4 bg-indigo-400 shadow-md hover:shadow-indigo-500/50 rounded-lg"
          onClick={() => route.push("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default page;
