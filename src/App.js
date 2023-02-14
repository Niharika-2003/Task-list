import React, { useState } from "react";
import './App.css';


function TodoApp() {
  const [todos, setTodos] = useState([
    { text: "Make my to-do list", completed: false }
  ]);

  function addTodo(text) {
    setTodos([...todos, { text, completed: false }]);
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  }

  function deleteAll() {
    setTodos([]);
  }

  return (
    <div className="app">
      <Title />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        <button className="delete-all-button" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}

function Title() {
  return <h1 className="title">MyTaskList</h1>;
}

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoApp;
