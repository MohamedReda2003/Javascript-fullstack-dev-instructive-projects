import React, { useState, useEffect } from 'react';
import Workout from './Workout.js';

const App = () => {
    const [workouts, setWorkouts] = useState([]);
    const [workout, setWorkout] = useState("");

    useEffect(() => {
        fetch('/api/workouts')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    const addWorkout = () => {
        if (workout) {
            fetch('/api/workouts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ workout: workout }),
            })
            .then(response => response.json())
            .then(() => {
                setWorkouts([...workouts, workout]);
                setWorkout("");
            });
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={workout} 
                onChange={(e) => setWorkout(e.target.value)} 
                placeholder="Enter your workout" 
            />
            <button onClick={addWorkout}>Add Workout</button>
            <div>
                {workouts.map((workout, index) => (
                    <Workout key={index} workout={workout} />
                ))}
            </div>
        </div>
    );
};

export default App;
