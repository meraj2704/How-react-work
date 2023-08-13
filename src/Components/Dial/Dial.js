import React from 'react';

const Dial = props => {
    return (
        <div style={{border:'2px solid green', margin:'5px'}}>
            <h1>Dial Body</h1>
            <p>Dial count : {props.steps}</p>
        </div>
    );
};

export default Dial;