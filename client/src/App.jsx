import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setTodos(response.data); // Axios automatically parses JSON response, so you can directly access response.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>Task:</strong> {todo.task}, <strong>Status:</strong> {todo.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
