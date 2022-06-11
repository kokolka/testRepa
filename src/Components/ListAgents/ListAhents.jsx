import React from "react";
import s from "./ListAhents.module.css";
import {
    Outlet,
    NavLink
} from "react-router-dom";

const ListAgents = () => {
    return (
        <div className={s.wrapper_box}>
            <div className={s.wrapper_box__organization}>
                Organization
            </div>
            <div className={s.wrapper_box__listAgents}>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default ListAgents;