import React from "react";
import ChangeElement from "../../../assets/image/Change.png";
import FormContactDate from "../../ListAgents/Agent/FormContactDate/FormContactDate";
import numberChange from "../numberChange/numberChange";

const ContactDateWithChange = (props) => {
    return (
        <div>
            {props.flagChangeContactDate == true
                ? <div>
                    <FormContactDate 
                        setContactDate={props.setContactDate} changeFlag={props.setFlagChangeContactDate}
                        lastname={props.contacts[props.userIdAgent].lastname} firstname={props.contacts[props.userIdAgent].firstname}
                        patronymic={props.contacts[props.userIdAgent].patronymic} phone={props.contacts[props.userIdAgent].phone}
                        email={props.contacts[props.userIdAgent].email} userId={props.userIdAgent}
                    />
                </div>
                : <div>
                    КОНТАКТНЫЕ ДАННЫЕ
                    {props.contactID == props.loginId
                        ? <span onClick={() => { props.setFlagChangeContactDate(true) }}>
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