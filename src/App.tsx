import React from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import {Profile} from './Profile';


function App() {
    return (
        <div>
            <div className="aap-wrapper">
                <Header/>
                <Nav/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
