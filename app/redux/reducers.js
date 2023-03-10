import { SET_USER_AGE, SET_USER_NAME, GET_CITIES, SUBMIT_USER_DATA } from "./actions";

const initialState = {
    name: '',
    age: 0,
    cities: [],
    userData: {},
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_USER_AGE:
            return { ...state, age: action.payload };
        case GET_CITIES:
            return { ...state, cities: action.payload };
        case SUBMIT_USER_DATA:
            return { ...state, userData: action.payload };
        default:
            return state;
    }
}

export default userReducer;