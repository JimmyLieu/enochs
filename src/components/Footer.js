import React from 'react';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {2025} Jimmy Lieu. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer; 