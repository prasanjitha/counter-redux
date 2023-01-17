import { SET_CONFIRM_PASSWORD, SET_EMAIL, SET_PAWWSORD, SET_USER_NAME, SUBMIT_USER_DATA, INCREMNT_DATA } from './user-actions';

const initialState = {
    username: '',
    email: '',
    password: '',
    conPassword: '',
    registerData: {},
    count: 0,
}

function registerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, username: action.payload };
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_PAWWSORD:
            return { ...state, password: action.payload };
        case SET_CONFIRM_PASSWORD:
            return { ...state, conPassword: action.payload };
        case SUBMIT_USER_DATA:
            return { ...state, registerData: action.payload };
        case INCREMNT_DATA:
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }
}

export default registerReducer;