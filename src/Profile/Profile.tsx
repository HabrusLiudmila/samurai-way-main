import React from 'react';
import './Profile.css';
import {MyPosts} from './MyPosts/MyPosts';


export const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://rosegardening.org/wp-content/uploads/2018/12/2-80.jpg" alt=""/>
            </div>
            <div>
                avaar+
            </div>
            <MyPosts/>
        </div>
    )
}