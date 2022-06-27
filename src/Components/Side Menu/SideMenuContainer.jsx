import { connect } from "react-redux";
import SideMenu from "./SideMenu";
import {resetUserId} from "../../redux/appState/appState";

const mstp = (state) => ({

})

export default connect(mstp, {
    resetUserId
})(SideMenu);