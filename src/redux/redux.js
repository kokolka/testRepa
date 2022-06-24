import { combineReducers, createStore } from "redux";
import contactDetails from "./contactDetails/contactDetails";
import infoAboutOrganization from "./infoAboutOrganization/infoAboutOrganization";



let reducers = combineReducers({
    AboutAgent: infoAboutOrganization,
    contacts: contactDetails
});

let store = createStore(reducers);

export default store;

