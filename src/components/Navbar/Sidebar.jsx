import React from "react";
import nav from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
import Friends from "../Friends/Friends";

const Nav = (props) => {
    return (
        <nav className={nav.nav}>
            <ul className={nav.nav__list}>
                <li className={nav.nav__item}>
                    <NavLink to="/profile" activeClassName={nav.active} className={nav.nav__link}>
                        Profile
                    </NavLink>
                </li>
                <li className={nav.nav__item}>
                    <NavLink to="/dialogs" activeClassName={nav.active} className={nav.nav__link}>
                        Messages
                    </NavLink>
                </li>
                <li className={nav.nav__item}>
                    <NavLink to="/news" activeClassName={nav.active} className={nav.nav__link}>
                        News
                    </NavLink>
                </li>
                <li className={nav.nav__item}>
                    <NavLink to="/music" activeClassName={nav.active} className={nav.nav__link}>
                        Music
                    </NavLink>
                </li>
                <li className={nav.nav__item + " " + nav.nav__settings}>
                    <NavLink to="/settings" activeClassName={nav.active} className={nav.nav__link}>
                        Settings
                    </NavLink>
                </li>
                <li className={nav.nav__item}>
                    <NavLink to="/friends" activeClassName={nav.active} className={nav.nav__link}>
                        Friends
                    </NavLink>
                    <div>
                        <Friends state={props.state.friendsInfo}/>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;