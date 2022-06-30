import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
 

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + Date.now(),
        title: text,
        status: false
      }
    ]);
  };
  const handleToggle = (id) => {
    const updatedData = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item.status
        };
      } else {
        return item;
      }
    });
    setTodos(updatedData);
  };
  const handleDelete = (id) => {
    const updatedData = todos.filter((item) => item.id !== id);
    setTodos(updatedData);
  };
  return (
    <div>
      <AddTodo handleAdd={handleAdd}/>
      <div>
        <TodoList
          data={todos.filter((item) => !item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
      <div>
          <h2>COMPLETED TODOS</h2>
          <TodoList
          data={todos.filter((item) => item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
export default Todo;
