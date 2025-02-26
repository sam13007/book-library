"use client";
import Books from "@/components/Books";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <>
      <Books />
      <div className="flex justify-center mt-4">
        <button
          className="py-2 px-4 bg-cyan-500 shadow-md hover:shadow-cyan-500/50 rounded-lg"
          onClick={() => route.push("/add-book")}
        >
          Add New book
        </button>
      </div>
    </>
  );
}
