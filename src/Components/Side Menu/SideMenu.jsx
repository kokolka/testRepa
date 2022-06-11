import React from "react";
import s from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
    return (
        <div className={s.sideMenu_box}>
            <div>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div>
                <NavLink to='organizations'>org</NavLink>
            </div>
            <div>
                <NavLink to='find'>find</NavLink>
            </div>
            <div>
                <NavLink to='setting'>setting</NavLink>
            </div>
            <div>
                <NavLink to='support'>support</NavLink>
            </div>
            <div>
                <NavLink to='logout'>logout</NavLink>
            </div>
        </div>
    );
}

export default SideMenu;