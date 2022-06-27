import React, {useState} from "react";
import { Navigate, NavLink } from "react-router-dom";
import ArrayImgAgent from "../common/ArrayImgAgent/ArrayImgAgent";
import ContactDateWithChange from "../common/ContactDateWithChange/ContactDateWithChange";
import GeneralInfoWithForm from "../common/GeneralInfoWithForm/GeneralInfoWithForm";

const Home = (props) => {
    let [flagChangeContactDate, setFlagChangeContactDate] = useState(false); //флаг отвечающий за отображение формы контактных данных
    let [flagChangeGeneralInfo, setFlagChangeGeneralInfo] = useState(false); //флаг отвечающий за отображение формы общей информаци

    if (!props.UserId) {//редирект на страницу логина, если пользователь не авторизован
        return <Navigate to="../login" />;
    }

    let idPagesAgents = [];
    
    for(let key in props.AboutAgent.pageData){ //получаю id страниц агентов с тем же контактным id
        if(props.AboutAgent.pageData[key].contactId == props.UserId){
            idPagesAgents.push(props.AboutAgent.pageData[key].id)
        }
    }

    let allPagesAgent = idPagesAgents.map(el => {
        return(
            <div key={el}>
                <div>
                <NavLink to={`../organizations/agents/${el}`} >
                    {`../organizations/agents/${el}`}
                </NavLink>
                </div>
                <div>
                    <GeneralInfoWithForm 
                    idAgent={el} setGeneralInfo={props.setGeneralInfo} setFlagChangeGeneralInfo={setFlagChangeGeneralInfo}
                    aboutAgent={props.AboutAgent.pageData} UserId={props.UserId} contactID={props.UserId}
                    flagChangeGeneralInfo={flagChangeGeneralInfo}/>
                </div>
                <div>
                    <ArrayImgAgent 
                    fotoForPage={props.AboutAgent.photoById} idAgent={el} contactID={props.UserId}
                    UserId={props.UserId} deleteImgFromPage={props.deleteImgFromPage}/>
                </div>
            </div>
        );
    })

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
            <div>
                {allPagesAgent}
            </div>
        </div>
    );
}

export default Home;