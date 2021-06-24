import React from 'react'
import s from './Friends.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.friends__item}>
                <div className={s.avatar}></div>
                <p className={s.friends__name}>
                    {props.name}
                </p>
        </div>
    )
}

export default FriendItem;