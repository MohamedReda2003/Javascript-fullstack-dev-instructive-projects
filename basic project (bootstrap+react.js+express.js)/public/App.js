import React, { useState, useEffect } from 'react';
import Task from './Task';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const addTask = () => {
        fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: newTask }),
        })
        .then(response => response.json())
        .then(task => setTasks([...tasks, task]));

        setNewTask("");
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
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default App;
