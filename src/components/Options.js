import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button disabled={!props.hasOption} onClick={props.clearOptions}>Clear options</button>
        {props.options.length === 0 && <p>Enter some options to get started</p>}
        {props.options.map((option) => <Option key={option} option={option}/>)}
    </div>
);
export default Options;