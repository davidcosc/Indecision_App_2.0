import React from 'react';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header title="IndecisionApp_2.0" subtitle="Put your life in the hands of a computer"/>
                <Action hasOption={false}/>
            </div>
        );
    }
}