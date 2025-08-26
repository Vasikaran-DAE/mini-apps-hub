import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      console.log("Task added:", tasks);
      setTask(""); // Clear input
    }
  };  

  // Delete a task by index
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    console.log("Task deleted:", index);
    setTasks(updatedTasks);
  };

  // Update a task by index
  const updateTask = (index, newTask) => {}

  return (
    <div  style={{ backgroundColor :"halfwhite", textAlign: "center" }}>
   <h2 style={{ margin: 0 }}>📝 To-Do List</h2>


      <input
        type="text" 
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
          key={index}
          style={{
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>{t}</span>
        
          <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
            <button onClick={() => deleteTask(index)} style={{ color: "red" }}>
              ❌
            </button>
            <button onClick={() => updateTask(index)} style={{ color: "darkorange" }}>
              Update
            </button>
          </div>
        </li>
        
        ))}
      </ul>
    </div>
  );
}

export default TodoList;