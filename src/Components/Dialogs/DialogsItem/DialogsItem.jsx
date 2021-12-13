import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={e => e.isActive ? s.active : s.dialog}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogsItem;