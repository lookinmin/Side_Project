import React, { useState } from "react";
import { Todo } from "../entities/Todo";

interface TodoProps {
  todo: Todo;
}

export const TodoCard = ({ todo }: TodoProps) => {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <div>
      {todo.title}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};
