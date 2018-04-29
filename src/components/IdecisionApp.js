import React from 'react';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
    };
    pickOption = () => {
        const optionIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[optionIndex];
        this.setState(() => ({selectedOption: option,}));
    };
    clearSelectedOption = () => {this.setState(() => ({selectedOption: undefined,}));};
    clearOptions = () => {this.setState(() => ({options: [],}));};
    removeOption = (optionToRemove) => {this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove),}));};
    addOption = (option) => {
        if(!option) {
            return 'Error: No option entered';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Error: Duplicate option'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option),}));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options.length === 0) {
                return;
            }
            this.setState(() => ({options: options,}));
        } catch(e) {
            //DO NOTHING
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length === this.state.options.length) {
            return;
        }
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
    render() {
        return (
            <div>
                <Header title="IndecisionApp_2.0" subtitle="Put your life in the hands of a computer"/>
                <Action hasOption={this.state.options.length > 0} pickOption={this.pickOption}/>
                <Options hasOption={this.state.options.length > 0} options={this.state.options} clearOptions={this.clearOptions} removeOption={this.removeOption}/>
                <AddOption addOption={this.addOption}/>
                <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
            </div>
        );
    }
}