import React from "react";

interface IBookCardProps {
  title: string;
  author: string;
}
const BookCard = ({ title, author }: IBookCardProps) => {
  return (
    <li className="border-slate-800 shadow-xl hover:shadow-slate-900/50  border-2 p-2 h-[150px] w-[200px] flex flex-col justify-between m-2">
      <h2 className="text-lg font-light truncate">{title}</h2>
      <p className="text-sm text-right">{author}</p>
    </li>
  );
};

export default BookCard;
