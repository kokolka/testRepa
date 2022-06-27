import { connect } from "react-redux";
import Login from "./Login";
import {setUserId} from "../../redux/appState/appState";
import {addNewPersona} from "../../redux/contactDetails/contactDetails";

const mstp = (state) => ({
    UserId: state.appState.UserId,
    contacts: state.contacts,
})

export default connect(mstp, {
    setUserId,
    addNewPersona
})(Login);