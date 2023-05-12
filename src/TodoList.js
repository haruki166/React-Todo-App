import TodoItem from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />;
      })}
    </>
  );
};

export default TodoList;
