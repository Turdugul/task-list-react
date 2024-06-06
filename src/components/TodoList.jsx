import React, { useState } from "react";
import TodoItem from "./TodoItem";

function ToDoList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [error, setError] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    event.preventDefault();

    if (inputText.trim() === "") {
      setError("To-do item cannot be empty.");
      return;
    }

    if (inputText.length > 100) {
      setError("To-do item cannot exceed 100 characters.");
      return;
    }

    if (isEditing) {
      setItems((prevItems) =>
        prevItems.map((item, index) =>
          index === currentItem ? { ...item, text: inputText } : item
        )
      );
      setIsEditing(false);
      setCurrentItem(null);
    } else {
      setItems((prevItems) => [...prevItems, { text: inputText, done: false }]);
    }
    setInputText("");
    setError("");
  }

  function toggleDone(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  function editItem(index) {
    setInputText(items[index].text);
    setIsEditing(true);
    setCurrentItem(index);
  }

  function deleteItem(index) {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
  }

  function countItems() {
    const totalItems = items.length;
    const doneItems = items.filter((item) => item.done).length;
    return `${doneItems} done / ${totalItems}`;
  }

  return (
    <div>
      <form className="form" onSubmit={addItem}>
        <input onChange={handleChange} placeholder="Add new task" type="text" value={inputText} />
        <button type="submit" className="add-button">
          <span>{isEditing ? "Update" : "Add"}</span>
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>{countItems()}</p>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              todo={todoItem}
              index={index}
              toggleDone={toggleDone}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
