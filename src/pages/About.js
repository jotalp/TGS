import './App.css';
import React from 'react';
import './App.css';
import DropdownMenu from '../components/dropdownMenu';
import { Route, Routes } from 'react-router-dom';

function About() {
    return (
        <Routes>
        <Route path="/About" element={<About />} />
        <><DropdownMenu />
        <h1>
            This is the About page
        </h1></>
        </Routes>
    );
}

export default About;