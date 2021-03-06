import React from "react";
import Agent from "./Agent";
import { connect } from "react-redux";
import { deleteImgFromPage, setGeneralInfo, setName, addPhoto, deletePage } from "../../../redux/infoAboutOrganization/infoAboutOrganization";
import {setContactDate} from "../../../redux/contactDetails/contactDetails";

const AgentContainer = (props) => {
    
    return(
        <Agent {...props}/>
    );
}

let mstp = (state) => ({
    aboutAgent: state.AboutAgent.pageData,
    fotoForPage: state.AboutAgent.photoById,
    contacts: state.contacts,
    UserId: state.appState.UserId      
})

export default connect(mstp, {
    deleteImgFromPage,
    setGeneralInfo,
    setContactDate,
    setName,
    addPhoto,
    deletePage
})(AgentContainer);