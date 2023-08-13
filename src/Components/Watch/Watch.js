import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

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
        <div style={{border:'2px solid blue', margin:'5px'}}>
            <h1>My steps : {steps}</h1>
            <button onClick={increaseSteps}>Increase Step</button>
            <Display steps={steps}></Display>
        </div>
    );
};

export default Watch;