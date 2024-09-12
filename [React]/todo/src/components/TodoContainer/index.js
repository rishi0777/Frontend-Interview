import React, { useCallback, useState } from "react";
import Todo from "../Todo";

import styles from "./index.css";

const TodoContainer = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, { id: todoId, title, desc: "" }]);
    setTodoId((val) => val + 1);
  }, [todoId, title]);

  const delTodo = (todoID) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== todoID);
      return newTodos;
    });
  };

  return (
    <div className="whole-container">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <div className="todos-container">
        {todos.length === 0 ? (
          <div className="todo">No Todo Found. Please add them</div>
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              delTodo={delTodo}
            />
          ))
        )}
      </div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default TodoContainer;
