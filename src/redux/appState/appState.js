
const SET_USER_ID = 'SET_USER_ID';
const RESET_USER_ID = 'RESET_USER_ID';
const SET_SIZE_APP = 'SET_SIZE_APP';

let initialState = {
    UserId: null,
    sizeApp: null
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
        case SET_SIZE_APP:{
            return{
                ...state,
                sizeApp: action.size
            }
        }
        default: return state;
    }
}

export const setUserId = (UserId) => ({type: SET_USER_ID, UserId});
export const resetUserId = () => ({type: RESET_USER_ID});
export const setSizeApp = (size) => ({type: SET_SIZE_APP, size});

export default appState;
