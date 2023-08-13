import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:'2px solid red', margin:'5px'}}>
            <h1>Display Body</h1>
            <p>Display Count : {props.steps}</p>
            <Dial steps = {props.steps}></Dial>
        </div>
    );
};

export default Display;