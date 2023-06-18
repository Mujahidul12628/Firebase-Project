/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './About.css'

const About = () => {
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="about-container">
            <h2 className="about-title">About</h2>
            <p className="about-greeting">Welcome to the About page, <span className="about-name">{name}</span>!</p>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="about-input"
            />
        </div>
    );
};

export default About;
