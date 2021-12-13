import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import s from './Dialogs.module.css'

const Dialogs = (props) => {

    const dialogsElements = props.store.messagesPage.dialogs.map(e => <DialogsItem name={e.name} id={e.id} />);
    const messagesElements = props.store.messagesPage.messages.map(e => <Message message={e.message} />);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;