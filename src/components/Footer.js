import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <ul className="footer-list">
                    <button><a href="https://www.google.com">About</a></button>
                    <button><a href="https://www.google.com">FAQ</a></button>
                    <button><a href="https://www.google.com">Advertise</a></button>
                    <button><a href="https://www.google.com">Help</a></button>
                    <button><a href="https://www.google.com">Terms</a></button>
                    <button><a href="https://www.google.com">Privacy</a></button>
                    <button><a href="https://www.google.com">Contact</a></button>
                    <button><a href="https://www.google.com">Terms of Use</a></button>
                    <button><a href="https://www.google.com">Privacy Policy</a></button>
                </ul>
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; 2023 Trademark Global Search. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
