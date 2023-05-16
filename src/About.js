import './App.css';
import React from 'react';
import DropdownMenu from './components/dropdownMenu';
import { Route, Routes } from 'react-router-dom';


function About() {
    return (
        <>
            <DropdownMenu />
            <h1>This is the About page</h1>
        </>
    );
}

export default About;