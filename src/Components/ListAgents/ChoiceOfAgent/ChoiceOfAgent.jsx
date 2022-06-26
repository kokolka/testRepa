import React from "react";
import { NavLink } from "react-router-dom";

const ChoiceOfAgent = (props) => {

    let listLinkAgent = Object.keys(props.aboutAgent).map(el => {
        return <div key={el}>
            <NavLink to={el}>{`${props.aboutAgent[el].name}`}</NavLink>
        </div>
    })

    return (
        <div>
            <div>Список агентов</div>
            {listLinkAgent}
        </div>
    )
}

export default ChoiceOfAgent;