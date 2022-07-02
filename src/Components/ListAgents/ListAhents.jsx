import React from "react";
import s from "./ListAhents.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import IconOrg from "../../assets/image/Agent.png";

const ListAgents = (props) => {

    return (
        <div className={s.wrapper_box}>
            <div className={s.wrapper_box__organization}>
                <div className={s.org_box}>
                    <div className={s.org_main}>ЧЕСТНЫЙ АГЕНТ</div>
                    <div className={s.org_minor}>МЕНЕДЖЕР ПРОЦЕССА</div>
                </div>
                <NavLink to="agents" className={sa => {
                    if(sa.isActive){
                        return `${s.link_org} ${s.link_org__action}`
                    }else{
                        return `${s.link_org}`
                    }
                }}>
                    <div className={s.link_org__img}>
                        <img src={IconOrg} />
                    </div>
                    <div className={s.link_org__text}>
                        Организации
                    </div>
                </NavLink>
                {/* div для тени */}
                <div className={s.shadow_box}></div>
            </div>
            <div className={s.wrapper_box__listAgents}>
                <div className={s.wrapper_box__agent_element}>
                    <Outlet {...props} />
                </div>
            </div>
        </div>
    );
}


let mstp = (state) => ({
    aboutAgent: state.AboutAgent.pageInfo
})

export default connect(mstp)(ListAgents);