import React from "react";
import s from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";
import Home from "../../assets/image/Home.png";
import Agents from "../../assets/image/List of agents.png";
import Search from "../../assets/image/Search.png";
import Support from "../../assets/image/Technical support.png";
import Setting from "../../assets/image/Setting.png";
import Logout from "../../assets/image/Logout.png";

const SideMenu = (props) => {
    return (
        <div className={s.sideMenu_box}>
            <div>
                <div>
                    <NavLink to='/' className={s.sideMenu_box_element}>
                        <img src={Home} />
                    </NavLink>
                </div>
                <div>
                    <NavLink to='organizations' className={s.sideMenu_box_element}>
                        <img src={Agents} />
                    </NavLink>
                </div>
                <div>
                    <NavLink to='search' className={s.sideMenu_box_element}>
                        <img src={Search} />
                    </NavLink>
                </div>
            </div>
            <div>

            </div>
            <div>
                <div>
                    <NavLink to='setting' className={s.sideMenu_box_element}>
                        <img src={Setting} />
                    </NavLink>
                </div>
                <div>
                    <NavLink to='support' className={s.sideMenu_box_element}>
                        <img src={Support} />
                    </NavLink>
                </div>
                <div>
                    <div onClick={props.resetUserId} className={s.sideMenu_box_element}>
                        <img src={Logout} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;