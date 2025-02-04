import React from "react";

function Todo({ todo, index, delTodos }) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => delTodos(index)}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}

export default Todo;
