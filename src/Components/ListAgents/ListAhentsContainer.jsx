import { connect } from "react-redux";
import ListAhents from "./ListAhents";

const mstp = (state) => ({
    UserId: state.appState.UserId,
    sizeApp: state.appState.sizeApp  
})

export default connect(mstp, {})(ListAhents);
