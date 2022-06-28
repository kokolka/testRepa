import { connect } from "react-redux";
import CreatePageAgent from "./CreatePageAgent";
import {
    addPhotoCreatePage, 
    deletePhotoCreatePage, 
    addNewPage, 
    clearPhotoCreatePage
} from "../../redux/infoAboutOrganization/infoAboutOrganization";

const mstp = (state) =>({
    UserId: state.appState.UserId,
    AboutAgent: state.AboutAgent
})

export default connect(mstp, {
    addPhotoCreatePage,
    deletePhotoCreatePage,
    addNewPage,
    clearPhotoCreatePage
})(CreatePageAgent);