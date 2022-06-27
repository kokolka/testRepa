
const SET_USER_ID = 'SET_USER_ID';

let initialState = {
    UserId: null
}

const appState = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_ID:{
            return{
                ...state,
                UserId: action.UserId
            }
        }
        default: return state;
    }
}

export const setUserId = (UserId) => ({type: SET_USER_ID, UserId})

export default appState;
