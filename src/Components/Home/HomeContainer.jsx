import { connect } from "react-redux";
import Home from "./Home";
import {setContactDate} from "../../redux/contactDetails/contactDetails";
import {setGeneralInfo} from "../../redux/infoAboutOrganization/infoAboutOrganization";

const mstp = (state) => ({
    contacts: state.contacts,
    UserId: state.appState.UserId,
    AboutAgent: state.AboutAgent
})

export default connect(mstp, {
    setContactDate,
    setGeneralInfo
})(Home);