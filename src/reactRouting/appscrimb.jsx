import React, { useState, useEffect } from 'react';
import Main from './components/main';
import Navbar from "./components/navBar"
import './style.css'
export default function AppScrimb() {
    console.log('AppScrimb');
    const [darkMode,setDarkMode]=useState(false)
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={setDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}