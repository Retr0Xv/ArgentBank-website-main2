import {RESET_USER, SET_TOKEN, SET_USER} from "../actions/userAction";

const initialState = {
    data: null,
    token: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case SET_USER:
            return {
                ...state,
                data: action.payload
            }
        case RESET_USER:
            return {
                ...state,
                data: null,
                token: null
            }
        default:
            return state;
    }
}

export default userReducer;