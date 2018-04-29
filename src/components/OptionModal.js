import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOption} contentLabel="OptionModal" onRequestClose={props.clearSelectedOption} ariaHideApp={false}>
        <h2>Go with option {props.selectedOption}</h2>
        <button onClick={props.clearSelectedOption}>Close</button>
    </Modal>
);
export default OptionModal;