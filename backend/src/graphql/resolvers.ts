import Book, { IBook } from "../model/Book";

const resolvers = {
  Query: {
    books: async (): Promise<IBook[]> => await Book.find(),
    book: async (_: any, { id }: { id: string }): Promise<IBook | null> =>
      await Book.findById(id),
  },
  Mutation: {
    addBook: async (
      _: any,
      { title, author }: { title: string; author: string }
    ) => {
      const newBook = new Book({ title, author });
      return await newBook.save();
    },
  },
};

export default resolvers;
