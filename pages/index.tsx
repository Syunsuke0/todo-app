import { NextPage } from "next";
import { ChangeEventHandler, useState } from "react";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
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
