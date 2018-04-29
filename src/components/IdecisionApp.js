import React from 'react';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    state = {
        options: ['1', '2'],
    };
    pickOption = () => {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[optionIndex];
        alert(option);
    };
    render() {
        return (
            <div>
                <Header title="IndecisionApp_2.0" subtitle="Put your life in the hands of a computer"/>
                <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption}/>
            </div>
        );
    }
}