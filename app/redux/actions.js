export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_CITIES = 'GET_CITIES';
export const SUBMIT_USER_DATA = 'SUBMIT_USER_DATA';
import axios from 'axios';
const API_URL = "";

export const getCities = () => {
    try {
        return async dispatch => {
            // await axios.get(`https://jsonplaceholder.typicode.com/users`)
            //     .then(res => {
            //         const persons = res.data;
            //         console.log(persons);
            //     })
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            const data = await result.data;
            console.log('hhhhhhhhhhhhhhhhhhhh');
            console.log(data);
            if (data) {
                dispatch({
                    type: GET_CITIES,
                    payload: data
                });
            } else {
                console.log('Unable t featch!')
            }
        }

    } catch (error) {

    }
}
export const postUserData = (data) => dispatch => {
    try {
        console.log('data', data);
        dispatch({
            type: SUBMIT_USER_DATA,
            payload: data,
        });

    } catch (error) {

    }
}

export const setName = name => dispatch => {
    console.log('name', name);
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};
export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
};