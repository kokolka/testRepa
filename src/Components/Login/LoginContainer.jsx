import { connect } from "react-redux";
import Login from "./Login";
import {setUserId} from "../../redux/appState/appState";

const mstp = (state) => ({
    appState: state.appState
})

export default connect(mstp, {
    setUserId
})(Login);