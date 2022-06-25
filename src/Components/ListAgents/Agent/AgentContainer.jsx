import React from "react";
import Agent from "./Agent";
import { connect } from "react-redux";
import { deleteImgFromPage, setGeneralInfo } from "../../../redux/infoAboutOrganization/infoAboutOrganization";

const AgentContainer = (props) => {
    
    return(
        <Agent {...props}/>
    );
}

let mstp = (state) => ({
    aboutAgent: state.AboutAgent.pageData,
    fotoForPage: state.AboutAgent.photoById,
    contacts: state.contacts
})

export default connect(mstp, {
    deleteImgFromPage,
    setGeneralInfo
})(AgentContainer);