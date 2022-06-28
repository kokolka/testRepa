import React, {useState} from "react";
import FormGeneralInfo from "../Forms/FormGeneralInfo/FormGeneralInfo";
import ChangeElement from "../../../assets/image/Change.png";

const GeneralInfoWithForm = (props) => {
    let [flagChangeGeneralInfo, setFlagChangeGeneralInfo] = useState(false); //флаг отвечающий за отображение формы общей информаци
    
    let dataContract;
    if(props.aboutAgent[props.idAgent]){
        dataContract = props.aboutAgent[props.idAgent].contract.issue_date;
    }else{
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
        <div>
            {flagChangeGeneralInfo == true
                ? <div>
                    <FormGeneralInfo
                        idAgent={props.idAgent} setGeneralInfo={props.setGeneralInfo} changeFlag={setFlagChangeGeneralInfo}
                        shortName={props.aboutAgent[props.idAgent].shortName} businessEntity={props.aboutAgent[props.idAgent].businessEntity}
                        contractNo={props.aboutAgent[props.idAgent].contract.no}
                        date={`${dataContract.substr(0, 4)}-${dataContract.substr(5, 2)}-${dataContract.substr(8, 2)}`}
                        type={props.aboutAgent[props.idAgent].type}
                    />
                </div>
                : <div>
                    ОБЩАЯ ИНФОРМАЦИЯ
                    {props.contactID == props.UserId
                        ? <span onClick={() => { setFlagChangeGeneralInfo(true) }}>
                            <img src={ChangeElement} alt="изм." />
                        </span>
                        : null}
                    <div>
                        <label>Полное название:</label>
                        <span>{`${props.aboutAgent[props.idAgent].businessEntity} Фирма "${props.aboutAgent[props.idAgent].shortName}"`}</span>
                    </div>
                    <div>
                        <label>Договор:</label>
                        <span>{`${props.aboutAgent[props.idAgent].contract.no} от ${dataContract.substr(0, 4)}.${dataContract.substr(5, 2)}.${dataContract.substr(8, 2)}`}</span>
                    </div>
                    <div>
                        <label>Фирма:</label>
                        <span>{`${props.aboutAgent[props.idAgent].businessEntity}`}</span>
                    </div>
                    <div>
                        <label>Тип:</label>
                        <span>{arrowTypeAgent}</span>
                    </div>
                </div>}
        </div>
    );
}

export default GeneralInfoWithForm;