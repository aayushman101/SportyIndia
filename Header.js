import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1 className="logo">SportyIndia</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sports">Sports</a></li>
                        <li><a href="#athletes">Athletes</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
