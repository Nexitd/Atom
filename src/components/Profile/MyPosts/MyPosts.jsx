import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let postElements = props.postData.map((post) => <Post message={post.message} like={post.likesCount} />);


    return (
        <div className={styles.main__content_posts}>
            <h3 className={styles.content__posts_title}>My posts</h3>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}
                name=""
                id=""
                cols="30"
                rows="10"
                className={styles.posts__area}
            ></textarea>
            <button onClick={ addPost } className={`${styles.btn} ${styles.btn__send_post}`}>
                Send
            </button>

            { postElements }
        </div>
    );
};

export default MyPosts;
