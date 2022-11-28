import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
function App() {
  const [todos, setTodos] = useState([])

  const addTask =() => {

  }

  const removeTask =() => {
    
  }

  const handleTask =() => {
    
  }



  return (
    <div className="App">
      <header>
        <h1>Cписок задач: {todos.length}</h1>
      </header>
      <ToDoForm />
      {todos.map(() => {
        return (
          <ToDo
          key={todos.id}
          />
        )
      })}
    </div>
  );
}

export default App;
