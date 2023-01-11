import { ChangeEventHandler, MouseEventHandler } from "react";

export const ListItem: React.FC<{
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
}> = ({ todo, toggle }) => {
  return (
    <label className="flex items-center gap-x-2">
      <input
        type="checkbox"
        value={todo.id}
        checked={todo.isDone}
        onChange={toggle}
      />
      <span className="w-52">{todo.label}</span>
    </label>
  );
};
