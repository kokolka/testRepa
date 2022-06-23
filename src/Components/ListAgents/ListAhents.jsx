import React from "react";
import s from "./ListAhents.module.css";
import {Outlet} from "react-router-dom";
import { connect } from 'react-redux';

const ListAgents = (props) => {
    return (
        <div className={s.wrapper_box}>
            <div className={s.wrapper_box__organization}>
                Organization
            </div>
            <div className={s.wrapper_box__listAgents}>
                <div>
                    <Outlet {...props}/>
                </div>
            </div>
        </div>
    );
}


let mstp = (state) => ({
    aboutAgent: state.AboutAgent.pageInfo
})

export default connect(mstp)(ListAgents);