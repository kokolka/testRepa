import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ChoiceOfAgent.module.css";

const ChoiceOfAgent = (props) => {

    let listLinkAgent = Object.keys(props.aboutAgent).map(el => {
        const dictionary = (word) => { //перевод типа компании на русский
            switch (word) {
                case "agent":
                    return ("Агент");
                case "contractor":
                    return ("Подрядчик");
                default: return ("");
            }
        }
    
        //Создание массива с типом организации
        let arrowTypeAgent = props.aboutAgent[el].type.map(e => {
            return (
                <span key={e}>
                    {`${e === props.aboutAgent[el].type[0] ? '' : ','} ${dictionary(e)}`}
                </span>
            );
        });
        return <div key={el} className={s.main_box__element}>
            <NavLink to={el}>{`${props.aboutAgent[el].name}`}</NavLink>
            <div>{arrowTypeAgent}</div>
        </div>
    })

    return (
        <div className={s.main_box}>
            <div className={s.main_box__name}>Список агентов</div>
            {listLinkAgent}
        </div>
    )
}

export default ChoiceOfAgent;