import React, { useState } from "react";
import ChangeElement from "../../../assets/image/Change.png";
import FormContactDate from "../Forms/FormContactDate/FormContactDate";
import numberChange from "../numberChange/numberChange";
import "../../../App.css";
import s from "../GeneralInfoWithForm/GeneralInfoWithForm.module.css";
import se from "./ContactDateWithChange.module.css";

const ContactDateWithChange = (props) => {
    let [flagChangeContactDate, setFlagChangeContactDate] = useState(false); //флаг отвечающий за отображение формы контактных данных

    return (
        <div className={s.main_box}>
            {flagChangeContactDate == true
                ? <div className={s.main_box__element}>
                    <FormContactDate
                        setContactDate={props.setContactDate} changeFlag={setFlagChangeContactDate}
                        lastname={props.contacts[props.contactID].lastname} firstname={props.contacts[props.contactID].firstname}
                        patronymic={props.contacts[props.contactID].patronymic} phone={props.contacts[props.contactID].phone}
                        email={props.contacts[props.contactID].email} userId={props.contactID}
                    />
                </div>
                : <div className={s.main_box__element}>
                    <div className={s.main_box__name}>
                        <span className={s.main_box__name__text}>КОНТАКТНЫЕ ДАННЫЕ</span>
                        {props.contactID == props.loginId
                            ? <span className='img_change' onClick={() => { setFlagChangeContactDate(true) }}>
                                <img src={ChangeElement} alt="изм." />
                            </span>
                            : null}
                    </div>
                    <div className={s.main_box__date_element}>
                        <label className={s.label}>ФИО:</label>
                        <span className={s.value}>{`${props.contacts[props.contactID].lastname} ${props.contacts[props.contactID].firstname} ${props.contacts[props.contactID].patronymic}`}</span>
                    </div>
                    <div className={s.main_box__date_element}>
                        <label className={s.label}>Телефон:</label>
                        <span className={s.value}>{numberChange(props.contacts[props.contactID].phone)}</span>
                    </div>
                    <div className={s.main_box__date_element}>
                        <label className={s.label}>Эл. почта:</label>
                        <span className={se.value_mail}>{props.contacts[props.contactID].email}</span>
                    </div>
                </div>}
        </div>
    );
}

export default ContactDateWithChange;