import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import s from "./Agent.module.css";
import { getAuthorized, getPageOrganization } from "../../../api/api";
import BackArrow from "../../../assets/image/Back arrow.png";
import DeletePage from "../../../assets/image/Delete page.png";
import Linked from "../../../assets/image/Linked.png";
import Update from "../../../assets/image/Update.png";
import RegularButton from "../../../assets/image/Regular add.png";
import ChangeElement from "../../../assets/image/Change.png";
import DeletePhoto from "../../../assets/image/Dalete photo.png";
import FormName from "./FormName/FormName";
import FormPhoto from "./FormPhoto/FormPhoto";
import cn from "classnames";
import ContactDateWithChange from "../../common/ContactDateWithChange/ContactDateWithChange";
import GeneralInfoWithForm from "../../common/GeneralInfoWithForm/GeneralInfoWithForm";

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
    let [flagChangeName, setFlagChangeName] = useState(false); //флаг отвечающий за отображение формы изменения имени фирмы
    let [flagChangeGeneralInfo, setFlagChangeGeneralInfo] = useState(false); //флаг отвечающий за отображение формы общей информаци
    let [flagChangeContactDate, setFlagChangeContactDate] = useState(false); //флаг отвечающий за отображение формы контактных данных
    let [flagChangePhoto, setFlagChangePhoto] = useState(false); //флаг отвечающий за отображение формы загрузки фото
    let [flagDeletePage, setFlagDeletePage] = useState(false); //флаг отвечающий за отображение окна удаления карточки организации

    let idAgentWithURL = useParams(); //получение id от url
    let idAgent = idAgentWithURL.id; //нужно для отображения необходимого набора данных

    let contactID = props.aboutAgent[idAgent].contactId; //id контакта, нужно для отображения контактной информации

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
                {/* удаление изображения */}
                {contactID == props.UserId
                    ? <div onClick={() => { props.deleteImgFromPage(idAgent, el.id) }}>
                        <img src={DeletePhoto} alt="del" />
                    </div>
                    : null}
            </div>
        )
    })

    return (
        <div className={s.page_box}>
            <HeadPage actionDelete={setFlagDeletePage} contactID={contactID} UserId={props.UserId} />
            <div>
                <div>
                    {flagChangeName == true
                        ? <div>
                            <FormName
                                idAgent={idAgent} changeFlag={setFlagChangeName} setName={props.setName}
                                name={props.aboutAgent[idAgent].shortName} />
                        </div>
                        : <div>{props.aboutAgent[idAgent].shortName}
                            {contactID == props.UserId
                                ? <span onClick={() => {
                                    setFlagChangeName(true)
                                }}>
                                    <img src={ChangeElement} alt="изм." />
                                </span>
                                : null}
                        </div>}
                </div>
                <GeneralInfoWithForm
                    idAgent={idAgent} setGeneralInfo={props.setGeneralInfo} setFlagChangeGeneralInfo={setFlagChangeGeneralInfo}
                    aboutAgent={props.aboutAgent} UserId={props.UserId} contactID={contactID}
                    flagChangeGeneralInfo={flagChangeGeneralInfo}
                />
                <ContactDateWithChange
                    contacts={props.contacts} setContactDate={props.setContactDate}
                    setFlagChangeContactDate={setFlagChangeContactDate} contactID={contactID}
                    flagChangeContactDate={flagChangeContactDate} loginId={props.UserId} />
                <div>
                    ПРИЛОЖЕННЫЕ ФОТО
                    <ArrowImgAgent 
                        fotoForPage={props.fotoForPage} idAgent={idAgent} contactID={contactID}
                        UserId={props.UserId} deleteImgFromPage={props.deleteImgFromPage}/>
                    {/* <div className={s.photo_box}>
                        {arrowImg}
                    </div> */}
                    <div>
                        {flagChangePhoto === true
                            ? <FormPhoto
                                fotoForPage={props.fotoForPage} idAgent={idAgent}
                                setFlagChangePhoto={setFlagChangePhoto} addPhoto={props.addPhoto}
                            />
                            : contactID == props.UserId
                                ? <div onClick={() => { setFlagChangePhoto(true) }}>
                                    <span>
                                        <img src={RegularButton} alt="add" />
                                    </span>
                                    <span>
                                        ДОБАВИТЬ ИЗОБРАЖЕНИЕ
                                    </span>
                                </div>
                                : null}
                    </div>
                </div>
            </div>
            <div className={cn(s.delete_page_box, { [s.delete_page_box__hide]: (flagDeletePage === false) })}>
                <DeleteAgentPageElement
                    deletePage={props.deletePage} idAgent={idAgent}
                    actionDelete={setFlagDeletePage}
                />
            </div>
        </div>
    );
}

const HeadPage = (props) => {//верхний элемент страницы
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
            {props.contactID == props.UserId
                ? <div className={s.head_action_menu}>
                    <div>
                        <img src={Linked} />
                    </div>
                    <div>
                        <img src={Update} />
                    </div>
                    <div onClick={() => {
                        props.actionDelete(true);
                    }}>
                        <img src={DeletePage} />
                    </div>
                </div>
                : null}
        </div>
    );
}

const ArrowImgAgent = (props) => {

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

    let arrowImg = props.fotoForPage[props.idAgent].map(el => {
        return (
            <div key={el.id}>
                <img src={el.img} />
                <div>
                    {splitString(el.img)}
                </div>
                <div>
                    {changeDataStile(el.date)}
                </div>
                {/* удаление изображения */}
                {props.contactID == props.UserId
                    ? <div onClick={() => { props.deleteImgFromPage(props.idAgent, el.id) }}>
                        <img src={DeletePhoto} alt="del" />
                    </div>
                    : null}
            </div>
        )
    })

    return (
        <div>
            <div className={s.photo_box}>
                {arrowImg}
            </div>
        </div>
    );
}

const DeleteAgentPageElement = (props) => { //окно для подтверждения удаления страницы
    return (
        <div>
            <div>Удалить каточку</div>
            <div>Отправить каточку организации в архив?</div>
            <div>
                <div onClick={() => {
                    props.actionDelete(false);
                }}>ОТМЕНА</div>
                <div onClick={() => {
                    props.deletePage(props.idAgent);
                }}>
                    <NavLink to='../'>
                        УДАЛИТЬ
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Agent;