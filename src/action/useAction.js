const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS';

const doLogin = (data) =>{
    return{
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: data
    }
}

const setToken = (token) =>{
    return {
        type: 'SET_TOKEN',
        payload: token,
    };
}

export {doLogin, FETCH_USER_LOGIN_SUCCESS, setToken};