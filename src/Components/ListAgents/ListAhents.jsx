import React, {useState} from "react";
import s from "./ListAhents.module.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import IconOrg from "../../assets/image/Agent.png";
import cn from "classnames";

const ListAgents = (props) => {
    let [moduleMode, setMobileMode] = useState(false);

    let location = useLocation();
    if(location.pathname === '/organizations'){
        if(moduleMode){
            setMobileMode(false);
        }
    }

    return (
        <div className={s.wrapper_box}>
            <div className={cn(s.wrapper_box__organization, {[s.mode_visible_off]: (moduleMode && (props.sizeApp < 700))})}>
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
                }}
                onClick={() => {
                    setMobileMode(true)
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
            <div className={cn(s.wrapper_box__listAgents, {[s.mode_visible_off]: (!moduleMode && (props.sizeApp < 700))})}>
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