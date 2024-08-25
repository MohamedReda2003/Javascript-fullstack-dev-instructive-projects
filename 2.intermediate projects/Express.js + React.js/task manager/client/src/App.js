import React, { useState, useEffect } from 'react';
import Task from './Task';

const App = () => {
    const [tasks, setTasks] = useState([]);  // State to store all tasks
    const [newTask, setNewTask] = useState("");  // State for the new task input

    // Fetch tasks from the server when the component mounts
    useEffect(() => {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))  // Set the fetched tasks to the state
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    // Function to add a new task
    const addTask = () => {
        // Prevent adding an empty task
        if (!newTask.trim()) return;

        // Create a new task object
        const newTaskObj = { text: newTask }; 

        // Add the new task to the local state list
        setTasks([...tasks, newTaskObj]);

        // Clear the input field
        setNewTask("");

        // Send the new task to the server
        fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTaskObj),
        })
        .then(response => response.json())
        .then(task => {
            // Update the list with the task returned from the server
            setTasks(prevTasks => [...prevTasks, task]);
        })
        .catch(error => console.error('Error adding task:', error));
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <input 
                type="text" 
                className="form-control" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="New Task" 
            />
            <button className="btn btn-primary mt-2" onClick={addTask}>Add Task</button>
            <div className="task-list mt-4">
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>
        </div>
    );
};

export default App;
