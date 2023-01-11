import { NextPage } from "next";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { AddButton } from "../components/AddButton";
import { ListItem } from "../components/ListItem";

const Home: NextPage = () => {
  //インプット
  const [text, setText] = useState("");
  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const [todos, setTodos] = useState<Todo[]>([]);

  //タスク追加
  const add: React.MouseEventHandler<SVGSVGElement> = () => {
    setTodos((prevTodos) => {
      if (text.length === 0) {
        alert("タスク名を入力してください");
        return [...prevTodos];
      }
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };

  //タスクの削除
  const removeTodo = (todoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  //タスクの状態管理
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
    <div className="w-96 mx-auto font-mono ">
      <h1 className="mt-4 text-xl font-bold">TODO</h1>
      <div className="flex items-center gap-2">
        <input
          className="border border-black"
          onChange={input}
          value={text}
          type="text"
        />
        <AddButton add={add} />
      </div>

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="flex items-center">
                <ListItem todo={todo} toggle={toggle} />
                <button>
                  <svg
                    onClick={() => {
                      removeTodo(todo.id);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="outline outline-red-500 rounded-md icon icon-tabler icon-tabler-trash shrink-0 cursor-pointer"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ff2825"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
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
