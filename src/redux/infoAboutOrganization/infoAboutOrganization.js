
const SET_INFO_PAGE = 'SET_INFO_PAGE';

let initialState = {
    pageInfo: null
}

const infoAboutOrganization = (state = initialState, action) => {
    switch (action.type){
        case SET_INFO_PAGE: 
            return{
                ...state,
                pageInfo: action.payload
            }
        default:
            return state;
    }
}

export const setInfoPage = (payload) =>({type: SET_INFO_PAGE, payload})