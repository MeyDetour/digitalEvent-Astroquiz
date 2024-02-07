import React from 'react';
import './App.css';
import GameDisplay from './component/GameDisplay';
import ReggieDisplay from './component/ReggieDisplay';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className='content'>

                <div className="main-route-place">
                    <Routes>
                        <Route path="/" element={<div>Home Page</div>} />
                        <Route path="/reggie" element={<ReggieDisplay />} />
                        <Route path="/game" element={<GameDisplay />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
