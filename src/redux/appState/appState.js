
const SET_USER_ID = 'SET_USER_ID';
const RESET_USER_ID = 'RESET_USER_ID';

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
        case RESET_USER_ID:{
            return{
                ...state,
                UserId: null
            }
        }
        default: return state;
    }
}

export const setUserId = (UserId) => ({type: SET_USER_ID, UserId});
export const resetUserId = () => ({type: RESET_USER_ID});

export default appState;
