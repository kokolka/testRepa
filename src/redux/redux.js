import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import appState from "./appState/appState";
import contactDetails from "./contactDetails/contactDetails";
import infoAboutOrganization from "./infoAboutOrganization/infoAboutOrganization";

const reducers = combineReducers({
    AboutAgent: infoAboutOrganization,
    contacts: contactDetails,
    appState: appState
});

const connectAppDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, connectAppDevTools(
    applyMiddleware()
));

window.__store__ = store;

export default store;

