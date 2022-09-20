import React from 'react';
import './Profile.css';

export const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://rosegardening.org/wp-content/uploads/2018/12/2-80.jpg" alt=""/>
            </div>
            <div>
                <img src="https://twizz.ru/wp-content/uploads/-000/1/malevich_red_square-cat-sm.jpg"
                     alt="Avatar"/>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className="post">
                    <div className="item">
                        post 1
                    </div>
                    <div className="item">
                        post 1
                    </div>
                </div>

            </div>
        </div>
    )
}