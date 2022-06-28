import React, {useState} from "react";
import ChangeElement from "../../../assets/image/Change.png";
import FormContactDate from "../Forms/FormContactDate/FormContactDate";
import numberChange from "../numberChange/numberChange";

const ContactDateWithChange = (props) => {
    let [flagChangeContactDate, setFlagChangeContactDate] = useState(false); //флаг отвечающий за отображение формы контактных данных

    return (
        <div>
            {flagChangeContactDate == true
                ? <div>
                    <FormContactDate 
                        setContactDate={props.setContactDate} changeFlag={setFlagChangeContactDate}
                        lastname={props.contacts[props.contactID].lastname} firstname={props.contacts[props.contactID].firstname}
                        patronymic={props.contacts[props.contactID].patronymic} phone={props.contacts[props.contactID].phone}
                        email={props.contacts[props.contactID].email} userId={props.contactID}
                    />
                </div>
                : <div>
                    КОНТАКТНЫЕ ДАННЫЕ
                    {props.contactID == props.loginId
                        ? <span onClick={() => { setFlagChangeContactDate(true) }}>
                            <img src={ChangeElement} alt="изм." />
                        </span>
                        : null}
                    <div>
                        <label>ФИО:</label>
                        <span>{`${props.contacts[props.contactID].lastname} ${props.contacts[props.contactID].firstname} ${props.contacts[props.contactID].patronymic}`}</span>
                    </div>
                    <div>
                        <label>Телефон:</label>
                        <span>{numberChange(props.contacts[props.contactID].phone)}</span>
                    </div>
                    <div>
                        <label>Эл. почта:</label>
                        <span>{props.contacts[props.contactID].email}</span>
                    </div>
                </div>}
        </div>
    );
}

export default ContactDateWithChange;