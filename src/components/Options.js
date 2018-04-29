import React from 'react';

const Options = (props) => (
    <div>
        {props.options.length === 0 && <p>Enter some options to get started</p>}
        {props.options.map((option) => <p key={option}>{option}</p>)}
    </div>
);
export default Options;