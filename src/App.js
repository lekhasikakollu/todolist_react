import './App.css';
import { useState } from 'react'

function App() {
  const [newTask, setNewTask] = useState("");
  const [newList, setNewList] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [updatedTask, setUpdatedTask] = useState("");

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
      (task) => { return task.id !== id }
    );
    setNewList(updatedList)
  }
  function editTask(id, newTask) {

    newList.map((item) => {
      return item.id === id ? (item.list = newTask) : null;
    })
    setNewList(newList);
    setUpdatedTask("");
    setEditId(-1);
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
            <div>
              <li key={item.id}>{item.list} <button onClick={() => deleteTask(item.id)}>❌</button> <button onClick={() => setEditId(item.id)}>✎</button></li>
              {editId === item.id && (
                <div key={item.id}>
                  <input type="text" value={updatedTask} onChange={e => setUpdatedTask(e.target.value)} />
                  <button onClick={() => editTask(item.id, updatedTask)}>Update</button>
                </div>
              )}
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
