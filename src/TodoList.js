import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      const updatedTodos = [...todos];
      updatedTodos[currentTodoIndex] = inputValue;
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodoIndex(null);
    } else {
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleEdit(index) {
    setInputValue(todos[index]);
    setIsEditing(true);
    setCurrentTodoIndex(index);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleChange} />
        <button type='submit'>{isEditing ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;