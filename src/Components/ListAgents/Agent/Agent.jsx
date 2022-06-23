import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./Agent.module.css";
import { getAuthorized, getPageOrganization } from "../../../api/api";
import BackArrow from "../../../assets/image/Back arrow.png";
import DeletePage from "../../../assets/image/Delete page.png";
import Linked from "../../../assets/image/Linked.png";
import Update from "../../../assets/image/Update.png";

let login = () => { //отправка логина на сервер сразу через API
    getAuthorized('KirillB').then(response => {
        let a = response.data;
        debugger;
    });
}
let getParam = () => { //получение данных о странице с сервера сразу через API
    getPageOrganization(12).then(response => {
        debugger;
    });
}

const Agent = (props) => {
    let navigate = useNavigate();
    const dataContract = props.aboutAgent.contract.issue_date;
    debugger
    return (
        <div className={s.page_box}>
            <HeadPage navigate={navigate}/>
            <div>
                <div>
                    {props.aboutAgent.shortName}
                </div>
                <div>
                    ОБЩАЯ ИНФОРМАЦИЯ
                    <div>
                        <label>Полное название:</label>
                        <span>{props.aboutAgent.name}</span>
                    </div>
                    <div>
                        <label>Договор:</label>
                        <span>{`${props.aboutAgent.contract.no} от `}</span>
                    </div>
                    <div>
                        <label>Фирма:</label>
                        <span>{`${props.aboutAgent.businessEntity} от `}</span>
                    </div>
                    <div>
                        <label>Тип:</label>
                        <span>{`${props.aboutAgent.businessEntity} от `}</span>
                    </div>
                </div>
                <div>
                    КОНТАКТНЫЕ ДАННЫЕ
                </div>
            </div>
            {/* <div>
                <button onClick={login}>Login</button>
                <button onClick={getParam}>get page</button>
            </div> */}
        </div>
    );
}

const HeadPage = (props) => {
    return (
        <div className={s.page_box_head}>
            <div className={s.head_back}>
                <div onClick={() => { props.navigate(-1) }} className={s.back_arrow}>
                    <img src={BackArrow} />
                </div>
                <div className={s.back_text}>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</div>
            </div>
            <div className={s.head_action_menu}>
                <div>
                    <img src={Linked} />
                </div>
                <div>
                    <img src={Update} />
                </div>
                <div>
                    <img src={DeletePage} />
                </div>
            </div>
        </div>
    );
}

export default Agent;