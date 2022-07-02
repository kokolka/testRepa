import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import s from "./Agent.module.css";
import { getAuthorized, getPageOrganization } from "../../../api/api";
import BackArrow from "../../../assets/image/Back arrow.png";
import DeletePage from "../../../assets/image/Delete page.png";
import Linked from "../../../assets/image/Linked.png";
import Update from "../../../assets/image/Update.png";
import ChangeElement from "../../../assets/image/Change.png";
import FormName from "../../common/Forms/FormName/FormName";
import cn from "classnames";
import ContactDateWithChange from "../../common/ContactDateWithChange/ContactDateWithChange";
import GeneralInfoWithForm from "../../common/GeneralInfoWithForm/GeneralInfoWithForm";
import ArrayImgAgent from "../../common/ArrayImgAgent/ArrayImgAgent";
import PhotosForPageWithForm from "../../common/PhotosForPageWithForm/PhotosForPageWithForm";
import '../../../App.css';

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
    let [flagDeletePage, setFlagDeletePage] = useState(false); //флаг отвечающий за отображение окна удаления карточки организации

    let idAgentWithURL = useParams(); //получение id от url
    let idAgent = idAgentWithURL.id; //нужно для отображения необходимого набора данных

    let contactID = props.aboutAgent[idAgent].contactId; //id контакта, нужно для отображения контактной информации

    return (
        <div className={s.page_box}>
            <HeadPage actionDelete={setFlagDeletePage} contactID={contactID} UserId={props.UserId} />
            <div className={s.wrapper_box}>
                <div className={s.wrapper_box__name}>
                    {flagChangeName == true
                        ? <div>
                            <FormName
                                idAgent={idAgent} changeFlag={setFlagChangeName} setName={props.setName}
                                name={props.aboutAgent[idAgent].shortName} />
                        </div>
                        : <div>{props.aboutAgent[idAgent].shortName} 
                            {contactID == props.UserId
                                ? <span className='img_change' onClick={() => {
                                    setFlagChangeName(true)
                                }}>
                                    <img src={ChangeElement} alt="изм." />
                                </span>
                                : null}
                        </div>}
                </div>
                <GeneralInfoWithForm
                    idAgent={idAgent} setGeneralInfo={props.setGeneralInfo}
                    aboutAgent={props.aboutAgent} UserId={props.UserId} contactID={contactID}/>
                <ContactDateWithChange
                    contacts={props.contacts} setContactDate={props.setContactDate}
                    contactID={contactID} loginId={props.UserId} />
                <div className={s.photo_box}>
                    <div className={s.photo_box__name}>ПРИЛОЖЕННЫЕ ФОТО</div>
                    <ArrayImgAgent
                        fotoForPage={props.fotoForPage} idAgent={idAgent} contactID={contactID}
                        UserId={props.UserId} deleteImgFromPage={props.deleteImgFromPage} />
                    <div>
                        <PhotosForPageWithForm
                            idAgent={idAgent} fotoForPage={props.fotoForPage} addPhoto={props.addPhoto}
                            contactID={contactID} UserId={props.UserId} />
                    </div>
                </div>
                <div className={s.end_line}></div>
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
                    <div className={`${s.icon_element__link} ${s.icon_element}`}>
                        <img src={Linked} />
                    </div>
                    <div className={`${s.icon_element__update} ${s.icon_element}`}>
                        <img src={Update} />
                    </div>
                    <div className={`${s.icon_element__delete} ${s.icon_element}`} onClick={() => {
                        props.actionDelete(true);
                    }}>
                        <img src={DeletePage} />
                    </div>
                </div>
                : null}
        </div>
    );
}

const DeleteAgentPageElement = (props) => { //окно для подтверждения удаления страницы
    return (
        <div className={s.delete_page_box__main}>
            <div className={s.delete_page_box__main__name}>Удалить каточку</div>
            <div className={s.delete_page_box__main__text}>Отправить каточку организации в архив?</div>
            <div className={s.delete_page_box__main__button}>
                <div className={`${s.button_cancel} ${s.button}`} onClick={() => {
                    props.actionDelete(false);
                }}>ОТМЕНА</div>
                <div className={`${s.button_delete} ${s.button}`} onClick={() => {
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