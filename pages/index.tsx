import { NextPage } from "next";
import { ChangeEventHandler, useState } from "react";

type Todo = { id: number; label: string; isDone: boolean };

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const [todos, setTodos] = useState<Todo[]>([
    { id: Math.random(), label: "TODO1", isDone: false },
    { id: Math.random(), label: "TODO2", isDone: true },
    { id: Math.random(), label: "TODO3", isDone: false },
  ]);

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevtodos) => {
      return prevtodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div className="w-96 mx-auto">
      <h1>TODO</h1>
      <div className="flex items-center gap-2">
        <input
          className="border border-black"
          onChange={input}
          value={text}
          type="text"
        />
        <button className="border border-black">Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label className="flex">
                <input
                  type="checkbox"
                  onChange={toggle}
                  checked={todo.isDone}
                />
                <div>{todo.label}</div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
