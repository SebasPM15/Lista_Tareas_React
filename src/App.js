import './App.css';
import React, {useState, useEffect} from 'react';
import TodoInput from './componentes/TodoInput';
import TodoList from './componentes/TodoList.js';

function App() {
  //Estado de las tareas
  const [tasks, setTasks] = useState([]);

  //Cargar las tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if(storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  //Guardar tareas en el localStorage cuando cambien
  useEffect(() => {
    if(tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  //Agregar tarea
  const addTask = (task) => {
    const newTask = {text: task, isEditing: false};
    setTasks([...tasks, newTask]);
  };

  //Eliminar Tarea
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  //Editar tarea
  const editTask = (index, newText) => {
    const updateTasks = [...tasks];
    updateTasks[index].text = newText;
    updateTasks[index].isEditing = false; //Terminar edición
    setTasks(updateTasks);
  };

  //Iniciar edición
  const startEditing = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = true;
    setTasks(updatedTasks);
  };

  return (
    <div className='App'>
      <h1>Lista de Tareas</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        removeTask={removeTask}
        editTask={editTask}
        startEditing={startEditing}
      />
    </div>
  );
}

export default App;
