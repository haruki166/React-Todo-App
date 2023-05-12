const TodoItem = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={handleTodoClick}
        />
        {todo.todo}
      </label>
    </div>
  );
};

export default TodoItem;
