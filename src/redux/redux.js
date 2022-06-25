import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import contactDetails from "./contactDetails/contactDetails";
import infoAboutOrganization from "./infoAboutOrganization/infoAboutOrganization";



const reducers = combineReducers({
    AboutAgent: infoAboutOrganization,
    contacts: contactDetails
});

const connectAppDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, connectAppDevTools(
    applyMiddleware()
));

window.__store__ = store;

export default store;

