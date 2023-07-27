import './App.css';
import { useState } from 'react'

function App() {
  const [newTask, setNewTask] = useState("");
  const [newList, setNewList] = useState([]);

  function addTask() {
    if (!newList) {
      alert('Enter a task');
      return
    }
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      list: newTask
    }
    setNewList(newList => [...newList, newItem])
    setNewTask("");
  }

  function deleteTask(id) {
    const updatedList = newList.filter(
      (task) => { return task.id != id }
    );
    setNewList(updatedList)

  }
  return (
    <div className="App">
      <h2>To Do App</h2>
      <input type="textbox" placeholder="Add a task" value={newTask}
        onChange={(e) => setNewTask(e.target.value)} />
      <button className="add-button" onClick={() => addTask()}>Add</button>
      <ul className="taskList">
        {newList.map((item) => {
          return (
            <li key={item.id}>{item.list} <button onClick={() => deleteTask(item.id)}>X</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
