import React from 'react';
import './MyPosts.css';
import {Post} from './Post/Post';


export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <Post message='Hi, how are you?' likeCount={5}/>
                <Post message ="It's my first post" likeCount={9}/>
            </div>
        </div>
    )
}