import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function LoginModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Make API call to authenticate user with email and password
        // If successful, close the modal and redirect to user's dashboard
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </Modal>
    );
}

export default LoginModal;
