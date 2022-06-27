import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import ContactDateWithChange from "../common/ContactDateWithChange/ContactDateWithChange";

const Home = (props) => {
    let [flagChangeContactDate, setFlagChangeContactDate] = useState(false); //флаг отвечающий за отображение формы контактных данных

    if (!props.UserId) {
        return <Navigate to="../login" />;
    }

    return (
        <div>
            <div>
                {`Ваш контактный ID: ${props.UserId}`}
            </div>
            <div>
                <ContactDateWithChange
                    contacts={props.contacts} setContactDate={props.setContactDate}
                    setFlagChangeContactDate={setFlagChangeContactDate} contactID={props.UserId}
                    flagChangeContactDate={flagChangeContactDate} loginId={props.UserId} />
            </div>
        </div>
    );
}

export default Home;