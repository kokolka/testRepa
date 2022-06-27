import { connect } from "react-redux";
import Home from "./Home";
import {setContactDate} from "../../redux/contactDetails/contactDetails";

const mstp = (state) => ({
    contacts: state.contacts,
    UserId: state.appState.UserId
})

export default connect(mstp, {
    setContactDate
})(Home);