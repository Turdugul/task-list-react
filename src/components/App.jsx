import React from "react";
import ToDoList from "./TodoList";


function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1> Today's Tasks </h1>
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
