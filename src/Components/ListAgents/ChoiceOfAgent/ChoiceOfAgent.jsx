import React from "react";
import { NavLink } from "react-router-dom";

const ChoiceOfAgent = (props) => {

    let listLinkAgent = Object.keys(props.aboutAgent).map(el => {
        return <div key={el}>
            <NavLink to={el}>org {el}</NavLink>
        </div>
    })

    return (
        <div>
            <div>List agents</div>
            {listLinkAgent}
        </div>
    )
}

export default ChoiceOfAgent;