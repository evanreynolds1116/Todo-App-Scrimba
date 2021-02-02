import React, {useState, useEffect} from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
      setTodos(todosData)
  }
  
  const handleChange = (id) => {

    const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo
    })
    setTodos(updatedTodos)
  }

  useEffect(() => {
      getTodos()
  }, [])

  return (
      <div className="todo-list">
        {todos.map((item) => (
            <TodoItem key={item.id} item={item} handleChange={handleChange} />
        ))}
      </div>
  )
}

export default App;
 