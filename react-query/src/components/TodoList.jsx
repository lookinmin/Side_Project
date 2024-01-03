import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../api/todosApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

export const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id),
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // cache 유효성 판단 -> refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // cache 유효성 판단 -> refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // cache 유효성 판단 -> refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false });
    setNewTodo("");
  };

  const newItemSection = (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a New TODO Item</label>
      <div
        className="new-todo"
        style={{ display: "flex", flexDirection: "row", gap: "10px" }}
      >
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="ENTER NEW TODO LIST"
        />
        <button className="submit">
          <FontAwesomeIcon icon={faUpload} />
        </button>
      </div>
    </StyledForm>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>An error has occurred: "{error.message}"</p>;
  } else {
    content = todos.map((todo) => {
      return (
        <StyledAriticle key={todo.id}>
          <div
            className="todo"
            style={{ display: "flex", flexFlow: "row nowrap", gap: "10px" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodoMutation.mutate({
                  ...todo,
                  completed: !todo.completed,
                })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button
            className="trash"
            onClick={() => deleteTodoMutation.mutate({ id: todo.id })}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </StyledAriticle>
      );
    });
  }

  return (
    <div style={{ padding: "3em" }}>
      <h1>Todo LIST</h1>
      {newItemSection}
      {content}
    </div>
  );
};

const StyledAriticle = styled.article`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 30%;
  font-size: 1.2em;
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: 1em;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  border: 1px solid lightgray;
  border-radius: 15px;
  width: 30%;
  padding: 1em;
  margin-bottom: 20px;
`;
