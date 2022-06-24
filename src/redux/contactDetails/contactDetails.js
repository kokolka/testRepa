
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


        default:
            return state;
    }
}


export default contactDetails;