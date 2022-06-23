import React from "react";
import Agent from "./Agent";
import { connect } from 'react-redux';

const AgentContainer = (props) => {
    return(
        <Agent {...props}/>
    );
}

let mstp = (state) => ({
    aboutAgent: state.AboutAgent.pageInfo
})


export default connect(mstp)(AgentContainer);