import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api";
import { TodoCard } from "./TodoCard";

export const Demo = () => {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const queryClient = useQueryClient();

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ["todos", { search }], // key로 데이터를 캐싱함
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // todos라는 key를 가진 query가 re-fetch 되어야 함
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isLoading) {
    return <div>...is Loading</div>;
  }

  return (
    <div>
      <p>ENTER NEW TODO TITLE</p>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        onClick={async () => {
          try {
            await addTodoMutation({ title });
            setTitle("");
          } catch (err) {
            console.log(err);
          }
        }}
      >
        ADD
      </button>
      <div style={{ height: "50px" }} />
      {todos?.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
