import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button >Add post</button>
            </div>
            <Post post='Hello my friend!' likesCount='5' />
            <Post post='I like learning' likesCount='50' />
            <Post post='I need a job' likesCount='25' />
            <Post post='I go to frontend!' likesCount='52' />
        </div >
    );
};

export default MyPosts;