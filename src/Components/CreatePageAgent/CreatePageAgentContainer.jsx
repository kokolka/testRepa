import { connect } from "react-redux";
import CreatePageAgent from "./CreatePageAgent";

const mstp = (state) =>({
    UserId: state.appState.UserId,
    AboutAgent: state.AboutAgent
})

export default connect(mstp, {

})(CreatePageAgent);