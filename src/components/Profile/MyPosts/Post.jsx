import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    
    return (
        <div className={s.post}>
            <div className={s.post__avatar}></div>
            <div className={s.post__body}>
                <p className={s.post__text}>{props.message}</p>
                <div>
                    <button className={s.post__like}>Like</button>
                    <span className={s.likes}>{props.like}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
