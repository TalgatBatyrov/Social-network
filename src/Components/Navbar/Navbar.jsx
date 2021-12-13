import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to={'/profile'} className={(e) => e.isActive ? s.active : s.item} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} className={(e) => e.isActive ? s.active : s.item} >Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} className={(e) => e.isActive ? s.active : s.item} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} className={(e) => e.isActive ? s.active : s.item}  >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/setting'} className={(e) => e.isActive ? s.active : s.item}  >Setting</NavLink>
            </div>
        </div>
    );
};

export default Navbar;