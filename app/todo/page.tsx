"use client";
import { useState, FC } from "react";
import axios from "axios";

interface Todo {
  title: string;
}

const AddTodo: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<Todo>("/api/todo", { title });
      setTitle(""); // Clear input field after successful submission
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError("Failed to add todo");
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddTodo;
