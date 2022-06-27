const SET_CONTACT_DATE = 'SET_CONTACT_DATE';
const ADD_NEW_PERSONA = 'ADD_NEW_PERSONA';

let initialState = {
    16: {
        "id": "16",
        "lastname": "Григорьев",
        "firstname": "Сергей",
        "patronymic": "Петрович",
        "phone": "79162165588",
        "email": "grigoriev@funeral.com",
        "createdAt": "2020-11-21T08:03:26.589Z",
        "updatedAt": "2020-11-23T09:30:00Z"
    },
    17: {
        "id": "17",
        "lastname": "Петрович",
        "firstname": "Петрович",
        "patronymic": "Петрович",
        "phone": "79162169999",
        "email": "petrovich@funeral.com",
        "createdAt": "2020-11-21T08:03:26.589Z",
        "updatedAt": "2020-11-23T09:30:00Z"
    }
}

const contactDetails = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_DATE: {
            //копирование данных
            let copyState = {
                ...state,
                [action.userId]: { ...state[action.userId] }
            };
            //изменение данных
            copyState[action.userId].lastname = action.newLastname;
            copyState[action.userId].firstname = action.newFirstname;
            copyState[action.userId].patronymic = action.newPatronymic;
            copyState[action.userId].phone = action.newPhone;
            copyState[action.userId].email = action.newEmail;
            return copyState;
        }
        case ADD_NEW_PERSONA: {
            let newPersone = {
                "id": `${action.newUserID}`,
                "lastname": action.lastname,
                "firstname": action.firstname,
                "patronymic": action.patronymic,
                "phone": `${action.phone}`,
                "email": action.email,
                "createdAt": "2020-11-21T08:03:26.589Z", 
                "updatedAt": "2020-11-23T09:30:00Z"
            }
            return {
                ...state,
                [action.newUserID]: newPersone
            }
        }
        default: return state;
    }
}

export const setContactDate = (userId, newLastname, newFirstname, newPatronymic, newPhone, newEmail) => (
    { type: SET_CONTACT_DATE, userId, newLastname, newFirstname, newPatronymic, newPhone, newEmail }
)
export const addNewPersona = (newUserID, lastname, firstname, patronymic, phone, email) => (
    { type: ADD_NEW_PERSONA, newUserID, lastname, firstname, patronymic, phone, email }
)

export default contactDetails;