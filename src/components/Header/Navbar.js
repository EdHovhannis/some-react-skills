import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className={style.Navbar}>
            <NavLink  exact to="/" activeClassName={style.activeLink}> All </NavLink>
            <NavLink  to="/cardio" activeClassName={style.activeLink}> Cardio </NavLink>
            <NavLink  to="/strength" activeClassName={style.activeLink}> Strength </NavLink>
        </div>
    );
}

export default Navbar;
