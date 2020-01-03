import React from 'react';
//Component Imports
import Routes from './components/utils/Routes';
import Timer from './components/Timer/Timer';
//Styling
import './App.css';

function App() {
    return (
        <div className='App'>
            <Routes />
            <Timer/>
        </div>
    );
}

export default App;
