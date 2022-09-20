import React from 'react';
import './Post.css';

type PostType = {
    message:string
    likeNumber:number
}

export const Post = (props:PostType) => {
    return (
            <div>
                <div className="post">
                    <div className="item">
                        <img src="https://twizz.ru/wp-content/uploads/-000/1/malevich_red_square-cat-sm.jpg" alt="Avatar"/>
                        {props.message}
                    </div>
                    <span>{props.likeNumber}Like</span>
                </div>
            </div>
    )
}