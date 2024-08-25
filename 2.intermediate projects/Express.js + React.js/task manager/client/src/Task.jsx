import React from 'react';

const Task = ({ task }) => {
    return (
        <div className="task card">
            <div className="card-body">
                <h5 className="card-title">{task.text}</h5>
            </div>
        </div>
    );
};

export default Task;
