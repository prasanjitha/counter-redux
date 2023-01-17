export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PAWWSORD = 'SET_PAWWSORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';
export const INCREMNT_DATA = 'INCREMNT_DATA';

export const setUserame = name => dispatch => {
    console.log('name', name);
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};
export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: email,
    });
};
export const setPassword = password => dispatch => {
    dispatch({
        type: SET_PAWWSORD,
        payload: password,
    });
};
export const setConPassword = conPassword => dispatch => {
    dispatch({
        type: SET_CONFIRM_PASSWORD,
        payload: conPassword,
    });
};
export const setIncrementCount = count => dispatch => {
    console.log(count);
    dispatch({
        type: INCREMNT_DATA,
        payload: count,
    });
};

export const submitUserData = (data) => dispatch => {
    try {
        console.log('data', data);
        dispatch({
            type: SUBMIT_USER_DATA,
            payload: data,
        });
    } catch (error) {
    }
}