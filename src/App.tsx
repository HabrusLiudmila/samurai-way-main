import React from 'react';
import './App.css';
import Nav from './Navbar/Nav';
import Header from './Header/Header';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';


function App() {
    return (
        <div>
            <div className="aap-wrapper aap-wrapper-content">
                <Header/>
                <Nav/>
                {/*<Profile/>*/}
                <Dialogs/>


            </div>
        </div>
    );
}

export default App;
