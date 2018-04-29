import React from 'react';

const Option = (props) => (
    <div>
        <p>{props.option}</p>
        <button onClick={(e) => {props.removeOption(props.option);}}>Remove</button>
    </div>
);
export default Option;