import React from "react";
import {
    useNavigate
} from "react-router-dom";
import { getAuthorized, getPageOrganization } from "../../../api/api";

let login = () =>{
    getAuthorized('USERNAME').then(response => {
        let a = response.data;
        debugger;
    })
}
let getParam = () =>{
    getPageOrganization(12).then(response => {
        debugger;
    })
}

const Agent = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <span onClick={() => {navigate(-1)}}>{'<--'}</span>
                <span>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
            </div>
            <div>
                <button onClick={login}>Login</button>
                <button onClick={getParam}>get page</button>
            </div>
        </div>
    );
}

export default Agent;