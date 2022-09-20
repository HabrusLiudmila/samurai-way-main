import React from 'react';
import './App.css';
import Nav from './Navbar/Nav';
import Header from './Header/Header';
import {Profile} from './Profile/Profile';


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
