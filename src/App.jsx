import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/Input Container";
import ToDoContainer from "./Components/ToDoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setToDos] = useState([]);
  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addTodo() {
    if (inputVal != " ") {
      setToDos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal(" ");
    }
  }
  function delTodos(todoIndex) {
    setToDos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }
  console.log(todos);
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <ToDoContainer todos={todos} delTodos={delTodos} />
    </main>
  );
}

export default App;
