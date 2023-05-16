import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
            <ul className="footer-list">
                <a href="https://www.google.com">About</a>
                <a href="https://www.google.com">Contact</a>
                <a href="https://www.google.com">Terms of Use</a>
                <a href="https://www.google.com">Privacy Policy</a>
            </ul>
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; 2023 My Website. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
