import React from "react";

const TodoItem = ({ todo, index, toggleDone, editItem, deleteItem }) => {
  return (
    <li>
      <div className="text-box">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleDone(index)}
        />
        <span
          className={todo.done ? "done" : ""}
          onClick={() => toggleDone(index)}
        >
          {todo.text}
        </span>
      </div>

      <div className="btn-box">
        <button className="edit-button" onClick={() => editItem(index)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => deleteItem(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
