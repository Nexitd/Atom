import React from 'react'
import s from './Friends.module.css'
import FriendItem from './FriendItem';


const Friends = (props) => {
    let friendData = props.state.map((el) => <FriendItem name={el.name}/>)
    return (
        <div className={s.friends}>
            { friendData }
        </div>
    )
}

export default Friends;