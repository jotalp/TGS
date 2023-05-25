import React, { useState } from 'react';
import Modal from 'react-modal';

function SignUpModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
        // close modal when done
        setModalIsOpen(false);
    }

    return (
        <div>
            <button onClick={() => setModalIsOpen(true)} className='btn btn-outline-secondary'>Sign Up</button>            <Modal isOpen={modalIsOpen}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit" className='btn btn-outline-primary'>Submit</button>
                    <button className='btn btn btn-outline-danger' onClick={() => setModalIsOpen(false)}>Cancel</button>
                </form>
            </Modal>
        </div>
    );
}

export default SignUpModal;