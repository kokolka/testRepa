import React, { useState } from "react";
import FormGeneralInfo from "../Forms/FormGeneralInfo/FormGeneralInfo";
import ChangeElement from "../../../assets/image/Change.png";
import "../../../App.css";
import s from "./GeneralInfoWithForm.module.css";

const GeneralInfoWithForm = (props) => {
    let [flagChangeGeneralInfo, setFlagChangeGeneralInfo] = useState(false); //флаг отвечающий за отображение формы общей информаци

    let dataContract;
    if (props.aboutAgent[props.idAgent]) {
        dataContract = props.aboutAgent[props.idAgent].contract.issue_date;
    } else {
        dataContract = ''
    }

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
    let arrowTypeAgent = props.aboutAgent[props.idAgent].type.map(el => {
        return (
            <span key={el}>
                {`${el === props.aboutAgent[props.idAgent].type[0] ? '' : ','} ${dictionary(el)}`}
            </span>
        );
    });

    return (
        <div className={s.main_box}>
            {flagChangeGeneralInfo == true
                ? <div className={s.main_box__element}>
                    <FormGeneralInfo
                        idAgent={props.idAgent} setGeneralInfo={props.setGeneralInfo} changeFlag={setFlagChangeGeneralInfo}
                        shortName={props.aboutAgent[props.idAgent].shortName} businessEntity={props.aboutAgent[props.idAgent].businessEntity}
                        contractNo={props.aboutAgent[props.idAgent].contract.no}
                        date={`${dataContract.substr(0, 4)}-${dataContract.substr(5, 2)}-${dataContract.substr(8, 2)}`}
                        type={props.aboutAgent[props.idAgent].type}
                    />
                </div>
                : <div className={s.main_box__element}>
                    <div className={s.main_box__name}>
                        <span className={s.main_box__name__text}>ОБЩАЯ ИНФОРМАЦИЯ</span>
                        {props.contactID == props.UserId
                            ? <span className='img_change' onClick={() => { setFlagChangeGeneralInfo(true) }}>
                                <img src={ChangeElement} alt="изм." />
                            </span>
                            : null}
                    </div>
                    <div className={s.main_box__date_element}>
                        <label className={s.label}>Полное название:</label>
                        <span className={s.value}>{`${props.aboutAgent[props.idAgent].businessEntity} Фирма "${props.aboutAgent[props.idAgent].shortName}"`}</span>
                    </div>
                    <div className={s.main_box__date_element}>
                        <label className={s.label}>Договор:</label>
                        <span className={s.value}>{`${props.aboutAgent[props.idAgent].contract.no} от ${dataContract.substr(0, 4)}.${dataContract.substr(5, 2)}.${dataContract.substr(8, 2)}`}</span>
                    </div>
                    <div className={s.main_box__date_element}>
                        <label className={s.label}>Форма:</label>
                        <span className={s.value}>{`${props.aboutAgent[props.idAgent].businessEntity}`}</span>
                    </div>
                    <div className={s.main_box__date_element}>
                        <label className={s.label}>Тип:</label>
                        <span className={s.value}>{arrowTypeAgent}</span>
                    </div>
                </div>}
        </div>
    );
}

export default GeneralInfoWithForm;