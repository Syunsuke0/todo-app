import { NextPage } from "next";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

type Todo = { id: number; label: string; isDone: boolean };

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const [todos, setTodos] = useState<Todo[]>([]);

  const add: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTodos((prevTodos) => {
      if (text.length === 0) {
        alert("タスク名を入力してください");
        return [...prevTodos];
      }
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
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
        <button onClick={add} className="border border-black">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label className="flex">
                <input
                  type="checkbox"
                  value={todo.id}
                  checked={todo.isDone}
                  onChange={toggle}
                />
                <span>{todo.label}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
