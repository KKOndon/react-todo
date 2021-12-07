import React, { useState } from "react";
import "./styles.css";

import { InputTodo } from "./components/InputTodo.jsx";
import { InCompleteTodo } from "./components/InCompleteTodo.jsx";
import { CompleteTodo } from "./components/CompleteTodo.jsx";

export const App = () => {
  const [todoText, SetTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, SetcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => SetTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    SetTodoText("");
  };

  const onClickDel = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickFin = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    SetcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickBak = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    SetcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録は5個までやで</p>
      )}
      <InCompleteTodo
        incompleteTodos={incompleteTodos}
        onClickFin={onClickFin}
        onClickDel={onClickDel}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBak={onClickBak} />
    </>
  );
};
