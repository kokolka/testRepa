import { connect } from 'react-redux';
import ChoiceOfAgent from './ChoiceOfAgent';

let mstp = (state) =>({
    aboutAgent: state.AboutAgent.pageData
})

export default connect(mstp)(ChoiceOfAgent);


