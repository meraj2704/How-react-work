import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = ()=>{
        const newStep = steps + 1;
        setSteps(newStep);
    }
    useEffect(()=>{
        console.log(steps)
    },[steps]);
    return (
        <div>
            <h1>My steps : {steps}</h1>
            <button onClick={increaseSteps}>Increase Step</button>
        </div>
    );
};

export default Watch;