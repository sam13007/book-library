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
          className="btn btn-primary"
          onClick={() => route.push("/add-book")}
        >
          Add New book
        </button>
      </div>
    </>
  );
}
