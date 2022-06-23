import { combineReducers, createStore } from "redux";
import infoAboutOrganization from "./infoAboutOrganization/infoAboutOrganization";



let reducers = combineReducers({
    AboutAgent: infoAboutOrganization
});

let store = createStore(reducers);

export default store;

