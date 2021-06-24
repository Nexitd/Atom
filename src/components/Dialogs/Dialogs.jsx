import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messagesData.map((message) => <Message message={message.message} />)

    let sendingMessage = React.createRef()

    const sendMessage = () => {
        let textMessage = sendingMessage.current.value
        alert(textMessage)
    }

    return (
        <div className={s.main__content}>
            <div className={s.dialogs}>
                <div className={s.dialogs_item}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
            <textarea ref={sendingMessage} cols="30" rows="10" placeholder="Введите сообщение"></textarea>
            <button onClick={ sendMessage }>Отправить</button>
        </div>
    );
};

export default Dialogs;
