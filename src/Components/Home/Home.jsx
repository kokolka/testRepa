import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import s from "./Home.module.css";
import ArrayImgAgent from "../common/ArrayImgAgent/ArrayImgAgent";
import ContactDateWithChange from "../common/ContactDateWithChange/ContactDateWithChange";
import GeneralInfoWithForm from "../common/GeneralInfoWithForm/GeneralInfoWithForm";
import AddElement from "../../assets/image/Regular add.png";

const Home = (props) => {
    let [flagChangeContactDate, setFlagChangeContactDate] = useState(false); //флаг отвечающий за отображение формы контактных данных
    let [flagChangeGeneralInfo, setFlagChangeGeneralInfo] = useState(false); //флаг отвечающий за отображение формы общей информаци

    if (!props.UserId) {//редирект на страницу логина, если пользователь не авторизован
        return <Navigate to="../login" />;
    }

    let idPagesAgents = [];

    for (let key in props.AboutAgent.pageData) { //получаю id страниц агентов с тем же контактным id
        if (props.AboutAgent.pageData[key].contactId == props.UserId) {
            idPagesAgents.push(props.AboutAgent.pageData[key].id)
        }
    }

    let lastIdPage; //переменная для хранения id последней страницы
    let arrayPage = Object.keys(props.AboutAgent.pageData);
    lastIdPage = arrayPage[arrayPage.length - 1];

    let allPagesAgent = idPagesAgents.map(el => {
        return (
            <div key={el} className={s.page_agent}>
                <div className={s.page_agent__name}>
                    <NavLink to={`../organizations/agents/${el}`} >
                        {`${props.AboutAgent.pageData[el].name}`}
                    </NavLink>
                </div>
                <div>
                    <GeneralInfoWithForm
                        idAgent={el} setGeneralInfo={props.setGeneralInfo} setFlagChangeGeneralInfo={setFlagChangeGeneralInfo}
                        aboutAgent={props.AboutAgent.pageData} UserId={props.UserId} contactID={props.UserId}
                        flagChangeGeneralInfo={flagChangeGeneralInfo} />
                </div>
                <div>
                    <ArrayImgAgent
                        fotoForPage={props.AboutAgent.photoById} idAgent={el} contactID={props.UserId}
                        UserId={props.UserId} deleteImgFromPage={props.deleteImgFromPage} />
                </div>
            </div>
        );
    })

    return (
        <div className={s.main_box}>
            <div className={s.main_box__yourID}>
                {`Ваш контактный ID: ${props.UserId}`}
            </div>
            <div className={s.main_box__contact_date}>
                <ContactDateWithChange
                    contacts={props.contacts} setContactDate={props.setContactDate}
                    setFlagChangeContactDate={setFlagChangeContactDate} contactID={props.UserId}
                    flagChangeContactDate={flagChangeContactDate} loginId={props.UserId} />
            </div>
            <div className={s.main_box__add_page}>
                <span className={s.add_page__img}><img src={AddElement}/></span>
                <NavLink to='create_page'>ДОБАВИТЬ СТРАНИЦУ АГЕНТА</NavLink>
            </div>
            <div className={s.main_box__array_page}>
                {allPagesAgent}
            </div>
        </div>
    );
}

export default Home;