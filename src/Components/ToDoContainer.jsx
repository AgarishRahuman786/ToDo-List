import React from "react";
import Todo from "./Todo";

function ToDoContainer({ todos, delTodos }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} delTodos={delTodos} />;
      })}
    </div>
  );
}

export default ToDoContainer;
