import React from 'react';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: ['1', '2'],
        selectedOption: undefined,
    };
    pickOption = () => {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[optionIndex];
        this.setState(() => ({selectedOption: option,}));
    };
    clearSelectedOption = () => {this.setState(() => ({selectedOption: undefined,}))};
    render() {
        return (
            <div>
                <Header title="IndecisionApp_2.0" subtitle="Put your life in the hands of a computer"/>
                <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption}/>
                <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
            </div>
        );
    }
}