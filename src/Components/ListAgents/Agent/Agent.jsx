import React, { useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import s from "./Agent.module.css";
import { getAuthorized, getPageOrganization } from "../../../api/api";
import BackArrow from "../../../assets/image/Back arrow.png";
import DeletePage from "../../../assets/image/Delete page.png";
import Linked from "../../../assets/image/Linked.png";
import Update from "../../../assets/image/Update.png";
import ChangeElement from "../../../assets/image/Change.png";
import FormGeneralInfo from "./FormGeneralInfo/FormGeneralInfo";
import FormContactDate from "./FormContactDate/FormContactDate";
import FormName from "./FormName/FormName";

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

const dictionary = (word) => { //перевод типа компании на русский
    switch (word) {
        case "agent":
            return ("Агент");
        case "contractor":
            return ("Подрядчик");
        default:
            return ("");
    }
}

const numberChange = (number) => { //преобразование телефонного номера
    let result = '';
    if (number[0] == 7) {
        result = `+${number[0]}`;
    }
    result = `${result} (${number.substr(1, 3)}) ${number.substr(4, 3)}-${number.substr(7, 2)}-${number.substr(9, 2)}`;

    return result;
}

const Agent = (props) => {
    let [flagChangeName, setFlagChangeName] = useState(false); //флаг отвечающий за отображение формы изменения имени фирмы
    let [flagChangeGeneralInfo, setFlagChangeGeneralInfo] = useState(false); //флаг отвечающий за отображение формы общей информаци
    let [flagChangeContactDate, setFlagChangeContactDate] = useState(false); //флаг отвечающий за отображение формы контактных данных
    let [back, toggleBack] = useState(false); //флаг отвечающий за отображение формы контактных данных

    let idAgentWithURL = useParams(); //получение id от url
    let idAgent = idAgentWithURL.id; //нужно для отображения необходимого набора данных
    let userId = props.aboutAgent[idAgent].contactId; //id пользователя для контактов

    let contactID = props.aboutAgent[idAgent].contactId; //id контакта, нужно для отображения контактной информации

    //**нужно переделать на редирект, так как есть нуанс работы */
    let navigate = useNavigate(); //для возвращения на прошлую страницу

    const dataContract = props.aboutAgent[idAgent].contract.issue_date;

    //Создание массива с типом организации
    let arrowTypeAgent = props.aboutAgent[idAgent].type.map(el => {
        return (
            <span key={el}>
                {`${el === props.aboutAgent[idAgent].type[0] ? '' : ','} ${dictionary(el)}`}
            </span>
        );
    });

    let splitString = (str) => { //получение название картинки из пути
        let result;
        result = str.split('/');
        result = result[result.length - 1];
        result = result.split('.');
        result = `${result[0]}.${result[result.length - 1]}`;
        return result;
    }

    let changeDataStile = (date) => { //преобразование даты к типу: "24 июня 2022"
        let year = date.substr(0, 4);
        let month = date.substr(5, 2);
        let day = date.substr(8, 2);

        switch (month) {
            case '01': month = "января"; break;
            case '02': month = "февраля"; break;
            case '03': month = "марта"; break;
            case '04': month = "апреля"; break;
            case '05': month = "мая"; break;
            case '06': month = "июня"; break;
            case '07': month = "июля"; break;
            case '08': month = "августа"; break;
            case '09': month = "сентября"; break;
            case '10': month = "октября"; break;
            case '11': month = "ноября"; break;
            case '12': month = "декабря"; break;
        }

        return `${day} ${month} ${year}`;
    }

    //создание массива изображениями + имя изображения + дата загрузки
    let arrowImg = props.fotoForPage[idAgent].map(el => {
        return (
            <div key={el.id}>
                <img src={el.img} />
                <div>
                    {splitString(el.img)}
                </div>
                <div>
                    {changeDataStile(el.date)}
                </div>
                <div onClick={() => {
                    debugger
                    props.deleteImgFromPage(idAgent, el.id);
                }}>
                    del
                </div>
            </div>
        )
    })

    return (
        <div className={s.page_box}>
            <HeadPage navigate={navigate} toggleBack={toggleBack} />
            <div>
                <a href='http://localhost:3000/organizations/'>VVV </a>
            </div>
            <div>
                <div>
                    {flagChangeName == true
                        ? <div>
                            <FormName
                                idAgent={idAgent} changeFlag={setFlagChangeName} setName={props.setName}
                                name={props.aboutAgent[idAgent].shortName} />
                        </div>
                        : <div>{props.aboutAgent[idAgent].shortName}
                            <span onClick={() => {
                                setFlagChangeName(true)
                            }}>
                                <img src={ChangeElement} alt="изм." />
                            </span>
                        </div>}
                </div>
                {flagChangeGeneralInfo == true
                    ? <div>
                        <FormGeneralInfo
                            idAgent={idAgent} setGeneralInfo={props.setGeneralInfo} changeFlag={setFlagChangeGeneralInfo}
                            shortName={props.aboutAgent[idAgent].shortName} businessEntity={props.aboutAgent[idAgent].businessEntity}
                            contractNo={props.aboutAgent[idAgent].contract.no}
                            date={`${dataContract.substr(0, 4)}-${dataContract.substr(5, 2)}-${dataContract.substr(8, 2)}`}
                            type={props.aboutAgent[idAgent].type}
                        />
                    </div>
                    : <div>
                        ОБЩАЯ ИНФОРМАЦИЯ
                        <span onClick={() => { setFlagChangeGeneralInfo(true) }}>
                            <img src={ChangeElement} alt="изм." />
                        </span>
                        <div>
                            <label>Полное название:</label>
                            <span>{`${props.aboutAgent[idAgent].businessEntity} Фирма "${props.aboutAgent[idAgent].shortName}"`}</span>
                        </div>
                        <div>
                            <label>Договор:</label>
                            <span>{`${props.aboutAgent[idAgent].contract.no} от ${dataContract.substr(0, 4)}.${dataContract.substr(5, 2)}.${dataContract.substr(8, 2)}`}</span>
                        </div>
                        <div>
                            <label>Фирма:</label>
                            <span>{`${props.aboutAgent[idAgent].businessEntity}`}</span>
                        </div>
                        <div>
                            <label>Тип:</label>
                            <span>{arrowTypeAgent}</span>
                        </div>
                    </div>}
                {flagChangeContactDate == true
                    ? <div>
                        <FormContactDate
                            setContactDate={props.setContactDate} changeFlag={setFlagChangeContactDate}
                            lastname={props.contacts[userId].lastname} firstname={props.contacts[userId].firstname}
                            patronymic={props.contacts[userId].patronymic} phone={props.contacts[userId].phone}
                            email={props.contacts[userId].email} userId={userId}
                        />
                    </div>
                    : <div>
                        КОНТАКТНЫЕ ДАННЫЕ
                        <span onClick={() => { setFlagChangeContactDate(true) }}>
                            <img src={ChangeElement} alt="изм." />
                        </span>
                        <div>
                            <label>ФИО:</label>
                            <span>{`${props.contacts[contactID].lastname} ${props.contacts[contactID].firstname} ${props.contacts[contactID].patronymic}`}</span>
                        </div>
                        <div>
                            <label>Телефон:</label>
                            <span>{numberChange(props.contacts[contactID].phone)}</span>
                        </div>
                        <div>
                            <label>Эл. почта:</label>
                            <span>{props.contacts[contactID].email}</span>
                        </div>
                    </div>}
                <div>
                    ПРИЛОЖИТЬ ФОТО
                    <div className={s.photo_box}>
                        {arrowImg}
                    </div>
                </div>
            </div>
        </div>
    );
}



const HeadPage = (props) => {
    return (
        <div className={s.page_box_head}>
            <div className={s.head_back}>
                <div className={s.back_arrow}>
                    <NavLink to='../'>
                        <img src={BackArrow} />
                    </NavLink>
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