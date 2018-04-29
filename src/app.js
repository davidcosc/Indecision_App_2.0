import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import IndecisionApp from './components/IdecisionApp';

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>, appRoot);