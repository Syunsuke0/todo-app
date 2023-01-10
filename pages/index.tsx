import { NextPage } from "next";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";

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

  const removeTodo = (todoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
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
    <div className="w-96 mx-auto font-mono">
      <h1 className="mt-4 text-xl">TODO</h1>
      <div className="flex items-center gap-4">
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
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="flex items-center">
                <label className="flex gap-x-2">
                  <input
                    type="checkbox"
                    value={todo.id}
                    checked={todo.isDone}
                    onChange={toggle}
                  />
                  <span className="w-52">{todo.label}</span>
                </label>
                <button
                  onClick={() => {
                    removeTodo(todo.id);
                  }}
                  className="bg-red-500 font-bold text-white text-xs rounded-full px-1 shrink-0"
                >
                  削除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
