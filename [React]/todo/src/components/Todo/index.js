import React from "react";
import styles from "./index.css";

const Todo = ({ id, title, desc, delTodo }) => {
  return (
    <div className="container">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <button onClick={() => delTodo(id)}> Delete</button>
    </div>
  );
};

export default Todo;
