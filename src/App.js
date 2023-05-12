import { useRef, useState } from "react";
import TodoList from "./TodoList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const todoRef = useRef();

  const addTodo = () => {
    const todoValue = todoRef.current.value;
    console.log(todoValue);
    if (todoValue === "") return;
    const newTodos = [
      ...todos,
      { id: uuidv4(), todo: todoValue, checked: false },
    ];
    setTodos(newTodos);
    todoRef.current.value = "";
  };

  const deleteTodo = () => {
    const newTodo = [...todos];
    setTodos(newTodo.filter((todo) => !todo.checked));
  };

  const toggleTodo = (id) => {
    const newTodo = [...todos];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.checked = !todo.checked;
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoRef} />
      <button onClick={addTodo}>追加</button>
      <button onClick={deleteTodo}>完了したタスクを削除</button>
      <div>完了したタスク数:{todos.filter((todo) => todo.checked).length}</div>
    </div>
  );
}

export default App;
