import React from 'react';

const Workout = ({ workout }) => {
    return (
        <div className="alert alert-primary" role="alert">
            {workout}
        </div>
    );
};

export default Workout;
