import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    //const newTodoList = [...todoList, newTask];
    //setTodoList(newTodoList); version 1
    //setTodoList([...todoList, newTask]); version 2
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>add task ✅</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
